# Deploy Portfolio to GitHub Pages

## Quick Setup Steps

### 1. Create GitHub Repository
- Go to GitHub and create a new repository named `[your-username].github.io`
- For example: `ahileshshankar.github.io`

### 2. Connect Repository
```bash
# Initialize git (if not already done)
git init

# Add your GitHub repository as origin
git remote add origin https://github.com/[your-username]/[your-username].github.io.git

# Add all files
git add .

# Commit your portfolio
git commit -m "Initial portfolio website"

# Push to main branch
git push -u origin main
```

### 3. Deploy to GitHub Pages
```bash
# Make deployment script executable
chmod +x deploy.js

# Run deployment
node deploy.js
```

## What the deployment does:
- Builds a static version of your portfolio
- Pushes it to the `gh-pages` branch
- GitHub automatically serves it from `https://[your-username].github.io`

## GitHub Pages Settings
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Source should be set to "Deploy from a branch"
4. Branch should be `gh-pages` with `/ (root)` folder

## Your Live Portfolio
Once deployed, your portfolio will be live at:
`https://[your-username].github.io`

For your case: `https://ahileshshankar.github.io`