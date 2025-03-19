// Wait for the page to load before removing the loading screen
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide the loading screen after the page is loaded
    }, 500); // Slight delay for smoother transition
});

// Handle language change (Example)
function loadLanguage(lang) {
    const langFile = lang + '.json';
    fetch(langFile)
        .then(response => response.json())
        .then(data => {
            document.querySelector('header h1').textContent = data.headerTitle;
            document.querySelector('header p').textContent = data.headerDescription;
            document.querySelector('.cta').textContent = data.ctaButton;
        })
        .catch(error => console.error('Error loading language:', error));
}

// Example: load the Spanish language file when needed
// loadLanguage('es');
