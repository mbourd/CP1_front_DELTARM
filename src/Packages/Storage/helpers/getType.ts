export const getType = (object: any): string | null | undefined => {
  if (null === object) {
    return null;
  }
  const t: string = typeof object;
  if ('object' === t) {
    // @ts-ignore
    const objectConstructor = String(object.constructor);
    if (/^(?:function|object) ([a-z0-9-]+)\(?/i.test(objectConstructor)) {
      return RegExp.$1;
    }

    try {
      // @ts-ignore
      return object.constructor.name;
    } catch (e) {
      return undefined;
    }
  }

  return t;
};
