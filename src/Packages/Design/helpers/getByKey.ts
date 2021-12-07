export const getByKey = <T>(
  object: Record<string, any>,
  key: string,
): T | undefined => {
  const keys = key.split('.');

  for (let i = 0; i < keys.length; i += 1) {
    key = keys[i];
    if (!object || !Object.prototype.hasOwnProperty.call(object, key)) {
      return undefined;
    }
    // @ts-ignore
    object = object[key];
  }

  // @ts-ignore
  return object;
};
