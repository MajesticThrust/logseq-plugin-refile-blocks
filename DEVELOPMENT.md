## Prerequisites
1. [nodejs](https://nodejs.org/)
2. [pnpm](https://pnpm.io/)

## Usage
1. Use this template create your own plugin
2. change `package.json` name to your own plugin name
3. change LICENSE to your own license
4. change logo.png to your own logo
5. run `pnpm install` to install dependencies

### Browser mode with HMR

1. run `pnpm dev` to start vite server
2. Open HTTP APIs server Feature in Logseq settings
3. Add API authorization token to Logseq and set .env environment variables to your Logseq server address and the token
    * API_SERVER=http://127.0.0.1:12315
    * API_TOKEN=123
4. open `localhost:5173` in browser

> [!TIP]
> Browser mode cannot access logseq plugin settings, you can add a file `mocks/settings.local.json` to mock.


### Plugin mode
This mode doesn't support HMR, you need to run `pnpm build` and reload plugin in logseq to see the changes
1. run `pnpm build:plugin` to build plugin
2. Open Plugins feature in logseq settings
3. Click `Load unpacked plugin` and select this project folder

## Release new version
1. push to `main` branch
2. github ci will auto create a new release

## Commits

Commit message needs to follow the [semantic-release](https://github.com/semantic-release/semantic-release) specification.

Use [`czg`](https://cz-git.qbb.sh/cli/) to generate commit messages.

## Publish to [logseq marketplace](https://github.com/logseq/marketplace)

Create PR to add your plugin message to [logseq/marketplace](https://github.com/logseq/marketplace)