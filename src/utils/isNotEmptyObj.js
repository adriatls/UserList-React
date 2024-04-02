export const isNotEmptyObj = (loggedWith) => {
  const isEmptyObject = Object.keys(loggedWith).length === 0;
  return !isEmptyObject;
};
