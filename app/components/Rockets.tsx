import { graphql } from "gql.tada";
import type { ComponentType } from "react";
import { graffle } from "../graffle";
import { useQuery } from "@tanstack/react-query";

const RocketsDocument = graphql(`
  query Rockets {
    rockets {
      name
      id
      active
      description
      cost_per_launch
      boosters
      active
      engines {
        number
        layout
        version
      }
      height {
        meters
      }
    }
  }
`);

export const Rockets: ComponentType = () => {
  const { data } = useQuery({
    queryKey: ["films"],
    queryFn: async () => graffle.gql(RocketsDocument).send(),
  });
  return (
    <ul>
      {data?.rockets?.map((rocket) => (
        <li key={rocket?.id}>{rocket?.name}</li>
      ))}
    </ul>
  );
};
