import { FormEvent, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("q");
  const selectedCategories = searchParams.get("categories");
  const selectedRadius = searchParams.get("radius");
  const isMissingParams =
    search === null || selectedCategories === null || selectedRadius === null;

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const q = formData.get("q") as string;
      const categories = formData.get("categories") as string;
      const radius = formData.get("radius") as string;

      setSearchParams({
        q,
        categories,
        radius,
      });
    },
    [setSearchParams],
  );

  return {
    params: {
      search,
      selectedCategories,
      selectedRadius,
    },
    isMissingParams,
    onSubmit,
  };
}
