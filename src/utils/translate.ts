import { isProduction } from "../const/global";

export const defaultLocale = "en";

export function translate(data: any, locale: string = defaultLocale) {
  return (prop: string) => {
    const translation = data.translations.find(
      (translation: any) => translation.language.code === locale
    );

    if (translation && translation[prop]) {
      return translation[prop];
    }

    if (locale === defaultLocale) {
      return data[prop];
    }

    return isProduction ? data[prop] : `${prop}_NO_TRANSLATION`;
  };
}
