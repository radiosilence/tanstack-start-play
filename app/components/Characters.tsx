import { graffle } from "@/graffle";
import type { QueryFunction } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { graphql, readFragment, type TadaDocumentNode } from "gql.tada";
import type { ComponentType } from "react";

const LocationDocument = graphql(`
  fragment Location on Location {
    name
    type
    dimension
  }
`);

export const CharactersDocument = graphql(
  `
  query Characters {
    characters {
      results {
        name
        image
        status
        species
        type
        gender
        origin {
          ...Location
        }
        location {
          ...Location
        }
        episode {
          name
        }
      }
    }
  }
`,
  [LocationDocument],
);

export const getCharactersOptions = () =>
  queryOptions({
    queryKey: [CharactersDocument, ""] as const,
    queryFn: ({ queryKey: [doc, args] }) => graffle.gql(doc).send(args),
    staleTime: Number.POSITIVE_INFINITY, // Data never becomes stale
    gcTime: Number.POSITIVE_INFINITY, // Keep data in cache indefinitely
    refetchOnMount: false, // Don't refetch when component mounts
    refetchOnWindowFocus: false, // Don't refetch when window gains focus
    refetchOnReconnect: false, // Don't refetch when reconnecting
  });

// export function useQueryGql<
//   T extends Record<string, unknown>,
//   A extends Record<string, any>,
// >(
//   doc: TadaDocumentNode<T, A>,
//   args: A,
//   opts: Omit<UseSuspenseQueryOptions, "queryKey" | "queryFn"> = {},
// ) {
//   return useSuspenseQuery({
//     queryKey: [doc, args] as const,
//     queryFn: ({ queryKey: [doc, args] }) => graffle.gql(doc).send(args),
//     ...opts,
//   });
// }

// const [a, b] = useQueryGql(CharactersDocument, { name: "baz" });
const getStatusColor = (status: string | null | undefined): string => {
  if (!status) return "badge-neutral";

  const statusLower = status.toLowerCase();

  switch (statusLower) {
    case "alive":
      return "badge-success";
    case "dead":
      return "badge-error";
    case "unknown":
      return "badge-warning";
    default:
      return "badge-neutral";
  }
};

const getStatusEmoji = (status: string | null | undefined): string => {
  if (!status) return "❓";

  const statusLower = status.toLowerCase();

  switch (statusLower) {
    case "alive":
      return "✅";
    case "dead":
      return "💀";
    case "unknown":
      return "❓";
    default:
      return "❓";
  }
};

const getGenderEmoji = (gender: string | null | undefined): string => {
  if (!gender) return "❓";

  const genderLower = gender.toLowerCase();

  switch (genderLower) {
    case "male":
      return "👨";
    case "female":
      return "👩";
    case "genderless":
      return "⚪";
    case "unknown":
      return "❓";
    default:
      return "❓";
  }
};

export const Characters: ComponentType = () => {
  const name = "baz";
  console.log("🎨 Rendering Characters component");
  const { data, refetch } = useSuspenseQuery(getCharactersOptions());

  // const { data, refetch } = useQueryGQL(CharactersDocument, { name });
  console.log(
    "📊 Current character data in component:",
    data?.characters?.results?.length,
    "characters",
  );

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">🚀 Rick & Morty Characters</h1>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.characters?.results?.map((character, index) => {
          console.log("👤 Rendering character:", character?.name);
          return (
            <div
              key={`${character?.name}-${index}`}
              className="card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40"
            >
              {/* Character Image */}
              {character?.image && (
                <figure className="relative">
                  <img
                    src={character.image}
                    alt={character?.name || "Character"}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2">
                    <div
                      className={`badge badge-lg ${getStatusColor(character?.status)}`}
                    >
                      {getStatusEmoji(character?.status)} {character?.status}
                    </div>
                  </div>
                </figure>
              )}

              <div className="card-body p-4">
                {/* Character Name */}
                <h2 className="card-title text-xl font-bold mb-3 text-center">
                  {character?.name}
                </h2>

                {/* Basic Info */}
                <div className="space-y-3">
                  {/* Species & Type */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {character?.species && (
                      <div className="badge badge-outline badge-lg">
                        🧬 {character.species}
                      </div>
                    )}
                    {character?.type && (
                      <div className="badge badge-outline badge-sm">
                        🏷️ {character.type}
                      </div>
                    )}
                  </div>

                  {/* Gender */}
                  {character?.gender && (
                    <div className="text-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-base-300 text-sm font-medium">
                        {getGenderEmoji(character.gender)} {character.gender}
                      </span>
                    </div>
                  )}

                  {/* Origin */}
                  {(() => {
                    const origin = character?.origin
                      ? readFragment(LocationDocument, character.origin)
                      : null;
                    return (
                      origin?.name && (
                        <div className="bg-base-300 rounded-lg p-3">
                          <div className="text-sm font-semibold text-base-content/70 mb-1">
                            🏠 Origin
                          </div>
                          <div className="font-medium">{origin.name}</div>
                          {origin.type && (
                            <div className="text-xs text-base-content/60">
                              {origin.type}
                            </div>
                          )}
                          {origin.dimension && (
                            <div className="text-xs text-base-content/60">
                              📐 {origin.dimension}
                            </div>
                          )}
                        </div>
                      )
                    );
                  })()}

                  {/* Current Location */}
                  {(() => {
                    const location = character?.location
                      ? readFragment(LocationDocument, character.location)
                      : null;
                    return (
                      location?.name && (
                        <div className="bg-base-300 rounded-lg p-3">
                          <div className="text-sm font-semibold text-base-content/70 mb-1">
                            📍 Location
                          </div>
                          <div className="font-medium">{location.name}</div>
                          {location.type && (
                            <div className="text-xs text-base-content/60">
                              {location.type}
                            </div>
                          )}
                          {location.dimension && (
                            <div className="text-xs text-base-content/60">
                              📐 {location.dimension}
                            </div>
                          )}
                        </div>
                      )
                    );
                  })()}

                  {/* Episodes */}
                  {character?.episode && character.episode.length > 0 && (
                    <div className="collapse collapse-arrow bg-primary/10 rounded-lg">
                      <input type="checkbox" />
                      <div className="collapse-title text-sm font-semibold text-primary py-2 px-3 min-h-0">
                        📺 Featured Episodes ({character.episode.length})
                      </div>
                      <div className="collapse-content px-3 pb-3">
                        <div className="space-y-1">
                          {character.episode.map((ep) => (
                            <div
                              key={ep?.name}
                              className="text-xs text-base-content/80"
                            >
                              • {ep?.name}
                            </div>
                          ))}
                        </div>
                      </div>
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
