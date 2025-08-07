export const isEmptyObject = (obj: object): boolean =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;
