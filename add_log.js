import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Usage: node add_log.js "Your log message" "Optional Date (May 08, 2026)"
const args = process.argv.slice(2);
const message = args[0];
let dateStr = args[1];

if (!message) {
  console.error('Error: Please provide a message. \nUsage: node add_log.js "Your message" "Optional Date"');
  process.exit(1);
}

if (!dateStr) {
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  dateStr = new Date().toLocaleDateString('en-US', options).replace(',', '');
}

const filePath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find the dailyLogs array inside RESUME_DATA
const logsRegex = /dailyLogs:\s*\[([\s\S]*?)\]/;
const match = content.match(logsRegex);

if (match) {
  const newLog = `\n      { date: "${dateStr}", text: "${message}" },`;
  const updatedLogs = match[0].replace('dailyLogs: [', 'dailyLogs: [' + newLog);
  
  content = content.replace(logsRegex, updatedLogs);
  fs.writeFileSync(filePath, content);
  
  console.log(`\n✅ Success! Added log:`);
  console.log(`   Date: ${dateStr}`);
  console.log(`   Text: ${message}\n`);
} else {
  console.error('Error: Could not find dailyLogs array in src/App.tsx');
}
