import { LOCATION_BIAS } from "@/constants/mapDefaultValues";

export function isRequiredToUpdate(prevCoord: number, newCoord: number) {
  return Math.abs(prevCoord - newCoord) >= LOCATION_BIAS;
}
