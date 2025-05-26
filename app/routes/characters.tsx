import { Characters, getCharactersOptions } from "@/components/Characters";
import { createFileRoute } from "@tanstack/react-router";
import { type ComponentType, Suspense } from "react";

export const CharactersPage: ComponentType = () => {
  console.log("🎨 Rendering CharactersPage component");

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner loading-lg" />
        </div>
      }
    >
      <Characters />
    </Suspense>
  );
};

export const Route = createFileRoute("/characters")({
  component: CharactersPage,
  loader: async ({ context }) => {
    console.log("⚡ Route loader starting...");
    await context.queryClient.ensureQueryData(getCharactersOptions());
    console.log("✅ Route loader completed, data ensured");
  },
});
