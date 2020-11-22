export const removeEvent = (element: Node | HTMLElement, event: string, callback: (e: Event) => void): void => {
  if (element.removeEventListener) {
    element.removeEventListener(event, callback, false);
  } else {
    // @ts-ignore
    element.detachEvent(`on${event}`, callback);
  }
};
