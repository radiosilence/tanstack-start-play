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

export const getOptions2 = <
  TDoc extends TadaDocumentNode<any, any>,
  TVars extends TDoc extends TadaDocumentNode<any, infer V> ? V : never,
>(
  doc: TDoc,
  vars?: TVars,
) =>
  queryOptions({
    queryKey: [doc, vars] as const,
    queryFn: ({ queryKey: [d, ...rest] }) => {
      const gqlDoc = graffle.gql(d);
      return gqlDoc.send(...(rest as Parameters<typeof gqlDoc.send>));
    },
  });

export const getOptions = <
  Data extends Record<string, unknown>,
  Vars extends Record<string, unknown>,
>(
  doc: TadaDocumentNode<Data, Vars>,
  vars?: Vars,
) =>
  queryOptions({
    queryKey: [doc, vars] as const,
    queryFn: ({ queryKey: [d, ...rest] }) => {
      const gqlDoc = graffle.gql(d);
      return gqlDoc.send(...(rest as Parameters<typeof gqlDoc.send>));
    },
  });

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
  const generic2 = useSuspenseQuery(getOptions2(CharacterDocument, { id }));
  const concrete = useSuspenseQuery(getCharacterOptions(id));
  return (
    <ul>
      <li>generic: {generic.data?.character?.name}</li>
      <li>generic2: {generic2.data?.character?.name}</li>
      <li>concrete: {concrete.data?.character?.name}</li>
    </ul>
  );
};
