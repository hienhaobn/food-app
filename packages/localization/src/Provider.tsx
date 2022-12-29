import { Language } from '@package/uikit';
import React, { createContext } from 'react';

import { EN } from './config/languages';
import { ContextApi, ProviderState } from './types';

const initialState: ProviderState = {
  isFetching: true,
  currentLanguage: EN,
};

const languageMap = new Map<Language['locale'], Record<string, string>>();
languageMap.set(EN.locale, {});

export const LanguageContext = createContext<ContextApi | undefined>(undefined);

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LanguageContext.Provider>{children}</LanguageContext.Provider>;
};
