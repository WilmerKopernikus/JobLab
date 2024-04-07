function preloadAndSwapImage() {
        // Preload the static image
        var img = new Image();
        img.src = 'imagenes/final_frame_cn.jpg'; // Path to the static image

        // Set a timeout for the GIF's duration
        setTimeout(function() {
            // Swap the GIF with the static image
            document.getElementById('bg-gif').src = img.src;
        }, 3600); // Timeout for GIF in milliseconds
}

// Combine both actions on window load and hide the loading screen
window.onload = function() {
    preloadAndSwapImage();
    // Ocultar el loader una vez que la página está cargada
    document.getElementById('loadingScreen').style.display = 'none';
};