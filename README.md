# <img width="30px" src="./src/assets/favicon.png"/>Gadget Heaven Zone✨

## Project Name: Gadget Heaven Zone

### A brief description: 
- The Gadget Heaven Zone project is an interactive, single-page e-commerce application designed to showcase a variety of electronic gadgets and simplify the shopping experience for users. Built with React, this project leverages React Router for smooth, multi-page navigation without page reloads, and employs localStorage as the main tool for data management, ensuring that users' shopping carts and preferences are preserved across sessions. The Context API is utilized specifically to update and display the cart item count in the navbar in real time, enhancing the usability and interactivity of the interface.

---

### React fundamental concepts used in this project:

- Components: The building blocks of this project, breaking down the UI into reusable parts like NavBar, ProductCard, Cart, and Dashboard.
-  Props: Used to pass data and configuration from parent components to child components, such as passing product details to ProductCard or cart data to CartItem.
-  State: Used to manage data within components, particularly for dynamic content like cart items, product lists, and filters. React’s useState hook is likely used here.
-  React Router: Enables navigation across different pages (e.g., home, products, cart) without reloading the page, giving the application an SPA (Single Page Application) feel.
-  Context API: Used for managing global state, specifically for sharing the cart count in the navbar across multiple components, ensuring consistency in displaying the cart item number.
-  Data Persistence with localStorage: Storing data persistently in localStorage, enabling users to retain their cart items and preferences across sessions.

### What I've used for handling and managing data (context API/local storage):

- In this project, I've opted for localStorage as the primary tool for handling and managing data. This choice ensures that key data, like cart items and their details, persist across page reloads and even browser sessions, allowing users to keep their selections intact without needing to log in again or reselect items.
- Context API is also utilized, but its role is specifically for displaying the cart item count in the navbar, ensuring real-time updates whenever items are added or removed. This approach maintains efficiency by keeping only essential data in memory while relying on localStorage for more extensive data handling.


### 5 Main Key Features:

- Multi-Page Navigation with React Router: Use React Router to set up multi-page navigation. Create routes for pages like "Home," "Products," "Cart," and "Profile," enhancing user navigation without reloading the page.
- Active Links with React NavLink: Use NavLink to highlight the active page in the navigation bar, giving users a clear indication of their current page. This will provide a smooth and visually engaging experience.
- Dynamic Data Visualization with React Recharts: Integrate Recharts to display sales statistics, product popularity, or user demographics through visual charts. The charts could be used on the dashboard or analytics pages to give users or admins insights at a glance.
- Product Details and Cart Pages via Route Parameters: Set up routes with parameters for products (e.g., /product/:id) and cart items, enabling users to view specific details for each product without relying on location. This can simplify navigation and URL management for detailed views.
- Category-Based Product Display: Use nested routes to show products based on categories (e.g., /products/laptops, /products/phones). This feature can let users easily navigate between categories using a dynamic and structured routing setup.

##  Live Link: 
### 1. Netlify : [Gadget Heaven Zone](https://gadget-heaven-zone-rrishiddh.netlify.app/)
### 2. Surge : [Gadget Heaven Zone](https://gadget-heaven-zone-rrishiddh.surge.sh/)

### Assignment instruction Link : [ProgrammingHero_B10A8](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)




<hr/>