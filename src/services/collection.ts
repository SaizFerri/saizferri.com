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
  locale = "en",
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
      return data;
    }

    if (!mapper || typeof mapper !== "function") {
      return null;
    }

    return data.map((item: T) => mapper(item, locale, translations)) as R[];
  }

  return null;
}
