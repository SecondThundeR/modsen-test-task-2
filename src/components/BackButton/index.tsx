import { memo } from "react";

interface BackButtonProps {
  onBack?: () => void;
}

export const BackButton = memo(function BackButton({
  onBack,
}: BackButtonProps) {
  return (
    <button className="link-hover link-primary link" onClick={onBack}>
      Go back
    </button>
  );
});
