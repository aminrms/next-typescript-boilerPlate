import { ssrHandler } from "./settings";

export const getDataFromLocalStorage = (name: string, defaultValue: any) => {
  let storageVal = getLocalStorage(name);
  if (storageVal) {
    return storageVal;
  }
  setLocalStorage(defaultValue, name);
  return null || "";
};

// localStorage
export const setLocalStorage = (value: any, name: string) => {
  if (ssrHandler()) {
    localStorage.setItem(name, JSON.stringify(value));
  }
};

export const getLocalStorage = (name: string) => {
  if (ssrHandler()) {
    return JSON.parse(localStorage.getItem(name) as string);
  } else return null;
};
