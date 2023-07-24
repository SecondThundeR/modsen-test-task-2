type NullableString = string | null | undefined;

export function extractPlaceName(
  name: NullableString,
  address: NullableString,
) {
  return name ?? address ?? null;
}
