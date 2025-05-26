import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { graphql, type ResultOf } from "gql.tada";
import type { ComponentType } from "react";
import { graffle } from "../graffle";

export const RocketsDocument = graphql(`
  query Rockets {
    rockets {
      name
      id
    }
  }
`);

const rocketsQuery = async () => graffle.gql(RocketsDocument).send();

export const fetchRockets = createServerFn({ method: "GET" }).handler(() =>
  rocketsQuery(),
);

export const getRocketsOptions = ({
  initialData,
}: {
  initialData?: ResultOf<typeof RocketsDocument> | null | undefined;
} = {}) =>
  queryOptions({
    queryKey: ["rockets"],
    queryFn: () => rocketsQuery(),
    initialData,
    staleTime: Number.POSITIVE_INFINITY,
  });

export const Rockets: ComponentType<{
  initialData: ResultOf<typeof RocketsDocument> | null | undefined;
}> = ({ initialData }) => {
  const { data, refetch } = useSuspenseQuery(
    getRocketsOptions({ initialData }),
  );

  return (
    <>
      <button type="button" className="btn" onClick={() => refetch()}>
        Revalidate
      </button>
      <ul className="list">
        {data?.rockets?.map((rocket) => (
          <li key={rocket?.id} className="list-row">
            {rocket?.name}
          </li>
        ))}
      </ul>
    </>
  );
};
