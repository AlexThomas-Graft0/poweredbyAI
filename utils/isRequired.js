export default function isRequired(value) {
  if (value === undefined || value === null) {
    return true;
  }
  return false;
}
