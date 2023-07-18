import { Icon } from "leaflet";

import { bankIcon, coffeeIcon, hotelIcon } from "@/constants/leaflet/icons";

export const categoriesMapping: Record<string, Icon> = {
  accommodation: hotelIcon,
  "service.financial.bank": bankIcon,
  "commercial.food_and_drink.coffee_and_tea": coffeeIcon,
};

export const categoriesArray = Object.keys(categoriesMapping);
