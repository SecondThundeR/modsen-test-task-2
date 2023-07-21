import { useNavigate } from "react-router-dom";

import { useSearch } from "@/hooks/search/useSearch";

export function SearchResults() {
  const navigate = useNavigate();
  const {
    params: { search, selectedCategories, selectedRadius },
  } = useSearch();

  return (
    <div className="flex flex-col gap-2">
      <h1>
        Searching for values: {search};{selectedCategories};{selectedRadius}
      </h1>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}
