import { graffle } from "@/graffle";
import type { QueryFunction } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { graphql } from "gql.tada";
import type { ComponentType } from "react";

export const CharacterDocument = graphql(`
  query Character($id: ID!) {
    character(id: $id) {
      name
    }
  }
`);
const queryFn: QueryFunction<
  {
    character: {
      name: string | null;
    } | null;
  } | null,
  readonly [
    typeof CharacterDocument,
    {
      readonly id: string;
    },
  ],
  never
> = ({ queryKey: [doc, variables] }) => {
  return graffle.gql(doc).send(variables);
};

export const getCharacterOptions = (id: string) =>
  queryOptions({
    queryKey: [CharacterDocument, { id }] as const,
    queryFn,
  });

export const Character: ComponentType<{ id: string }> = ({ id }) => {
  const { data } = useSuspenseQuery(getCharacterOptions(id));
  return <>{data?.character?.name}</>;
};
