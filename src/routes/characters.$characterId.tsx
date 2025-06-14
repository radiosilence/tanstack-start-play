import { Character, getCharacterOptions } from "@/components/Character";
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
      <Character id={characterId} />
    </Suspense>
  );
}

export const Route = createFileRoute("/characters/$characterId")({
  component: CharacterPage,
  loader: async ({ context, params: { characterId } }) => {
    console.log("⚡ Route loader starting...");
    await context.queryClient.ensureQueryData(getCharacterOptions(characterId));
    console.log("✅ Route loader completed, data ensured");
  },
});
