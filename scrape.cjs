const { webkit } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await webkit.launch();
    const page = await browser.newPage();
    await page.goto('https://sayantrik.zohorecruit.in/jobs/Careers', { waitUntil: 'networkidle' });

    await page.waitForTimeout(3000); // Wait for API

    const html = await page.evaluate(() => {
        return document.body.innerHTML;
    });

    fs.writeFileSync('zoho-body.html', html);
    console.log("Wrote full body to zoho-body.html");

    await browser.close();
})();
