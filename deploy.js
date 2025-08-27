#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Deploying to GitHub Pages...');

try {
  // Build the frontend only
  console.log('📦 Building static site...');
  execSync('NODE_ENV=production vite build --outDir=dist-gh-pages', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });

  // Deploy to GitHub Pages
  console.log('🌐 Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist-gh-pages', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });

  console.log('✅ Successfully deployed to GitHub Pages!');
  console.log('📱 Your site will be available at: https://[your-username].github.io');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}