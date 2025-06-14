import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { TadaDocumentNode } from "gql.tada";
import { Graffle } from "graffle";
import { config } from "./config";

export const graffle = Graffle.create().transport(config.gqlTransport);

export const gqlOptions = <
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
