import {
  CharacterSpecifications,
  CharacterUnicodeRange,
  CharacterUnicodeValue
} from '../types/CharacterSet';
/*
 * Characters
 */
export const SpaceCharacterUnicodeValue: CharacterUnicodeValue = 0x20;
/*
 * Ranges
 */
export const FullUnicodeCharactersRange: CharacterUnicodeRange = [
  0x0, 0x10ffff
];
// Control codes
export const C0ControlsCharacters: CharacterSpecifications = [
  [0x0, 0x1f] // Null character to Unit Separator
];
export const DeleteCharacters: CharacterSpecifications = [
  0x7f // Delete
];
export const C1ControlsCharacters: CharacterSpecifications = [
  [0x80, 0x9f] // Padding Character to Application Program Command
];
// Basic Latin
// Latin script
export const ASCIIPunctuationSymbols: CharacterSpecifications = [
  [SpaceCharacterUnicodeValue, 0x2f], // Space !"#$%&'()*+,-./
  [0x3a, 0x40], // :;<=>?@
  [0x5b, 0x60], // [\]^_`
  [0x7b, 0x7e] // {|}~
];
export const ASCIIDigits: CharacterSpecifications = [
  [0x30, 0x39] // 0-9
];
export const LatinAlphabetUppercaseLetters: CharacterSpecifications = [
  [0x41, 0x5a] // A-Z
];
export const LatinAlphabetLowercaseLetters: CharacterSpecifications = [
  [0x61, 0x7a] // a-z
];
// Latin-1 Supplement
export const Latin1PunctuationSymbols: CharacterSpecifications = [
  [0xa0, 0xbf] // ¡¢£¤¥¦§¨©ª«¬­®¯ °±²³´µ¶·¸¹º»¼½¾¿
];
export const Latin1AlphabetUppercaseLetters: CharacterSpecifications = [
  [0xc0, 0xd6], // ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ
  [0xd8, 0xde] // ÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞ
];
export const Latin1Math: CharacterSpecifications = [
  0xd7, // ×
  0xf7 // ÷
];
export const Latin1AlphabetLowercaseLetters: CharacterSpecifications = [
  [0xdf, 0xf6], // ßàáâãäåæçèéêëìíîï
  [0xf8, 0xff] // ðñòóôõö÷øùúûüýþÿ
];
// Latin Extended-A
export const LatinExtendedAEuropean: CharacterSpecifications = [
  [0x100, 0x148], // ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒ
  [0x14a, 0x17f] // ĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬ
];
export const DeprecatedSpecification: CharacterSpecifications = [
  0x149 // ŉ - Latin Small Letter N preceded by apostrophe
];
// Latin Extended-B
export const LatinExtendedBNonEuropeanHistoric: CharacterSpecifications = [
  [0x180, 0x1bf] // ƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯ ưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿ
];
export const LatinExtendedBAfricanClicks: CharacterSpecifications = [
  [0x1c0, 0x1c3] // ǀǁǂǃ
];
export const LatinExtendedBCroatian: CharacterSpecifications = [
  [0x1c4, 0x1cc] // ǄǅǆǇǈǉǊǋǌ
];
export const LatinExtendedBPinyin: CharacterSpecifications = [
  [0x1cd, 0x1dc] // ǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜ
];
export const LatinExtendedBPhoneticHistoric: CharacterSpecifications = [
  [0x1dd, 0x1ff] // ǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿ
];
export const LatinExtendedBSlovenianCroatian: CharacterSpecifications = [
  [0x200, 0x217] // ȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗ
];
export const LatinExtendedBRomanian: CharacterSpecifications = [
  [0x218, 0x21b] // ȘșȚț
];
export const LatinExtendedBMiscellaneous: CharacterSpecifications = [
  [0x21c, 0x229], // ȜȝȞȟȠȡȢȣȤȥȦȧȨȩ
  [0x237, 0x24f] // ȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏ
];
export const LatinExtendedBLivonian: CharacterSpecifications = [
  [0x22a, 0x233] // ȪȫȬȭȮȯȰȱȲȳ
];
export const LatinExtendedBSinology: CharacterSpecifications = [
  [0x234, 0x236] // ȴȵȶ
];
// Latin Extended Additional
export const LatinExtendedAdditionalGeneralUseExtensions: CharacterSpecifications =
  [
    [0x1e00, 0x1e9b] // ḀḁḂḃḄḅḆḇḈḉḊḋḌḍḎḏḐ
  ];
export const LatinExtendedAdditionalMedievalist: CharacterSpecifications = [
  [0x1e9c, 0x1e9d], // Ḝḝ
  0x1e9f, // ḟ
  [0x1efa, 0x1eff] // ỺỻỼỽỾỿ
];
export const LatinExtendedAdditionalGermanTypography: CharacterSpecifications =
  [
    0x1e9e // ẞ
  ];
export const LatinExtendedAdditionalVietnamese: CharacterSpecifications = [
  [0x1ea0, 0x1ef9] // ẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹ
];
// Latin Extended-C #TODO
// Latin Extended-D #TODO
// Latin Extended-E #TODO
// Latin Extended-F #TODO
// Latin Extended-G #TODO
// Phonetic scripts
// IPA Extensions
export const IPAExtensions: CharacterSpecifications = [
  [0x250, 0x2af] // ɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯ
];
export const SpacingModifierLetters: CharacterSpecifications = [
  [0x2b0, 0x2ff] // ʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿
];
// Phonetic Extensions #TODO
// Phonetic Extensions Supplement #TODO
export const CombiningMarks: CharacterSpecifications = [[0x300, 0x36f]];
export const CombiningGreekCoptic: CharacterSpecifications = [
  [0x370, 0x3ff] // ͰͱͲͳʹ͵Ͷͷͺͻͼͽ;Ϳ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ΢ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿ
];
// Greek Extended
export const GreekExtended: CharacterSpecifications = [
  [0x1f00, 0x1fff] //
];
