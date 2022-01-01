export function imageLoader({ src, width, quality }: NextImageLoader) {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${src}?width=${width}${
    quality ? `&quality=${quality}` : ""
  }&access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`;
}

interface NextImageLoader {
  src: string;
  width: number;
  quality?: number;
}
