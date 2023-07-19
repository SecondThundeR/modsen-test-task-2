import { ReactComponent as LocationIcon } from "@/assets/location.svg";
import { ReactComponent as ZoomPlusIcon } from "@/assets/zoomPlus.svg";
import { ReactComponent as ZoomMinusIcon } from "@/assets/zoomMinus.svg";

import { useMapControls } from "@/hooks/map/useMapControls";

export function MapControls() {
  const { getLocation, zoomIn, zoomOut } = useMapControls();

  return (
    <div className="leaflet-bottom leaflet-right">
      <div className="leaflet-control flex gap-2">
        <button className="btn btn-primary" onClick={getLocation}>
          <LocationIcon />
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
