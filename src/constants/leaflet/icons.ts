import { divIcon, icon } from "leaflet";

export const PLACE_ICON_CLASSES = "border-4 border-black/20 rounded-full";

export const createIcon = (iconUrl: string) =>
  icon({
    iconUrl,
    className: PLACE_ICON_CLASSES,
    iconSize: [40, 40],
  });

export const hotelIcon = "./src/assets/markerIcons/hotel.png";

export const bankIcon = "./src/assets/markerIcons/bank.png";

export const coffeeIcon = "./src/assets/markerIcons/coffee.png";

export const foodIcon = "./src/assets/markerIcons/food.png";

export const shopIcon = "./src/assets/markerIcons/shop.png";

export const bicycleIcon = "./src/assets/markerIcons/bicycle.png";

export const fuelIcon = "./src/assets/markerIcons/fuel.png";

export const carIcon = "./src/assets/markerIcons/car.png";

export const adultIcon = "./src/assets/markerIcons/adult.png";

export const natureIcon = "./src/assets/markerIcons/nature.png";

export const cultureIcon = "./src/assets/markerIcons/culture.png";

export const historyIcon = "./src/assets/markerIcons/history.png";

export const religionIcon = "./src/assets/markerIcons/religion.png";

export const architectureIcon = "./src/assets/markerIcons/architecture.png";

export const industryIcon = "./src/assets/markerIcons/industry.png";

export const otherIcon = "./src/assets/markerIcons/other.png";

export const entertainmentIcon = "./src/assets/markerIcons/entertainment.png";

export const sportIcon = "./src/assets/markerIcons/sport.png";

export const userIcon = divIcon({
  html: `
<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.79 19.9463L20.3101 2.60025C18.4101 -0.86675 13.5899 -0.86675 11.6899 2.60025L2.20996 19.9463L0 24.0003H9.83997C11.21 24.0003 12.53 23.4073 13.46 22.3633L15.63 19.9463L16 19.5373L16.37 19.9463L20 24.0003H32L29.79 19.9463Z" fill="#5E7BC7"/>
</svg>
`,
  className: "",
  iconSize: [32, 24],
});
