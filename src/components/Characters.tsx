import { gqlOptions } from "@/graffle";
import { useSuspenseQuery } from "@tanstack/react-query";
import { graphql } from "gql.tada";
import type { ComponentType } from "react";
import { CharacterCard, CharacterCardDocument } from "./CharacterCard";

export const CharactersDocument = graphql(
  `
    query Characters {
      characters {
        results {
          id
          ...CharacterCard
        }
      }
    }
  `,
  [CharacterCardDocument],
);

export const Characters: ComponentType = () => {
  console.log("🎨 Rendering Characters component");
  const { data, refetch } = useSuspenseQuery(gqlOptions(CharactersDocument));

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
        {data?.characters?.results?.map(
          (character) =>
            character && <CharacterCard key={character.id} data={character} />,
        )}
      </div>
    </>
  );
};
