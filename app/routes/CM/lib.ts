export const getFromLS = (key: string) => {
  const value = localStorage.getItem(key);
  return value ?? "";
};

export const setIntoLS = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getDisplayValue = (value: number) => {
  const displayValue = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(Number(value));

  return displayValue;
};
