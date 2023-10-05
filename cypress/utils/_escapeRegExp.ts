export function _escapeForRegExp(s: string) {
  if (s) return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

  return '';
}
