import { useQuery } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { type ResultOf, graphql } from "gql.tada";
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

const INTERNAL__getRockets = async () => graffle.gql(RocketsDocument).send();

export const getRockets = createServerFn({
  type: "static",
}).handler(() => INTERNAL__getRockets());

const RocketSkeleton = () => (
  <span className="loading loading-ring loading-md" />
);

export const Rockets: ComponentType<{
  initialData: ResultOf<typeof RocketsDocument> | null | undefined;
}> = ({ initialData }) => {
  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: ["rockets"],
    queryFn: INTERNAL__getRockets,
    initialData,
    staleTime: 1000,
  });
  console.log({
    data,
    refetch,
    isLoading,
  });

  return (
    <>
      <button type="button" className="btn" onClick={() => refetch()}>
        Revalidate
      </button>
      <ul className="list">
        {isLoading || isRefetching ? (
          <RocketSkeleton />
        ) : (
          data?.rockets?.map((rocket) => (
            <li key={rocket?.id} className="list-row">
              {rocket?.name}
            </li>
          ))
        )}
      </ul>
    </>
  );
};
