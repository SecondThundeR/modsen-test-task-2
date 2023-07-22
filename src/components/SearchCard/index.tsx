import { memo } from "react";

import { PlacesPropeties } from "@/schemas/geoapify";

import { CategoryIcons } from "./CategoryIcons";

interface SearchCardProps extends Omit<PlacesPropeties, "lat" | "lon"> {}

export const SearchCard = memo(function SearchCard({
  categories,
  name,
  address_line2,
}: SearchCardProps) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-base-100 p-4 transition-all duration-300 hover:drop-shadow-lg">
      <div className="flex">
        {categories.map((category) => (
          <CategoryIcons key={category} category={category} />
        ))}
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="opacity-80">{address_line2}</p>
    </div>
  );
});
