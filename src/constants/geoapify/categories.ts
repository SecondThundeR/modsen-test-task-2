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

type categoryInfo = {
  url: string;
  name: string;
};

export const categoriesMapping: Record<string, categoryInfo> = {
  accommodation: {
    url: hotelIcon,
    name: "Место для сна",
  },
  "service.financial.bank": {
    url: bankIcon,
    name: "Банки",
  },
  "catering.cafe.coffee": {
    url: coffeeIcon,
    name: "Кофе/чай",
  },
  "catering.restaurant": {
    url: foodIcon,
    name: "Еда",
  },
  "commercial.shopping_mall": {
    url: shopIcon,
    name: "Магазины",
  },
  "rental.bicycle": {
    url: bicycleIcon,
    name: "Велосипеды",
  },
  "service.vehicle.fuel": {
    url: fuelIcon,
    name: "Заправки",
  },
  "rental.car": {
    url: carIcon,
    name: "Авто",
  },
  adult: {
    url: adultIcon,
    name: "18+",
  },
  natural: {
    url: natureIcon,
    name: "Природа",
  },
  "entertainment.culture": {
    url: cultureIcon,
    name: "Культура",
  },
  "building.historic": {
    url: historyIcon,
    name: "История",
  },
  religion: {
    url: religionIcon,
    name: "Религия",
  },
  "tourism.sights": {
    url: architectureIcon,
    name: "Архитектура",
  },
  "building.industrial": {
    url: industryIcon,
    name: "Индустриальные объекты",
  },
  "tourism.attraction": {
    url: otherIcon,
    name: "Разное",
  },
  "entertainment.activity_park": {
    url: entertainmentIcon,
    name: "Развлечения",
  },
  sport: {
    url: sportIcon,
    name: "Спорт",
  },
};

export const categoriesArray = Object.keys(categoriesMapping);
