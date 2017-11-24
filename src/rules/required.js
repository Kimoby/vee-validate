export default (value, [invalidateFalse = false] = []) => {
  if (Array.isArray(value)) {
    return !! value.length;
  }

  // incase a field considers `false` as an empty value like checkboxes.
  if (value === false && invalidateFalse) {
    return false;
  }

  if (value === undefined || value === null || value === false) {
    return false;
  }

  return !! String(value).trim().length;
};
