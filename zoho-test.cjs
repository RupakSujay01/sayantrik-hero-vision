const https = require('https');
https.get('https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js', res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Find everywhere they assign className or use a template with class="..."
        const classRegex = /class(?:Name)?\s*[=:]\s*["']([^"']*)["']/g;
        let match;
        const classes = new Set();
        while ((match = classRegex.exec(data)) !== null) {
            if (match[1].includes('cw-')) {
                match[1].split(' ').forEach(c => classes.add(c));
            }
        }
        console.log(Array.from(classes).join('\n'));

        // Also, print out snippets containing "description" or "cw-job-"
        console.log('\n--- DOM Structure Snippets ---');
        const structureRegex = /<[^>]*cw-[^>]*>/g;
        let sMatch;
        while ((sMatch = structureRegex.exec(data)) !== null) {
            console.log(sMatch[0]);
        }
    });
});
