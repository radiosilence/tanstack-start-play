import { Characters, CharactersDocument } from "@/components/Characters";
import { gqlOptions } from "@/graffle";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";

export function CharactersPage() {
  console.log("🎨 Rendering CharactersPage component");

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner loading-lg" />
        </div>
      }
    >
      <Outlet />
      <Characters />
    </Suspense>
  );
}

export const Route = createFileRoute("/characters")({
  component: CharactersPage,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(gqlOptions(CharactersDocument));
  },
});
