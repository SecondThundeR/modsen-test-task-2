import { ReactComponent as LocationIcon } from "@/assets/location.svg";
import { ReactComponent as XCircleIcon } from "@/assets/xCircle.svg";
import { ReactComponent as ZoomMinusIcon } from "@/assets/zoomMinus.svg";
import { ReactComponent as ZoomPlusIcon } from "@/assets/zoomPlus.svg";

import { Spinner } from "@/components/Spinner";

import { useMapControls } from "@/hooks/map/useMapControls";

export function MapControls() {
  const {
    isLocating,
    isFailed,
    handlers: { getLocation, zoomIn, zoomOut },
  } = useMapControls();

  return (
    <div className="leaflet-bottom leaflet-right">
      <div className="leaflet-control flex gap-2">
        <button
          className="btn btn-primary"
          onClick={getLocation}
          disabled={isLocating}
        >
          {isFailed ? (
            <XCircleIcon />
          ) : isLocating ? (
            <Spinner />
          ) : (
            <LocationIcon />
          )}
        </button>
        <div>
          <button className="btn btn-accent rounded-r-none" onClick={zoomIn}>
            <ZoomPlusIcon />
          </button>
          <button className="btn btn-accent rounded-l-none" onClick={zoomOut}>
            <ZoomMinusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
