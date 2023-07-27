import { memo } from "react";

import { AlertError } from "@/components/ui/AlertError";
import { AlertSuccess } from "@/components/ui/AlertSuccess";

interface MapAlertsProps {
  isLoading: boolean;
  error: unknown;
}

export const MapAlerts = memo(function MapAlerts({
  isLoading,
  error,
}: MapAlertsProps) {
  return (
    <div className="leaflet-top leaflet-right">
      <div className="toast toast-end toast-top">
        {error !== null && <AlertError error={error} />}
        {isLoading && <AlertSuccess>Loading data...</AlertSuccess>}
      </div>
    </div>
  );
});
