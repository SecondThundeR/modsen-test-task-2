import { memo } from "react";

import { categoriesMapping } from "@/constants/geoapify/categories";

interface CategoryIconsProps {
  category: string;
}

export const CategoryIcons = memo(function CategoryIcons({
  category,
}: CategoryIconsProps) {
  const categoryInfo = categoriesMapping[category];

  if (!categoryInfo) return null;

  return (
    <img
      width={36}
      height={36}
      className="border-4 border-base-100 -mr-4 rounded-full"
      src={categoryInfo.url}
      alt={categoryInfo.name}
    />
  );
});