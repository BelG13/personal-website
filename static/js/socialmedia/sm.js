function openSocial(url) {
    if(url.startsWith("https")){
        window.open(url, '_blank');
    }
    else{
        navigator.clipboard.writeText(url)
        alert("Copied to clipboard")
    }
}


async function typeTextCycling(elementId, texts) {
    const element = document.getElementById(elementId);
  
    while (true) { // Loop indefinitely
        for (const text of texts) { // Loop through each text in the list
            // Type each letter with a small delay
            for (let i = 0; i < text.length; i++) {
                element.textContent += text[i];
                await new Promise(resolve => setTimeout(resolve, 100)); // Delay of 100ms
            }
            
            // Wait before deleting
            await new Promise(resolve => setTimeout(resolve, 2000)); // Delay of 2 seconds

            // Remove each letter with a small delay
            for (let i = text.length; i >= 0; i--) {
                element.textContent = text.substring(0, i);
                await new Promise(resolve => setTimeout(resolve, 50)); // Delay of 50ms
            }
        }
    }
}

// Example usage: Start cycling through "Follow me on Twitter", "Follow me on Facebook", etc.
const texts = [
    ' Twitter',
    ' Facebook',
    ' Instagram',
    ' LinkedIn'
];
typeTextCycling('reccur-text', texts);

