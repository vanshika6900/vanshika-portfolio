
import fs from 'fs';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data.ts');

const title = process.argv[2];
const customDate = process.argv[3];

if (!title) {
    console.error('Error: Please provide a title for the blog post.');
    console.log('Usage: npm run log "Title" "Optional Date (YY.MM.DD)"');
    process.exit(1);
}

// Function to format date as YY.MM.DD
const getFormattedDate = () => {
    const d = new Date();
    const yy = String(d.getFullYear()).slice(-2);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yy}.${mm}.${dd}`;
};

const date = customDate || getFormattedDate();
const tag = "TRANSMISSION"; // Default tag

const newBlog = { date, title: title.toUpperCase(), tag };

const blogsJson = JSON.stringify(newBlog, null, 2);

try {
    let content = fs.readFileSync(DATA_FILE_PATH, 'utf-8');

    // Find where the blogs array starts
    const blogsStartMatch = content.match(/blogs:\s*\[/);
    if (!blogsStartMatch) {
        throw new Error('Could not find blogs array in data.ts');
    }

    const insertionPoint = blogsStartMatch.index! + blogsStartMatch[0].length;

    // Create the entry string
    const entryString = `\n    { date: "${date}", title: "${title.toUpperCase()}", tag: "${tag}" },`;

    // Insert at the beginning of the array
    const updatedContent = content.slice(0, insertionPoint) + entryString + content.slice(insertionPoint);

    fs.writeFileSync(DATA_FILE_PATH, updatedContent);

    console.log('--- SUCCESS ---');
    console.log(`Transmission logged: ${title}`);
    console.log(`Date: ${date}`);
} catch (error) {
    console.error('Error updating data.ts:', error);
    process.exit(1);
}
