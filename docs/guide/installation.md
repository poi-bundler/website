# Installation

To get started quickly you may install Poi globally:

```bash
yarn global add poi
# or npm
npm i -g poi
```

Then a global `poi` command will be available on your machine.

However, for a real world project, you need to ensure `poi` command is always available for whoever is running your project locally without installing Poi globally, e.g. a collaborator. So it's recommended to install Poi locally in your project instead:

```bash
cd your-project
yarn add poi --dev
# or npm
npm i poi -D
```

The locally installed `poi` command will be available at `./node_modules/.bin/poi` in your project.

`node_modules/.bin` directory will be added to system `$PATH` when your're running npm scripts. So you can directly use the local `poi` command there:

📝 __package.json__:

```json
{
  "scripts": {
    "build": "poi build",
    "dev": "poi"
  }
}
```

Alternatively, to run local `poi` command from the terminal directly instead of using npm scripts, you can prefix it with `npx` or `yarn`.