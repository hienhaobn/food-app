import { Language } from '@package/uikit';

import translations from './config/translations.json';

export type ContextData = {
  [key: string]: string | number;
};

export interface ProviderState {
  isFetching: boolean;
  currentLanguage: Language;
}

export interface ContextApi extends ProviderState {
  setLanguage: (language: Language) => void;
  t: TranslationFunction;
}

// To support string literals and union of string
// https://stackoverflow.com/questions/61047551/typescript-union-of-string-and-string-literals
type MaybeObject = Record<never, never>;
export type TranslationKey = keyof typeof translations | (string & MaybeObject);

export type TranslationFunction = (key: TranslationKey, data?: ContextData) => string;
