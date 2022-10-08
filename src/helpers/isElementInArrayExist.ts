export const isElementInArrayExist = (elementId: number, array: any[]) => {
  return array.find((el) => el.id === elementId);
};
