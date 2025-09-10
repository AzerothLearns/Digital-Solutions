#!/usr/bin/env node

/**
 * Local Development Server for CFNA Marketing Website
 * Run with: node local-dev.js
 */

import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Contact form endpoint (simplified for local dev)
app.post('/api/contact', (req, res) => {
  console.log('Contact form submission:', req.body);
  res.json({ 
    success: true, 
    message: 'Contact form submitted successfully (local dev)',
    data: req.body 
  });
});

// Serve static files (when built)
app.use(express.static(path.join(__dirname, 'dist/public')));

// Fallback for SPA
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    res.status(404).json({ error: 'API endpoint not found' });
  } else {
    res.sendFile(path.join(__dirname, 'dist/public/index.html'));
  }
});

const PORT = process.env.PORT || 5000;
const server = createServer(app);

server.listen(PORT, 'localhost', () => {
  console.log(`🚀 Local server running at http://localhost:${PORT}`);
  console.log('📧 Contact form submissions will be logged to console');
});