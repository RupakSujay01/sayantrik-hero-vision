const fs = require('fs');
const https = require('https');

https.get('https://sayantrik.zohorecruit.in/jobs/Careers', res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('zoho-html.txt', data);
        console.log("Written to zoho-html.txt");
    });
});
