# storybook-test-build-script
Created to test environment variable usage in the Storybook config file.

- `process.env.NODE_ENV` works as expected with `start-storybook`
- `process.env.NODE_ENV` *doesnt not work* as expected with `build-storybook`

`@storybook/react@4.0.0-alpha.21` with Babel 7 config.
