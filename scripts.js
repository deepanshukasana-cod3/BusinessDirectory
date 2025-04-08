// Array to store restaurant data, including reviews and ratings
let restaurants = [
  {
    name: "Hops n Grains",
    address: "Sector 9, Panchkula",
    image: "images1.webp", // Ensure the image exists in the 'images' folder
    description: "A renowned microbrewery offering freshly brewed beers and a diverse menu.",
    reviews: [
      { rating: 5, text: "Great beer selection! Loved the atmosphere." },
      { rating: 4, text: "Nice place, but the food could be better." }
    ],
    language: "English"
  },
  {
    name: "JB’s Kitchen",
    address: "Phase 5, Mohali",
    image: "images2.webp",
    description: "Known for its North Indian and Mughlai dishes, this restaurant is ideal for family outings.",
    reviews: [
      { rating: 4, text: "Amazing food! The dal makhani was superb." }
    ],
    language: "Hindi"
  },
  {
    name: "The Café at JW Marriott",
    address: "Sector 35, Chandigarh",
    image: "images3.webp",
    description: "A luxurious dining experience with international and Indian fusion cuisine.",
    reviews: [
      { rating: 5, text: "Excellent ambience and food. Perfect for fine dining!" }
    ],
    language: "English"
  },
  {
    name: "Sagar Ratna",
    address: "Sector 17, Chandigarh",
    image: "images1.webp",
    description: "Famous for its South Indian cuisine, especially dosas and idlis.",
    reviews: [
      { rating: 4, text: "Delicious south Indian food. The dosas were crispy and tasty." }
    ],
    language: "Hindi"
  },
  {
    name: "Bikanervala",
    address: "Sector 17, Chandigarh",
    image: "images2.webp",
    description: "A vegetarian delight known for Indian sweets, chaats, and snacks.",
    reviews: [
      { rating: 4, text: "A great place for vegetarian food and sweets." }
    ],
    language: "Hindi"
  },
  {
    name: "Kailash Parbat",
    address: "Sector 9, Panchkula",
    image: "images3.webp",
    description: "Famous for its Peshawari cuisine and variety of tandoor dishes.",
    reviews: [
      { rating: 5, text: "Great ambiance and mouth-watering kebabs!" }
    ],
    language: "Hindi"
  },
  {
    name: "Indian Coffee House",
    address: "Sector 17, Chandigarh",
    image: "images2.webp",
    description: "A vintage coffee house offering simple meals and an old-school charm.",
    reviews: [
      { rating: 3, text: "The coffee is great, but the food is average." }
    ],
    language: "English"
  },
  {
    name: "The Rustic Door",
    address: "Sector 39, Chandigarh",
    image: "images1.webp",
    description: "A cozy café serving continental dishes and fresh bakery items.",
    reviews: [
      { rating: 5, text: "Amazing food and an even better vibe. Great for brunch." }
    ],
    language: "English"
  },
  {
    name: "Swagath Restaurant",
    address: "Sector 26, Chandigarh",
    image: "images2.webp",
    description: "Known for its seafood and traditional Punjabi dishes.",
    reviews: [
      { rating: 5, text: "The seafood was amazing, fresh, and delicious!" }
    ],
    language: "Hindi"
  },
  {
    name: "Café JC’s",
    address: "Sector 35, Chandigarh",
    image: "images3.webp",
    description: "A popular hangout spot known for its casual vibe, great food, and live music.",
    reviews: [
      { rating: 4, text: "Great place to hang out, food is good, but a bit noisy." }
    ],
    language: "English"
  },
  {
    name: "The Bhogpur Diner",
    address: "Sector 8, Mohali",
    image: "images1.webp",
    description: "A local favorite offering traditional Indian thalis and snacks.",
    reviews: [
      { rating: 3, text: "The food is decent, but not too flavorful." }
    ],
    language: "Punjabi"
  }
];

// Function to render the restaurant directory
function renderDirectory() {
  const directory = document.getElementById('restaurantDirectory');
  directory.innerHTML = '';  // Clear existing content

  // Check if restaurants array is not empty
  if (restaurants.length === 0) {
    directory.innerHTML = "<p>No restaurants available at the moment.</p>";
  }

  // Loop through restaurants array to display each restaurant
  restaurants.forEach((restaurant, index) => {
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant');

    restaurantDiv.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}">
      <h2>${restaurant.name}</h2>
      <p><strong>Address:</strong> ${restaurant.address}</p>
      <p><strong>Description:</strong> ${restaurant.description}</p>
      <p><strong>Language:</strong> ${restaurant.language}</p>

      <div class="review-section">
        <h3>Reviews:</h3>
        ${renderReviews(restaurant.reviews, index)}
        <div class="review-input">
          <textarea id="review-input-${index}" placeholder="Write a review..."></textarea>
          <div class="stars" id="stars-${index}">
            <span onclick="setRating(${index}, 1)">★</span>
            <span onclick="setRating(${index}, 2)">★</span>
            <span onclick="setRating(${index}, 3)">★</span>
            <span onclick="setRating(${index}, 4)">★</span>
            <span onclick="setRating(${index}, 5)">★</span>
          </div>
          <button onclick="submitReview(${index})">Submit Review</button>
        </div>
      </div>
    `;
    
    directory.appendChild(restaurantDiv);
  });
}

// Function to render reviews for each restaurant
function renderReviews(reviews, index) {
  let reviewsHtml = '';
  reviews.forEach(review => {
    reviewsHtml += `<p>${'★'.repeat(review.rating)} ${review.text}</p>`;
  });
  return reviewsHtml;
}

// Set the rating for a restaurant
function setRating(index, rating) {
  const stars = document.getElementById(`stars-${index}`).children;
  Array.from(stars).forEach((star, i) => {
    if (i < rating) {
      star.style.color = 'gold';
    } else {
      star.style.color = 'gray';
    }
  });
  restaurants[index].rating = rating;
}

// Submit the review
function submitReview(index) {
  const reviewText = document.getElementById(`review-input-${index}`).value;
  const rating = restaurants[index].rating || 0;

  if (reviewText && rating > 0) {
    restaurants[index].reviews.push({ rating: rating, text: reviewText });
    document.getElementById(`review-input-${index}`).value = '';
    renderDirectory();
  } else {
    alert("Please provide both a rating and a review.");
  }
}

// Handle adding a new restaurant from the form
document.getElementById('restaurantForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const image = document.getElementById('image').value;
  const description = document.getElementById('description').value;
  const language = document.getElementById('language').value;
  
  // Add new restaurant to the array
  restaurants.push({
    name,
    address,
    image,
    description,
    reviews: [],
    language
  });

  // Reset form after submission
  document.getElementById('restaurantForm').reset();

  // Re-render the restaurant directory with the new data
  renderDirectory();
});

// Initial render when the page loads
renderDirectory();
