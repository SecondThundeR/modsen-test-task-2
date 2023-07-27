import cn from "classnames";
import { memo } from "react";

import { PLACE_ICON_CLASSES } from "@/constants/markerIcons";

interface CategorySelectItemProps {
  isSelected: boolean;
  selectCategory: () => void;
  url: string;
  name: string;
}

export const CategorySelectItem = memo(function CategoryItem({
  isSelected,
  selectCategory,
  url,
  name,
}: CategorySelectItemProps) {
  return (
    <div
      className={cn("flex items-center gap-4", {
        "opacity-50 hover:opacity-70": !isSelected,
        "hover:opacity-80": isSelected,
      })}
      onClick={selectCategory}
    >
      <img
        width={40}
        height={40}
        src={url}
        title={name}
        alt={name}
        className={PLACE_ICON_CLASSES}
      />
      <span className="font-medium">{name}</span>
    </div>
  );
});
