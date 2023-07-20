import { memo } from "react";

import { ReactComponent as AccountIcon } from "@/assets/account.svg";

interface AvatarIconProps {
  displayName: string | null;
}

export const AvatarIcon = memo(function AvatarIcon({
  displayName,
}: AvatarIconProps) {
  return (
    <div className="avatar placeholder">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
        {!displayName ? (
          <AccountIcon />
        ) : (
          <span>{displayName.length > 0 ? displayName[0] : "?"}</span>
        )}
      </div>
    </div>
  );
});
