import { memo } from "react";

import { AlertError } from "@/components/ui/AlertError";
import { AlertSuccess } from "@/components/ui/AlertSuccess";
import { Toast } from "@/components/ui/Toast";

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
      <Toast end top>
        {error !== null && <AlertError error={error} />}
        {isLoading && <AlertSuccess>Loading data...</AlertSuccess>}
      </Toast>
    </div>
  );
});
