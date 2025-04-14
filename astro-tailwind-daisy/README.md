# Astro Starter Kit: Basics

This folder contains a pre-configured front-end stack ready for cloning and building new projects.

---

## 🧱 Included Tech Stack

This starter kit includes:

- **Astro** – Static site generator
- **Tailwind CSS v4** – Utility-first CSS framework
- **DaisyUI v5** – Component library for Tailwind
- **Alpine.js** – Lightweight JS framework for interactivity
- **PostCSS** – Tailwind plugin pipeline

Everything is installed and wired together for immediate development.

---

## 🧭 How to Start a New Project

If you're working on the same machine and environment (MacOS), you can safely create a new project by simply copying this folder.

### ✅ Recommended Steps:

1. **Copy this folder**:
   ```bash
   cp -R starter-kit my-new-project
   ```

2. **Go into your new project**:
   ```bash
   cd my-new-project
   ```

3. **Start the dev server**:
   ```bash
   npm run dev
   ```

That’s it — no need to reinstall or reconfigure anything if you're staying on the same machine.

---

## ⚠️ Things to Keep in Mind

### 🔁 `node_modules` is included (but can be reset)
This kit includes the `node_modules` folder. This ensures everything works out of the box when copied. However:

- If you ever run into bugs or version mismatches, you can delete it and reinstall fresh:
  ```bash
  rm -rf node_modules
  npm install
  ```

### 🔒 Versions are locked
All packages are installed with locked versions (via `package-lock.json` or `pnpm-lock.yaml`). This prevents accidental version drift.

If you want to update packages:
- Do it inside `starter-kit`
- Test thoroughly
- Then use it as the base for future projects

### 🖼️ All paths are local
All assets (images, styles, scripts) are referenced with relative paths. This makes the setup self-contained and copy-safe.

---

## 💡 Optional: Create a GitHub Template Repo

If you want to make this setup portable across machines or collaborators:
- Push this folder to a GitHub repo
- Enable the "Template" checkbox on GitHub
- Create new repos from it using "Use this template"

---

## 🧹 Optional: Clean Start Script

You can create a simple script to reset the starter kit before copying:

```bash
#!/bin/bash
rm -rf node_modules
rm -rf dist
rm -rf .astro
rm -f package-lock.json
echo "Starter kit cleaned. Run 'npm install' to reinstall."
```

Save it as `reset.sh` and make it executable:
```bash
chmod +x reset.sh
```

---

## 🛠️ Need to Update This Kit?

- Modify your base setup in `starter-kit`
- Document any config changes here
- Keep it clean and minimal — it should stay fast and understandable



```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
