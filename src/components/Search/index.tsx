import { Form } from "../Form";

export function Search() {
  return (
    <div className="bg-base-300 h-full w-80 p-4 flex flex-col items-center gap-4">
      <Form>
        <Form.Input
          name="search"
          type="text"
          placeholder="Enter place to search"
        />
        <h1>Search:</h1>
        <h1>Within radius:</h1>
        <Form.Submit isLoading={false}>Search</Form.Submit>
      </Form>
    </div>
  );
}
