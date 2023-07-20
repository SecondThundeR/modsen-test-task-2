import { useAppSelector } from "@/hooks/redux/useAppSelector";

export function Bookmarks() {
  const { userData } = useAppSelector((state) => state.user);
  return (
    <div className="bg-base-300 h-full w-80 p-4 flex flex-col items-center gap-4">
      {userData ? (
        <h1>Logged in!</h1>
      ) : (
        <h1>To view your favorites, log in into account</h1>
      )}
    </div>
  );
}
