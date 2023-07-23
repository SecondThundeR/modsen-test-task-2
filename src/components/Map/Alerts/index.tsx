import { memo } from "react";

import { AlertError } from "@/components/AlertError";
import { AlertSuccess } from "@/components/AlertSuccess";

interface MapAlertsProps {
  isLoading: boolean;
  error: Error | null;
}

export const MapAlerts = memo(function MapAlerts({
  isLoading,
  error,
}: MapAlertsProps) {
  return (
    <div className="leaflet-top leaflet-right">
      <div className="toast toast-end toast-top">
        {error && <AlertError error={error} />}
        {isLoading && <AlertSuccess>Loading data...</AlertSuccess>}
      </div>
    </div>
  );
});
