import { Icon } from "leaflet";

import {
  adultIcon,
  architectureIcon,
  bankIcon,
  bicycleIcon,
  carIcon,
  coffeeIcon,
  cultureIcon,
  entertainmentIcon,
  foodIcon,
  fuelIcon,
  historyIcon,
  hotelIcon,
  industryIcon,
  natureIcon,
  otherIcon,
  religionIcon,
  shopIcon,
  sportIcon,
} from "@/constants/leaflet/icons";

export const categoriesMapping: Record<string, Icon> = {
  accommodation: hotelIcon,
  "service.financial.bank": bankIcon,
  "catering.cafe.coffee": coffeeIcon,
  "catering.restaurant": foodIcon,
  "commercial.shopping_mall": shopIcon,
  "rental.bicycle": bicycleIcon,
  "service.vehicle.fuel": fuelIcon,
  "rental.car": carIcon,
  adult: adultIcon,
  natural: natureIcon,
  "entertainment.culture": cultureIcon,
  "building.historic": historyIcon,
  religion: religionIcon,
  "tourism.sights": architectureIcon,
  "building.industrial": industryIcon,
  "tourism.attraction": otherIcon,
  "entertainment.activity_park": entertainmentIcon,
  sport: sportIcon,
};

export const categoriesArray = Object.keys(categoriesMapping);
