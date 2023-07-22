import { ReactComponent as SearchIcon } from "@/assets/search.svg";

import { Form } from "@/components/Form";
import { SearchResults } from "@/components/SearchResults";

import { useSearch } from "@/hooks/search/useSearch";

export function Search() {
  const { isMissingParams, onSubmit } = useSearch();

  if (!isMissingParams) return <SearchResults />;

  return (
    <div className="flex h-full w-80 flex-col items-center gap-3 bg-base-300 p-4">
      <Form onSubmit={onSubmit} fullHeight>
        <Form.Input name="q" type="text" placeholder="Enter place to search" />
        <div className="flex flex-grow flex-col gap-3">
          <h1 className="font-bold">Selected categories:</h1>
          <Form.CategorySelect />
          <h1 className="font-bold">Within radius:</h1>
          <div className="flex items-center gap-3">
            <Form.Input
              name="radius"
              type="number"
              min="1"
              max="100"
              defaultValue="1"
            />
            <p className="font-medium opacity-75">km</p>
          </div>
        </div>
        <Form.Submit>
          <SearchIcon />
        </Form.Submit>
      </Form>
    </div>
  );
}
