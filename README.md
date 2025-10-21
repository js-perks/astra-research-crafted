# Astra Academics

**Notebooks for research.**

A modern, minimalistic website for Astra Academics — premium notebooks designed specifically for researchers, scholars, and graduate students.

## About

Astra Academics creates high-quality notebooks that support deep thinking with clean layouts, smooth paper, and durable design built for years of ideas and experiments.

## Live Site

- **Lovable URL**: https://lovable.dev/projects/b68d3ca9-727e-4e7b-bff8-b8c226d09599
- **GitHub Pages**: (configure deployment below)

## Deploying to GitHub Pages

### Step 1: Connect to GitHub (if not already connected)
1. In Lovable editor, click **GitHub → Connect to GitHub**
2. Authorize the Lovable GitHub App
3. Click **Create Repository**

### Step 2: Configure GitHub Pages
1. Go to your GitHub repository
2. Navigate to **Settings → Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Create `.github/workflows/deploy.yml` in your repository with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. If your repository name is not your username (e.g., `username/astra-academics`), update `vite.config.ts`:
   - Add `base: '/astra-academics/'` to the config

6. Commit and push — your site will deploy automatically!

### Step 3: Access Your Site
Your site will be available at: `https://yourusername.github.io/repository-name/`

## Local Development

### Prerequisites
- Node.js & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## Editing

**Via Lovable (Recommended)**
- Visit the [Lovable Project](https://lovable.dev/projects/b68d3ca9-727e-4e7b-bff8-b8c226d09599)
- Changes sync automatically to GitHub

**Via IDE**
- Clone repo and push changes
- Changes sync automatically to Lovable

**Via GitHub**
- Edit files directly in GitHub interface
- Click "Edit" button (pencil icon) on any file

**Via GitHub Codespaces**
- Click "Code" → "Codespaces" → "New codespace"
- Edit in browser-based VS Code

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/b68d3ca9-727e-4e7b-bff8-b8c226d09599) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
