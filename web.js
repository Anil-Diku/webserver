// List of image URLs
const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
];

// Function to create and append image elements to the gallery
function populateGallery() {
    const gallery = document.getElementById('image-container');

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        gallery.appendChild(img);
    });
}

// Call the populateGallery function when the page loads
window.onload = populateGallery;
