import { ReactComponent as LocationIcon } from "@/assets/location.svg";
import { ReactComponent as XCircleIcon } from "@/assets/xCircle.svg";
import { ReactComponent as ZoomMinusIcon } from "@/assets/zoomMinus.svg";
import { ReactComponent as ZoomPlusIcon } from "@/assets/zoomPlus.svg";

import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";

import { useMapControls } from "@/hooks/map/useMapControls";

export function MapControls() {
  const {
    isLocating,
    isFailed,
    handlers: { getLocation, zoomIn, zoomOut },
  } = useMapControls();

  const getLocationButtonIcon = () => {
    if (isFailed) return <XCircleIcon />;
    if (isLocating) return <Spinner />;
    return <LocationIcon />;
  };

  return (
    <div className="leaflet-bottom leaflet-right">
      <div className="leaflet-control flex gap-2">
        <Button onClick={getLocation} disabled={isLocating}>
          {getLocationButtonIcon()}
        </Button>
        <div>
          <Button isAccent className="rounded-r-none" onClick={zoomIn}>
            <ZoomPlusIcon />
          </Button>
          <Button isAccent className="rounded-l-none" onClick={zoomOut}>
            <ZoomMinusIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
