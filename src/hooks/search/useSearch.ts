import { FormEvent, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q");
  const selectedCategories = searchParams.get("categories");
  const selectedRadius = searchParams.get("radius");
  const isMissingParams =
    searchQuery === null ||
    selectedCategories === null ||
    selectedRadius === null;

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const q = (formData.get("q") ?? "") as string;
      const categories = (formData.get("categories") ?? "") as string;
      const radius = (formData.get("radius") ?? "1") as string;

      setSearchParams({
        q,
        categories,
        radius: String(+radius * 1000),
      });
    },
    [setSearchParams],
  );

  return {
    params: {
      searchQuery,
      selectedCategories,
      selectedRadius,
    },
    isMissingParams,
    onSubmit,
  };
}
