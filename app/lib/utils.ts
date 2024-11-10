import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalStorageData(key: string, isParseNeeded: boolean, defaultValue: string) {
  if (typeof window === "undefined") {
    // If running in the server
    if (isParseNeeded) {
      return JSON.parse(defaultValue);
    }
    return defaultValue;
  }

  // If running in the client (browser)
  try {
    if (isParseNeeded) {
      return JSON.parse(localStorage.getItem(key) ?? defaultValue);
    }
    return localStorage.getItem(key) ?? defaultValue;
  } catch (error) {
    console.log("Error parsing the local storage data:/n", error);
    if (isParseNeeded) {
      return JSON.parse(defaultValue);
    }
    return defaultValue;
  }
}
