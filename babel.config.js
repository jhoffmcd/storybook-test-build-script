module.exports = api => {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-react"
  ];

  const plugins = [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-proposal-object-rest-spread"
  ];

  const env = {
    production: {
      plugins: [
        ["emotion", { hoist: true }],
        [
          "transform-react-remove-prop-types",
          { ignoreFilenames: ["node_modules"], removeImport: true }
        ]
      ]
    },
    development: {
      plugins: [["emotion", { sourceMap: true, autoLabel: true }]]
    },
    test: { presets: ["@babel/preset-env"], plugins: ["require-context-hook"] }
  };

  return { presets, plugins, env };
};
