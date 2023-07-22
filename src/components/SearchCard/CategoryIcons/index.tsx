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
      width={28}
      height={28}
      src={categoryInfo.url}
      alt={categoryInfo.name}
    />
  );
});
