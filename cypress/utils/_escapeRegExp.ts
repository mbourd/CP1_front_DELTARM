export function _escapeForRegExp(s: string) {
  if (s !== undefined) return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

  return undefined;
}
