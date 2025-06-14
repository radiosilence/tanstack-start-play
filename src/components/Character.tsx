import { gqlOptions } from "@/graffle";
import { useSuspenseQuery } from "@tanstack/react-query";
import { graphql } from "gql.tada";
import { Graffle } from "graffle";
import type { ComponentType } from "react";

export const graffle = Graffle.create().transport({
  url: "https://rickandmortyapi.com/graphql",
});

// example doc from r&m free api
export const CharacterDocument = graphql(`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      name
    }
  }
`);

export const Character: ComponentType<{ characterId: string }> = ({
  characterId,
}) => {
  // A nice succinct function that can be used in SSR or CSR
  const generic = useSuspenseQuery(
    gqlOptions(CharacterDocument, { characterId }),
  );
  return (
    <ul>
      <li>generic: {generic.data?.character?.name}</li>
    </ul>
  );
};
