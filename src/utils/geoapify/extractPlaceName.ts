type NullableString = string | null | undefined;

export function extractPlaceName(
  name: NullableString,
  address: NullableString,
) {
  if (name) return name;
  if (address) return address;
  return null;
}
