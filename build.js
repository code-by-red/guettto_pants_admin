const fs = require('fs');
const path = require('path');

// Read environment variables
const supabaseUrl = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// Read admin.html
let html = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');

// Replace the config.js script with inline credentials
html = html.replace(
    '<script src="config.js"></script>',
    `<script>
        const SUPABASE_URL = "${supabaseUrl}";
        const SUPABASE_ANON_KEY = "${supabaseAnonKey}";
    </script>`
);

// Write the modified HTML
fs.writeFileSync(path.join(__dirname, 'admin.html'), html);

console.log('Build complete: Environment variables injected into admin.html');
