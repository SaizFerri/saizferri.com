module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es", "de"],
    defaultLocale: "en",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
};
