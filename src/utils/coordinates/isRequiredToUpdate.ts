import { LOCATION_BIAS } from "@/constants/leaflet/defaultMapValues";

export function isRequiredToUpdate(prevCoord: number, newCoord: number) {
  return Math.abs(prevCoord - newCoord) >= LOCATION_BIAS;
}
