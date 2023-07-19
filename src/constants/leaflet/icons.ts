import { divIcon, icon } from "leaflet";

const PLACE_ICON_CLASSES = "border-4 border-black/20 rounded-full";

export const hotelIcon = icon({
  iconUrl: "./src/assets/markerIcons/hotel.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const bankIcon = icon({
  iconUrl: "./src/assets/markerIcons/bank.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const coffeeIcon = icon({
  iconUrl: "./src/assets/markerIcons/coffee.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const foodIcon = icon({
  iconUrl: "./src/assets/markerIcons/food.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const shopIcon = icon({
  iconUrl: "./src/assets/markerIcons/shop.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const bicycleIcon = icon({
  iconUrl: "./src/assets/markerIcons/bicycle.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const fuelIcon = icon({
  iconUrl: "./src/assets/markerIcons/fuel.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const carIcon = icon({
  iconUrl: "./src/assets/markerIcons/car.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const adultIcon = icon({
  iconUrl: "./src/assets/markerIcons/adult.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const natureIcon = icon({
  iconUrl: "./src/assets/markerIcons/nature.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const cultureIcon = icon({
  iconUrl: "./src/assets/markerIcons/culture.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const historyIcon = icon({
  iconUrl: "./src/assets/markerIcons/history.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const religionIcon = icon({
  iconUrl: "./src/assets/markerIcons/religion.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const architectureIcon = icon({
  iconUrl: "./src/assets/markerIcons/architecture.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const industryIcon = icon({
  iconUrl: "./src/assets/markerIcons/industry.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const otherIcon = icon({
  iconUrl: "./src/assets/markerIcons/other.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const entertainmentIcon = icon({
  iconUrl: "./src/assets/markerIcons/entertainment.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const sportIcon = icon({
  iconUrl: "./src/assets/markerIcons/sport.png",
  className: PLACE_ICON_CLASSES,
  iconSize: [40, 40],
});

export const userIcon = divIcon({
  html: `
<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.79 19.9463L20.3101 2.60025C18.4101 -0.86675 13.5899 -0.86675 11.6899 2.60025L2.20996 19.9463L0 24.0003H9.83997C11.21 24.0003 12.53 23.4073 13.46 22.3633L15.63 19.9463L16 19.5373L16.37 19.9463L20 24.0003H32L29.79 19.9463Z" fill="#5E7BC7"/>
</svg>
`,
  className: "",
  iconSize: [32, 24],
});
