export const ssrHandler = () => {
  if (typeof window !== "undefined") {
    return true;
  }
  return false;
};
