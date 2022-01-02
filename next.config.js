module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
};
