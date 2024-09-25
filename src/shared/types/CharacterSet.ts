/**
 * A unicode code point value (e.g. 0x1F600)
 */
export type CharacterUnicodeValue = number;
export type CharacterUnicodeRange = [
  /*
   * The first unicode code point value in the range.
   */
  CharacterUnicodeValue,
  /*
   * The last unicode code point value in the range.
   */
  CharacterUnicodeValue
];
/**
 * A string value of characters (e.g. "." or "qwertyuiopasdfghjklzxcvbnm")
 */
export type CharacterString = string;
/**
 * A specification of a character or set of characters.
 */
export type CharacterSpecification =
  | CharacterUnicodeValue
  | CharacterUnicodeRange
  | CharacterString;
export type CharacterSpecifications = CharacterSpecification[];
/**
 * A set of characters that can be used to generate or validate a string.
 */
export type CharacterSet = {
  name: string;
  description: string;
  characters: CharacterSpecifications;
  excludedCharacters?: CharacterSpecifications;
};
