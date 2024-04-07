function preloadAndSwapImage() {
    // Check if the screen width is less than or equal to 768 pixels
    if (window.innerWidth <= 768) {
        // Preload the static image
        var img = new Image();
        img.src = 'guangzhou_final_frame.jpg'; // Path to the static image

        // Set a timeout for the GIF's duration
        setTimeout(function() {
            // Swap the GIF with the static image
            document.getElementById('bg-gif').src = img.src;
        }, 2000); // Timeout for GIF in milliseconds
    }
}

function updateImageForScreenSize() {
    var imgElement = document.getElementById('bg-gif');
    if (window.innerWidth > 768) {
        imgElement.src = 'imagenes/logo.jpg'; // Path to your image for screens wider than 768px
    } else {
        imgElement.src = 'guangzhou.gif'; // Path to your default image for mobile screens
    }
}

// Combine both actions on window load
window.onload = function() {
    preloadAndSwapImage();
    updateImageForScreenSize();
};

// Listen for window resize events
window.addEventListener('resize', updateImageForScreenSize);