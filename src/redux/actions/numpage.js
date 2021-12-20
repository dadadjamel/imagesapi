export function incrementPage(numPage) {
  return {
    type: "INCREMENT_NUMPAGE",
    payload: numPage,
  };
}
