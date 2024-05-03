import * as regexpTree from 'regexp-tree';

export function _isWellFormedRegex(input: RegExp): boolean {
  try {
    // Parse the input regex
    regexpTree.parse(input);

    return true; // If parsing succeeds, it's well-formed
  } catch (error) {
    return false; // Parsing error indicates it's not well-formed
  }
}
