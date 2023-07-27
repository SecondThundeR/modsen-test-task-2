import cn from "classnames";
import { useState } from "react";

import {
  categoriesArray,
  categoriesMapping,
} from "@/constants/geoapify/categories";
import { PLACE_ICON_CLASSES } from "@/constants/leaflet/icons";

export function CategorySelect() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onCategorySelect = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category))
        return prev.filter((cat) => cat !== category);
      return [...prev, category];
    });
  };

  return (
    <div className="form-control max-h-96 gap-2 overflow-auto rounded-xl border-2 border-[#c4c4c4] px-3 py-2">
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
            className={cn("flex items-center gap-4", {
              "opacity-50 hover:opacity-70": !isSelected,
              "hover:opacity-80": isSelected,
            })}
            onClick={() => onCategorySelect(category)}
          >
            <img
              width={40}
              height={40}
              src={categoryData.url}
              title={categoryData.name}
              alt={categoryData.name}
              className={PLACE_ICON_CLASSES}
            />
            <span className="font-medium">{categoryData.name}</span>
          </div>
        );
      })}
    </div>
  );
}
