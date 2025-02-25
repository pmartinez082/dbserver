import ngrok from 'ngrok';
import dotenv from 'dotenv';

dotenv.config();

(async function() {
    try {
        const url = await ngrok.connect({
            addr: 3000,
            authtoken: process.env.NGROK_AUTHTOKEN,
            hostname: process.env.NGROK_SUBDOMAIN
        });
        console.log(`ngrok tunnel opened at: ${url}`);
    } catch (error) {
        console.error('Error opening ngrok tunnel:', error);
    }
})();