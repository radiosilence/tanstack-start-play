import { Link } from "@tanstack/react-router";
import { graphql, readFragment, type FragmentOf } from "gql.tada";
import type { ComponentType } from "react";

const LocationDocument = graphql(`
  fragment Location on Location {
    name
    type
    dimension
  }
`);

export const CharacterCardDocument = graphql(
  `fragment CharacterCard on Character {
    id
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
  }`,
  [LocationDocument],
);

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

export const CharacterCard: ComponentType<{
  data: FragmentOf<typeof CharacterCardDocument>;
}> = ({ data }) => {
  const character = readFragment(CharacterCardDocument, data);
  if (!character?.id) return null;
  console.log("👤 Rendering character:", character.name);
  return (
    <div
      key={`${character.id}`}
      className="card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40"
    >
      {/* Character Image */}
      {character.image && (
        <figure className="relative">
          <img
            src={character.image}
            alt={character.name || "Character"}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 right-2">
            <div
              className={`badge badge-lg ${getStatusColor(character.status)}`}
            >
              {getStatusEmoji(character.status)} {character.status}
            </div>
          </div>
        </figure>
      )}

      <div className="card-body p-4">
        {/* Character Name */}
        <h2 className="card-title text-xl font-bold mb-3 text-center">
          <Link
            to="/characters/$characterId"
            params={{
              characterId: character.id,
            }}
          >
            {character.name}
          </Link>
        </h2>

        {/* Basic Info */}
        <div className="space-y-3">
          {/* Species & Type */}
          <div className="flex flex-wrap gap-2 justify-center">
            {character.species && (
              <div className="badge badge-outline badge-lg">
                🧬 {character.species}
              </div>
            )}
            {character.type && (
              <div className="badge badge-outline badge-sm">
                🏷️ {character.type}
              </div>
            )}
          </div>

          {/* Gender */}
          {character.gender && (
            <div className="text-center">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-base-300 text-sm font-medium">
                {getGenderEmoji(character.gender)} {character.gender}
              </span>
            </div>
          )}

          {/* Origin */}
          {(() => {
            const origin = character.origin
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
            const location = character.location
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
          {character.episode && character.episode.length > 0 && (
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
};
