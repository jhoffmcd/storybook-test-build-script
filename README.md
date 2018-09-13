# storybook-test-build-script
Created to test environment variable usage in the Storybook config file.

- `process.env.NODE_ENV` works as expected with `start-storybook`
- `process.env.NODE_ENV` *doesnt not work* as expected with `build-storybook`

`@storybook/react@4.0.0-alpha.21` with Babel 7 config.

You can also test the usage of `STORYBOOK_BUILD` env var with the provided NPM scripts in `package.json` and the commented out code block in the `.storybook/config.js` file.
