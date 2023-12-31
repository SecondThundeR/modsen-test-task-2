import { divIcon, icon } from "leaflet";

export const PLACE_ICON_CLASSES = "border-4 border-black/20 rounded-full";

export const createIcon = (iconUrl: string) =>
  icon({
    iconUrl,
    className: PLACE_ICON_CLASSES,
    iconSize: [40, 40],
  });

export const hotelIcon = "/markerIcons/hotel.png";

export const bankIcon = "/markerIcons/bank.png";

export const coffeeIcon = "/markerIcons/coffee.png";

export const foodIcon = "/markerIcons/food.png";

export const shopIcon = "/markerIcons/shop.png";

export const bicycleIcon = "/markerIcons/bicycle.png";

export const fuelIcon = "/markerIcons/fuel.png";

export const carIcon = "/markerIcons/car.png";

export const adultIcon = "/markerIcons/adult.png";

export const natureIcon = "/markerIcons/nature.png";

export const cultureIcon = "/markerIcons/culture.png";

export const historyIcon = "/markerIcons/history.png";

export const religionIcon = "/markerIcons/religion.png";

export const architectureIcon = "/markerIcons/architecture.png";

export const industryIcon = "/markerIcons/industry.png";

export const otherIcon = "/markerIcons/other.png";

export const entertainmentIcon = "/markerIcons/entertainment.png";

export const sportIcon = "/markerIcons/sport.png";

export const userIcon = divIcon({
  html: `
<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.79 19.9463L20.3101 2.60025C18.4101 -0.86675 13.5899 -0.86675 11.6899 2.60025L2.20996 19.9463L0 24.0003H9.83997C11.21 24.0003 12.53 23.4073 13.46 22.3633L15.63 19.9463L16 19.5373L16.37 19.9463L20 24.0003H32L29.79 19.9463Z" fill="#5E7BC7"/>
</svg>
`,
  className: "",
  iconSize: [32, 24],
});
