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

export function updateLocalStorageData<T>(key: string, value: T, isStringifyNeeded: boolean) {
  if (typeof window === "undefined") {
    // If running in the server
    return;
  }

  // If running in the client (browser)
  try {
    if (isStringifyNeeded) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value as string);
    }
  } catch (error) {
    console.error("Error updating the local storage data:\n", error);
  }
}

export function removeLocalStorageData(key: string): string {
  // If running in the server
  if (typeof window === "undefined") return "Can't access localStorage while on server";

  // If running in the client (browser)
  try {
    if (key === "everything") {
      localStorage.clear();
      return "Local Storage cleared";
    } else {
      localStorage.removeItem(key);
      return "Item removed";
    }
  } catch (error) {
    console.error("Error removing the local storage data:\n", error);
    return "Couldn't remove the item";
  }
}
