import {
    getEnglishWords,
    getChineseSimplifiedWords,
    getChineseTraditionalWords,
    getFrenchWords,
    getItalianWords,
    getJapaneseWords,
    getKoreanWords,
    getSpanishWords
} from './wordlists';
import {
    ErrUnsupportedLanguage,
} from './errors';

export enum MnemonicLanguage {
    English,
    ChineseSimplified,
    ChineseTraditional,
    French,
    Italian,
    Japanese,
    Korean,
    Spanish,
}

export function getWords(language: MnemonicLanguage): string[] {
    switch (language) {
        case MnemonicLanguage.English:
            return getEnglishWords();
        case MnemonicLanguage.ChineseSimplified:
            return getChineseSimplifiedWords();
        case MnemonicLanguage.ChineseTraditional:
            return getChineseTraditionalWords();
        case MnemonicLanguage.French:
            return getFrenchWords();
        case MnemonicLanguage.Italian:
            return getItalianWords();
        case MnemonicLanguage.Japanese:
            return getJapaneseWords();
        case MnemonicLanguage.Korean:
            return getKoreanWords();
        case MnemonicLanguage.Spanish:
            return getSpanishWords();
        default:
            throw ErrUnsupportedLanguage();
    }
}