import { ReactComponent as SearchIcon } from "@/assets/search.svg";

import { Form } from "@/components/Form";

import { useSearch } from "@/hooks/search/useSearch";

import { SearchResults } from "../SearchResults";

export function Search() {
  const { isMissingParams, onSubmit } = useSearch();

  if (!isMissingParams) return <SearchResults />;

  return (
    <div className="bg-base-300 h-full w-80 p-4 flex flex-col items-center gap-3">
      <Form onSubmit={onSubmit} fullHeight>
        <Form.Input name="q" type="text" placeholder="Enter place to search" />
        <div className="flex flex-col gap-3 flex-grow">
          <h1 className="font-bold">Selected categories:</h1>
          <Form.CategorySelect />
          <h1 className="font-bold">Within radius:</h1>
          <div className="flex gap-3 items-center">
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
