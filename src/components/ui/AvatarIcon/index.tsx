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
      <div className="w-12 rounded-full bg-primary text-neutral-content">
        {!displayName ? <AccountIcon /> : <span>{displayName[0] ?? "?"}</span>}
      </div>
    </div>
  );
});
