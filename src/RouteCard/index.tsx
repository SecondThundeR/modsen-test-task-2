import { memo } from "react";

import { useRoute } from "@/hooks/map/useRoute";

type RouteData = Pick<ReturnType<typeof useRoute>, "routeData">["routeData"];

interface RouteCardProps {
  routeData: NonNullable<RouteData>;
}

export const RouteCard = memo(function RouteCard({
  routeData,
}: RouteCardProps) {
  const { distance, time } = routeData;

  return (
    <div className="flex w-full flex-col items-start justify-center gap-2 rounded-xl bg-base-100 px-4 py-2 drop-shadow-md">
      <div className="flex w-full items-center gap-6">
        {distance && (
          <div>
            <h1 className="text-xl font-bold">{distance / 1000} km</h1>
            <p className="opacity-70">Distance</p>
          </div>
        )}
        {time && (
          <div>
            <h1 className="text-xl font-bold">
              {Math.ceil(time / 60)} minutes
            </h1>
            <p className="opacity-70">Approximate time</p>
          </div>
        )}
      </div>
    </div>
  );
});
