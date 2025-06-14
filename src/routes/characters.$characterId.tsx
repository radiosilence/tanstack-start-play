import { Character, CharacterDocument } from "@/components/Character";
import { gqlOptions } from "@/graffle";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

function CharacterPage() {
  console.log("🎨 Rendering CharacterPage component");
  const { characterId } = Route.useParams();

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner loading-lg" />
        </div>
      }
    >
      <Character characterId={characterId} />
    </Suspense>
  );
}

export const Route = createFileRoute("/characters/$characterId")({
  component: CharacterPage,
  loader: async ({ context, params: { characterId } }) => {
    await context.queryClient.ensureQueryData(
      gqlOptions(CharacterDocument, { characterId }),
    );
  },
});
