import { getOptions } from "@/graffle";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { graphql } from "gql.tada";
import { Graffle } from "graffle";
import type { ComponentType } from "react";

export const graffle = Graffle.create().transport({
  url: "https://rickandmortyapi.com/graphql",
});

// example doc from r&m free api
export const CharacterDocument = graphql(`
  query Character($id: ID!) {
    character(id: $id) {
      name
    }
  }
`);

// Concrete example works fine!!!
export const getCharacterOptions = (id: string) => {
  return queryOptions({
    queryKey: [CharacterDocument, { id }] as const,
    queryFn: ({ queryKey: [doc, vars] }) => graffle.gql(doc).send(vars),
  });
};

export const Character: ComponentType<{ id: string }> = ({ id }) => {
  // A nice succinct function that can be used in SSR or CSR
  const generic = useSuspenseQuery(getOptions(CharacterDocument, { id }));
  const concrete = useSuspenseQuery(getCharacterOptions(id));
  return (
    <ul>
      <li>generic: {generic.data?.character?.name}</li>
      <li>concrete: {concrete.data?.character?.name}</li>
    </ul>
  );
};
