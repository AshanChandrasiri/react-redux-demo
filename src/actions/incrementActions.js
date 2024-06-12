export const increment = (n = 1) => {
  return {
    type: "INCREMENT",
    value: n,
  };
};

export const decrement = (n = 1) => {
  return {
    type: "DECREMENT",
    value: n,
  };
};
