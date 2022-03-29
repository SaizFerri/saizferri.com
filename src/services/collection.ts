import { DEFAULT_LANG } from "const/global";

import { initializeApollo } from "../../lib/apolloClient";

interface GetCollectionPayload<T, R> {
  query: any;
  locale?: string;
  variables?: Record<string, unknown>;
  collectionName: string;
  mapper?: (item: T, locale: string, translations: unknown) => R;
}

export async function getCollection<T, R>({
  query,
  locale = DEFAULT_LANG,
  variables = {},
  collectionName,
  mapper,
}: GetCollectionPayload<T, R>): Promise<R | R[] | null> {
  const apolloClient = initializeApollo();
  const translations = await import(`../../i18n/${locale}.json`);

  const response = await apolloClient.query({
    query,
    variables,
  });

  if (response) {
    const data = response.data[collectionName];

    if (!Array.isArray(data)) {
      if (mapper && typeof mapper === "function") {
        return [data].map((item: T) =>
          mapper(item, locale, translations)
        )[0] as R;
      }
      return data;
    }

    if (!mapper || typeof mapper !== "function") {
      return null;
    }

    const isSortable = data.some((item) => !!item.sort);
    const items = isSortable ? order<Sortable<T>>(data) : data;

    return items.map((item: T) => mapper(item, locale, translations)) as R[];
  }

  return null;
}

function order<T extends Sort>(data: T[]): T[] {
  return [...data].sort((a: T, b: T) => {
    if (!a.sort || !b.sort) {
      return 0;
    }
    return a.sort - b.sort;
  });
}

interface Sort {
  sort: number;
}
type Sortable<T> = T & Sort;
