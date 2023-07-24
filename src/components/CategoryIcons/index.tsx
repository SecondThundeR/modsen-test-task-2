import { memo } from "react";

import { categoriesMapping } from "@/constants/geoapify/categories";

interface CategoryIconsProps {
  category: string;
}

export const CategoryIcons = memo(function CategoryIcons({
  category,
}: CategoryIconsProps) {
  const categoryInfo = categoriesMapping[category];

  return (
    categoryInfo && (
      <img
        width={36}
        height={36}
        className="-mr-4 rounded-full border-4 border-base-100"
        src={categoryInfo.url}
        alt={categoryInfo.name}
        title={categoryInfo.name}
      />
    )
  );
});
