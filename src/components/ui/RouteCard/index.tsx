import { memo } from "react";

import { Heading } from "@/components/ui/Heading";
import { Subheading } from "@/components/ui/Subheading";

import { useRoute } from "@/hooks/map/useRoute";

type RouteData = Pick<
  ReturnType<typeof useRoute>,
  "currentRouteData"
>["currentRouteData"];

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
            <Heading>{distance / 1000} km</Heading>
            <Subheading>Distance</Subheading>
          </div>
        )}
        {time && (
          <div>
            <Heading>{Math.ceil(time / 60)} minutes</Heading>
            <Subheading>Approximate time</Subheading>
          </div>
        )}
      </div>
    </div>
  );
});
