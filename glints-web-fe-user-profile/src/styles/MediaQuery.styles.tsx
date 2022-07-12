export const SCREEN_SIZE = {
  md: '768px',
  lg: '992px',
};

export const mediaMax = (key: keyof typeof SCREEN_SIZE) => {
  return `@media only screen and (max-width: ${SCREEN_SIZE[key]})`;
};
