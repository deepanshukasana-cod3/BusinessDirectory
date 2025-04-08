// Array to store restaurant data including reviews and ratings
const restaurants = [
  {
    name: "Hops n Grains",
    address: "Sector 9, Panchkula",
    image: "https://via.placeholder.com/400x250?text=Hops+n+Grains",
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
    image: "https://via.placeholder.com/400x250?text=JB%27s+Kitchen",
    description: "Known for its North Indian and Mughlai dishes, this restaurant is ideal for family outings.",
    reviews: [
      { rating: 4, text: "Amazing food! The dal makhani was superb." }
    ],
    language: "Hindi"
  }
  // Add more restaurant entries here as needed
];

// Function to render the restaurant directory
function renderDirectory() {
  const directory = document.getElementById('restaurantDirectory');
  directory.innerHTML = '';

  restaurants.forEach((restaurant, index) => {
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant');

    restaurantDiv.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}">
      <h2>${restaurant.name}</h2>
      <p><strong>Address:</strong> ${restaurant.address}</p>
      <p><strong>Description:</strong> ${restaurant.description}</p>

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
  
  restaurants.push({
    name,
    address,
    image,
    description,
    reviews: [],
    language
  });

  document.getElementById('restaurantForm').reset();
  renderDirectory();
});

// Initial render
renderDirectory();
