import { LOCATION_BIAS } from "@/constants/leaflet/defaultMapValues";

export function isRequiredToUpdateCoordinates(
  prevCoord: number,
  newCoord: number
) {
  return Math.abs(prevCoord - newCoord) >= LOCATION_BIAS;
}
