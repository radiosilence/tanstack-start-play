import { getRocketsOptions, Rockets } from "@/components/Rockets";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense, type ComponentType } from "react";

export const RocketsPage: ComponentType = () => {
  console.log("🎨 Rendering RocketsPage component");

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner loading-lg" />
        </div>
      }
    >
      <Rockets />
    </Suspense>
  );
};

export const Route = createFileRoute("/rockets")({
  component: RocketsPage,
  loader: async ({ context }) => {
    console.log("⚡ Route loader starting...");
    await context.queryClient.ensureQueryData(getRocketsOptions());
    console.log("✅ Route loader completed, rockets data ensured");
  },
});
