import { StringLengthMeasurementUnit } from '../enums';
import { CharacterSpecification } from '../types/CharacterSet';
export interface WordsLengthsDistribution {
  [length: number]: number;
}
export interface WordsLengthsDistributions {
  [key: string]: WordsLengthsDistribution;
}
export interface GenerationConfiguration {
  fixedLength?: number;
  minimumLength?: number;
  maximumLength?: number;
  stringLengthMeasurementUnit?: StringLengthMeasurementUnit;
  characterSetNames?: string | string[];
  include?: CharacterSpecification[];
  exclude?: CharacterSpecification[];
  separator?: false | string | number;
  allowNotPrintable?: boolean;
  allowAmbiguousDisplaySet?: boolean;
  wordLengthDistribution?: WordsLengthsDistribution;
}
