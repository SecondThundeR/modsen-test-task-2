import { useMap } from "react-leaflet";

import { ReactComponent as LocationIcon } from "@/assets/location.svg";
import { ReactComponent as ZoomPlusIcon } from "@/assets/zoomPlus.svg";
import { ReactComponent as ZoomMinusIcon } from "@/assets/zoomMinus.svg";

export function MapControls() {
  const map = useMap();

  const onLocation = () => {
    map.locate({
      enableHighAccuracy: true,
      timeout: 10000,
    });
  };

  const onZoomPlus = () => {
    map.zoomIn(undefined, {
      animate: true,
    });
  };

  const onZoomMinus = () => {
    map.zoomOut(undefined, {
      animate: true,
    });
  };

  return (
    <div className="leaflet-bottom leaflet-right">
      <div className="leaflet-control flex gap-2">
        <button className="btn btn-primary" onClick={onLocation}>
          <LocationIcon />
        </button>
        <div>
          <button
            className="btn btn-accent rounded-r-none"
            onClick={onZoomPlus}
          >
            <ZoomPlusIcon />
          </button>
          <button
            className="btn btn-accent rounded-l-none"
            onClick={onZoomMinus}
          >
            <ZoomMinusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
