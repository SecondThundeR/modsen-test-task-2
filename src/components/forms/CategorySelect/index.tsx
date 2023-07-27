import { useState } from "react";

import { Input } from "@/components/forms/Input";
import { CategorySelectItem } from "@/components/ui/CategorySelectItem";

import {
  categoriesArray,
  categoriesMapping,
} from "@/constants/placeCategories";

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
      <Input
        id="categories"
        name="categories"
        type="hidden"
        value={selectedCategories.join(",")}
      />
      {categoriesArray.map((category) => {
        const categoryData = categoriesMapping[category];
        const isSelected = selectedCategories.includes(category);
        const selectCategory = () => onCategorySelect(category);

        return (
          <CategorySelectItem
            key={category}
            isSelected={isSelected}
            selectCategory={selectCategory}
            {...categoryData}
          />
        );
      })}
    </div>
  );
}
