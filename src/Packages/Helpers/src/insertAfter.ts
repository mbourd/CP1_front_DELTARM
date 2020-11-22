export const insertAfter = (element: HTMLElement, afterElement: HTMLElement): boolean => {
  let parent: Node | boolean | null;
  try {
    parent = afterElement.parentNode;
  } catch (e) {
    parent = false;
  }

  if (!parent) {
    return false;
  }
  const next = afterElement.nextElementSibling;
  if (next) {
    parent.insertBefore(element, next);
  } else {
    parent.appendChild(element);
  }

  return true;
};
