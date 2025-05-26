import { createFileRoute } from "@tanstack/react-router";
import { Rockets, getRockets } from "@/components/Rockets";

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => ({
    rockets: await getRockets(),
  }),
});

function Home() {
  const { rockets } = Route.useLoaderData();

  return (
    <>
      <Rockets initialData={rockets} />
    </>
  );
}
