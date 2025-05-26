import { graffle } from "@/graffle";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { graphql, type ResultOf } from "gql.tada";
import type { ComponentType } from "react";

export const RocketsDocument = graphql(`
  query Rockets {
    rockets {
      id
      name
      active
      wikipedia
      description
      height {
        meters
      }
      landing_legs {
        material
        number
      }
      boosters
      cost_per_launch
      company
      country
      engines {
        layout
        number
        type
      }
    }
  }
`);

export const getRocketsOptions = () =>
  queryOptions({
    queryKey: ["rockets"],
    queryFn: () => {
      console.log("🔄 Query function called for rockets");
      return graffle.gql(RocketsDocument).send();
    },
  });

const formatCurrency = (amount: number | null | undefined) => {
  if (!amount) return "💸 Not disclosed";
  return `💰 $${amount.toLocaleString()}`;
};

const getCountryFlag = (country: string | null | undefined): string => {
  if (!country) return "🌍";

  const countryLower = country.toLowerCase();

  // Map common country names to their flag emojis
  const flagMap: Record<string, string> = {
    "united states": "🇺🇸",
    usa: "🇺🇸",
    us: "🇺🇸",
    america: "🇺🇸",
    "republic of the marshall islands": "🇲🇭",
    "marshall islands": "🇲🇭",
    russia: "🇷🇺",
    "russian federation": "🇷🇺",
    china: "🇨🇳",
    france: "🇫🇷",
    india: "🇮🇳",
    japan: "🇯🇵",
    canada: "🇨🇦",
    "united kingdom": "🇬🇧",
    uk: "🇬🇧",
    germany: "🇩🇪",
    italy: "🇮🇹",
    spain: "🇪🇸",
    israel: "🇮🇱",
    "new zealand": "🇳🇿",
    "south korea": "🇰🇷",
    australia: "🇦🇺",
  };

  return flagMap[countryLower] || "🌍";
};

export const Rockets: ComponentType<{
  data?: ResultOf<typeof RocketsDocument> | null | undefined;
  refetch?: () => void;
}> = () => {
  console.log("🎨 Rendering Rockets component");
  const { data, refetch } = useSuspenseQuery(getRocketsOptions());
  console.log(
    "📊 Current rocket data in component:",
    data?.rockets?.length,
    "rockets",
  );

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">🚀 SpaceX Rockets Gallery</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            console.log("🔄 Manual refetch triggered by user");
            refetch();
          }}
        >
          🔄 Refresh Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data?.rockets?.map((rocket) => {
          console.log(
            "🚀 Rendering rocket:",
            rocket?.name,
            "with ID:",
            rocket?.id,
          );
          return (
            <div
              key={rocket?.id}
              className="card bg-gradient-to-br from-base-100 to-base-200 transition-all duration-300 border border-base-300"
            >
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="card-title text-2xl font-bold">
                    🚀 {rocket?.name}
                  </h2>
                  <span
                    className={`badge badge-lg font-semibold ${rocket?.active ? "badge-success" : "badge-error"}`}
                  >
                    {rocket?.active ? "🟢 Active" : "🔴 Inactive"}
                  </span>
                </div>

                {/* Description */}
                {rocket?.description && (
                  <div className="mb-4">
                    <p className="text-base-content/80 leading-relaxed">
                      {rocket.description}
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Company & Country */}
                  <div className="flex flex-wrap gap-2">
                    {rocket?.company && (
                      <div className="badge badge-outline badge-lg">
                        🏢 {rocket.company}
                      </div>
                    )}
                    {rocket?.country && (
                      <div className="badge badge-outline badge-lg">
                        {getCountryFlag(rocket.country)} {rocket.country}
                      </div>
                    )}
                  </div>

                  {/* Physical Stats */}
                  <div className="bg-base-300 rounded-lg p-4 space-y-2">
                    <h3 className="font-semibold text-lg">📐 Specifications</h3>
                    {rocket?.height?.meters && (
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📏 Height:</span>
                        <span>{rocket.height.meters}m</span>
                      </div>
                    )}
                    {rocket?.boosters !== null &&
                      rocket?.boosters !== undefined && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">🔥 Boosters:</span>
                          <span>{rocket.boosters}</span>
                        </div>
                      )}
                    {rocket?.cost_per_launch && (
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Launch Cost:</span>
                        <span>{formatCurrency(rocket.cost_per_launch)}</span>
                      </div>
                    )}
                  </div>

                  {/* Engine Info */}
                  {rocket?.engines && (
                    <div className="bg-base-300 rounded-lg p-4 space-y-2">
                      <h3 className="font-semibold text-lg">
                        ⚙️ Engine Details
                      </h3>
                      {rocket.engines.number && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">🔢 Count:</span>
                          <span>{rocket.engines.number} engines</span>
                        </div>
                      )}
                      {rocket.engines.type && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">⚡ Type:</span>
                          <span className="capitalize">
                            {rocket.engines.type}
                          </span>
                        </div>
                      )}
                      {rocket.engines.layout && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">📐 Layout:</span>
                          <span className="capitalize">
                            {rocket.engines.layout}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Landing Legs */}
                  {rocket?.landing_legs && (
                    <div className="bg-base-300 rounded-lg p-4 space-y-2">
                      <h3 className="font-semibold text-lg">
                        🦵 Landing System
                      </h3>
                      {rocket.landing_legs.number && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">🔢 Legs:</span>
                          <span>{rocket.landing_legs.number}</span>
                        </div>
                      )}
                      {rocket.landing_legs.material && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">🏗️ Material:</span>
                          <span className="capitalize">
                            {rocket.landing_legs.material}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Wikipedia Link */}
                  {rocket?.wikipedia && (
                    <div className="card-actions justify-end">
                      <a
                        href={rocket.wikipedia}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-outline"
                      >
                        📖 Learn More on Wikipedia
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
