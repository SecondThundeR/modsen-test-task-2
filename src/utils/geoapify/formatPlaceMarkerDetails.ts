type NullableString = string | null | undefined;

export function formatPlaceMarkerDetails(
  name: NullableString,
  address: NullableString,
) {
  return `${name} ${address && `(${address})`}`;
}
