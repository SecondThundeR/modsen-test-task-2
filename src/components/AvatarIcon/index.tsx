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
      <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
        {!displayName ? (
          <AccountIcon />
        ) : (
          <span>{displayName.length > 0 ? displayName[0] : "?"}</span>
        )}
      </div>
    </div>
  );
});
