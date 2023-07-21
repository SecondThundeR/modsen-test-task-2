import cn from "classnames";
import { useState } from "react";

import {
  categoriesArray,
  categoriesMapping,
} from "@/constants/geoapify/categories";
import { PLACE_ICON_CLASSES } from "@/constants/leaflet/icons";

export function FormCategorySelect() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onClick = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category))
        return prev.filter((cat) => cat !== category);
      return [...prev, category];
    });
  };

  return (
    <div className="px-3 py-2 border-2 form-control border-[#c4c4c4] rounded-xl gap-2 max-h-96 overflow-auto">
      <input
        id="categories"
        name="categories"
        type="hidden"
        value={selectedCategories.join(",")}
      />
      {categoriesArray.map((category) => {
        const categoryData = categoriesMapping[category];
        const isSelected = selectedCategories.includes(category);
        return (
          <div
            key={category}
            className={cn("flex gap-4 items-center", {
              "opacity-50 hover:opacity-70": !isSelected,
              "hover:opacity-80": isSelected,
            })}
            onClick={() => onClick(category)}
          >
            <img
              width={40}
              height={40}
              src={categoryData.url}
              className={PLACE_ICON_CLASSES}
            />
            <span className="font-medium">{categoryData.name}</span>
          </div>
        );
      })}
    </div>
  );
}
