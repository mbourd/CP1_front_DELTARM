/**
 * Adds event to element.
 *
 * @param element - Target element.
 * @param event - Event name.
 * @param callback - Event callback.
 * @example
 *    import { addEvent } from '@deltarm/helpers';
 */
export const addEvent = (
  element: Node | HTMLElement,
  event: string,
  callback: (e: Event) => void,
): void => {
  if (element.addEventListener) {
    element.addEventListener(event, callback, false);
  } else {
    // @ts-ignore
    element.attachEvent(`on${event}`, callback);
  }
};
