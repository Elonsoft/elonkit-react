const typeMatchesFilenameExtension = (type: string, fileName: string): boolean =>
  type.charAt(0) === '.' && fileName.toLowerCase().endsWith(type);

const typeMatchesFileType = (type: string, fileType: string): boolean =>
  type.endsWith('/*') && fileType.startsWith(type.replace(/\/.*$/, ''));

const typesMatch = (types: string[], file: File): boolean =>
  types.some(
    (type) =>
      type === file.type || typeMatchesFileType(type, file.type) || typeMatchesFilenameExtension(type, file.name)
  );

/**
 * @param file File to validate.
 * @param types Valid file types separated by comma.
 * @returns True if file type is valid, false otherwise.
 * @example
 * // returns true
 * validateFileType('image.png', '.png, .jpeg, .jpg');
 */
export const validateFileType = (file: File, types: string): boolean => {
  const typesArr = types.split(',').map((v) => v.trim());
  return typesArr.includes('*') || typesMatch(typesArr, file);
};
