// Array to store restaurant data
const restaurants = [
  {
    name: "Hops n Grains",
    address: "Sector 9, Panchkula",
    image: "https://via.placeholder.com/400x250?text=Hops+n+Grains",
    description: "A renowned microbrewery offering freshly brewed beers and a diverse menu.",
    reviews: []
  },
  {
    name: "JB’s Kitchen",
    address: "Phase 5, Mohali",
    image: "https://via.placeholder.com/400x250?text=JB%27s+Kitchen",
    description: "Known for its North Indian and Mughlai dishes, this restaurant is ideal for family outings.",
    reviews: []
  },
  {
    name: "Sagar Ratna",
    address: "Sector 9, Panchkula",
    image: "https://via.placeholder.com/400x250?text=Sagar+Ratna",
    description: "Specializes in authentic South Indian cuisine, perfect for dosa and sambhar lovers.",
    reviews: []
  },
  {
    name: "The Escape",
    address: "Sector 5, Panchkula",
    image: "https://via.placeholder.com/400x250?text=The+Escape",
    description: "A rooftop bar and restaurant offering a lively ambiance with live music.",
    reviews: []
  },
  {
    name: "Beige Cafe and Bakery",
    address: "Sector 5, Panchkula",
    image: "https://via.placeholder.com/400x250?text=Beige+Cafe+and+Bakery",
    description: "A cozy cafe known for its bakery items and a variety of beverages.",
    reviews: []
  },
  {
    name: "Rozana – Indian Kitchen & Bar",
    address: "MDC Sector 5, Panchkula",
    image: "https://via.placeholder.com/400x250?text=Rozana",
    description: "An open-air restaurant specializing in Mughlai, Bihari, and Assamese cuisines.",
    reviews: []
  },
  {
    name: "Inari",
    address: "Sector 5, Panchkula",
    image: "https://via.placeholder.com/400x250?text=Inari",
    description: "Serves a variety of cuisines including North Indian, Mughlai, and desserts in a spacious setting.",
    reviews: []
  },
  {
    name: "High Note Rooftop Lounge & Bar",
    address: "Sector 5, Panchkula",
    image: "https://via.placeholder.com/400x250?text=High+Note+Rooftop",
    description: "Features an aesthetically pleasing rooftop seating with a variety of Asian dishes.",
    reviews: []
  }
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

      <div class="review-section" id="reviews-${index}">
        <h3>Reviews</h3>
        <div class="review-input">
          <textarea id="review-input-${index}" placeholder="Write a review..."></textarea>
          <button onclick="addReview(${index})">Submit Review</button>
        </div>
        <div id="reviews-list-${index}">
          <!-- Reviews will be dynamically listed here -->
        </div>
      </div>
    `;

    directory.appendChild(restaurantDiv);
    renderReviews(index);
  });
}

// Function to add a review
function addReview(restaurantIndex) {
  const reviewInput = document.getElementById(`review-input-${restaurantIndex}`).value;
  if (reviewInput) {
    restaurants[restaurantIndex].reviews.push(reviewInput);
    document.getElementById(`review-input-${restaurantIndex}`).value = ''; // Clear the review input
    renderReviews(restaurantIndex);
  } else {
    alert("Please enter a review.");
  }
}

// Function to render reviews for a restaurant
function renderReviews(restaurantIndex) {
  const reviewsList = document.getElementById(`reviews-list-${restaurantIndex}`);
  reviewsList.innerHTML = '';

  restaurants[restaurantIndex].reviews.forEach((review) => {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = `<p>${review}</p>`;
    reviewsList.appendChild(reviewDiv);
  });
}

// Initial render of the directory
renderDirectory();
