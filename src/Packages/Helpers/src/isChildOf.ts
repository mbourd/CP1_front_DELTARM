import { isHtmlElement } from './isHtmlElement';

export const isChildOf = (child: Node | HTMLElement | null, parent: HTMLElement): boolean => {
  if (!isHtmlElement(child) || !isHtmlElement(parent)) {
    return false;
  }

  while (child) {
    child = child.parentNode;
    if (child === parent) {
      return true;
    }
  }

  return false;
};
