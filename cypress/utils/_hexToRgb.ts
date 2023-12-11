export function _hexToRgb(hex: string, alpha = 1): string | null {
  const rgb = sanitizeRGBString(hex);

  if (rgb) return rgb;

  const sanitizedHex = hex.replace('#', '');
  const hexLength = sanitizedHex.length;

  if (!/^(?:[0-9A-Fa-f]{3}){1,2}$|^(?:[0-9A-Fa-f]{4}){1,2}$/.test(sanitizedHex))
    return null;

  const toRGB = (value: string) =>
    parseInt(value, 16) * (hexLength <= 4 ? 17 : 1);
  const [r, g, b] = [0, 2, 4].map((start) =>
    toRGB(sanitizedHex.slice(start, start + (hexLength <= 4 ? 1 : 2))),
  );

  return alpha === 1
    ? `rgb(${r}, ${g}, ${b})`
    : `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function sanitizeRGBString(colorString: string): string | null {
  // Regular expressions to match RGB and RGBA color strings
  const rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*\.?\d+)\)$/;

  // Test if the string matches the RGB or RGBA pattern
  const rgbMatch = colorString.match(rgbRegex);
  const rgbaMatch = colorString.match(rgbaRegex);

  if (rgbMatch) {
    // If it's an RGB color, sanitize and return
    const [, r, g, b] = rgbMatch.map(Number);

    return `rgb(${r}, ${g}, ${b})`;
  } else if (rgbaMatch) {
    // If it's an RGBA color, sanitize and return
    const [, r, g, b, alpha] = rgbaMatch.map(Number);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // If the string doesn't match either pattern, return null
  return null;
}
