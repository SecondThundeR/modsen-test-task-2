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
    <div className="bg-base-100 flex w-full flex-col gap-2 p-4 rounded-xl hover:drop-shadow-lg transition-all duration-300">
      <div className="flex gap-2">
        {categories.map((category) => (
          <CategoryIcons key={category} category={category} />
        ))}
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="opacity-80">{address_line2}</p>
    </div>
  );
});
