import { memo } from "react";

import { ReactComponent as ArrowRightIcon } from "@/assets/arrowRight.svg";
import { ReactComponent as BookmarkIcon } from "@/assets/bookmark.svg";
import { ReactComponent as BookmarkFilledIcon } from "@/assets/bookmarkFilled.svg";

import { Button } from "@/components/ui/Button";
import { CategoryIcons } from "@/components/ui/CategoryIcons";
import { PlaceNameHeading } from "@/components/ui/PlaceNameHeading";

import { PlacesProperties } from "@/schemas/geoapify";

interface SearchCardProps extends Omit<PlacesProperties, "lat" | "lon"> {
  isBookmarked?: boolean;
  onBookmarkClick?: () => void;
  onArrowClick?: () => void;
}

export const PlaceCard = memo(function PlaceCard({
  categories,
  name,
  address_line2,
  isBookmarked = false,
  onBookmarkClick,
  onArrowClick,
}: SearchCardProps) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-base-100 p-4 drop-shadow-lg">
      <div className="flex">
        {categories?.map((category) => (
          <CategoryIcons key={category} category={category} />
        ))}
      </div>
      <PlaceNameHeading>{name}</PlaceNameHeading>
      {address_line2 && <p className="opacity-80">{address_line2}</p>}
      <div className="mt-2 flex justify-between">
        <Button className="btn-outline" onClick={onBookmarkClick}>
          {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
        </Button>
        <Button className="btn-ghost" onClick={onArrowClick}>
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
});
