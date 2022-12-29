import { ContextData, TranslationKey, useTranslation } from '@package/localization';
import React from 'react';
import { Text } from 'react-native';

export interface TransProps extends ContextData {
  children: TranslationKey;
}

export const Trans = ({ children, ...props }: TransProps) => {
  const { t } = useTranslation();

  if (typeof children !== 'string') {
    throw new Error('children not string in Trans is not supported yet');
  }

  return <Text>{t(children, props)}</Text>;
};
