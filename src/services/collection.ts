import { initializeApollo } from "../../lib/apolloClient";

interface GetCollectionPayload<T, R> {
  query: any;
  variables?: Record<string, unknown>;
  collectionName: string;
  mapper?: (item: T) => R;
}

export async function getCollection<T, R>({
  query,
  variables = {},
  collectionName,
  mapper,
}: GetCollectionPayload<T, R>): Promise<R | R[] | null> {
  const apolloClient = initializeApollo();

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

    return data.map(mapper) as R[];
  }

  return null;
}
