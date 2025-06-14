import { gqlOptions } from "@/graffle";
import { useSuspenseQuery } from "@tanstack/react-query";
import { graphql } from "gql.tada";
import { Graffle } from "graffle";
import type { ComponentType } from "react";
import { CharacterCard, CharacterCardDocument } from "./CharacterCard";

export const graffle = Graffle.create().transport({
  url: "https://rickandmortyapi.com/graphql",
});

// example doc from r&m free api
export const CharacterDocument = graphql(
  `
  query Character($characterId: ID!) {
    character(id: $characterId) {
      ...CharacterCard
    }
  }
`,
  [CharacterCardDocument],
);

export const Character: ComponentType<{ characterId: string }> = ({
  characterId,
}) => {
  // A nice succinct function that can be used in SSR or CSR
  const { data } = useSuspenseQuery(
    gqlOptions(CharacterDocument, { characterId }),
  );

  return data?.character && <CharacterCard data={data.character} />;
};
