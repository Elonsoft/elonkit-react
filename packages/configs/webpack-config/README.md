# @esfront/webpack-config

## Installation

Install the correct versions of each package, which are listed by the command:

```
npm info "@esfront/webpack-config@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```
npx install-peerdeps --dev @esfront/webpack-config
```

## Usage

## Environment Variables

| Environment Variable | Default       | Description                                                             |
| -------------------- | ------------- | ----------------------------------------------------------------------- |
| `NODE_ENV`           | `development` |                                                                         |
| `PORT`               | `8080`        | Set the port the application runs on.                                   |
| `BUNDLE_ANALYZER `   |               | Enables the bundle analyzer.                                            |
| `PUBLIC_.*`          |               | Prefix the variable with `PUBLIC_` to make it available in the browser. |
