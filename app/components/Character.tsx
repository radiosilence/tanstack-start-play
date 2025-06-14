import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { graphql, type TadaDocumentNode } from "gql.tada";
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

// example doc from r&m free api
export const CharactersDocument = graphql(`
  query Characters {
    characters {
      results {
        name
      }
    }
  }
`);

export const getOptions = <
  Data extends Record<string, unknown>,
  Vars extends Record<string, unknown>,
>(
  doc: TadaDocumentNode<Data, Vars>,
  vars?: Vars,
) => {
  return queryOptions({
    queryKey: [doc, vars] as const,
    queryFn: ({ queryKey: [doc, vars] }) => {
      /* Argument of type '[Vars]' is not assignable to parameter of type
      'SendArguments__<IsUnknown<Vars> extends true ? Variables : Vars, GetVariablesInputKind<IsUnknown<Vars> extends true ? Variables : Vars>>'. (ts 2345) */
      return graffle.gql(doc).send(vars);
    },
  });
};

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
  const list = useSuspenseQuery(getOptions(CharactersDocument));
  const concrete = useSuspenseQuery(getCharacterOptions(id));
  return (
    <>
      {generic.data?.character?.name}
      {concrete.data?.character?.name}
      {JSON.stringify(list.data?.characters?.results)}
    </>
  );
};
