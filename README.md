🍽️ Swiggy Clone – React + Redux Toolkit + TailwindCSS
A responsive food delivery web application inspired by Swiggy, built with React, Redux Toolkit, and TailwindCSS.
It uses a centralized Redux store to handle all API calls and state management, ensuring efficiency and scalability.

Live Demo: reactprojswiggyclone.netlify.app

🚀 Features
Restaurant Listings – Browse a list of restaurants with images, cuisines, and ratings.
Restaurant Menu Pages – View complete menus for each restaurant.
Cart System – Add items to cart, view total bill, and manage quantities.
Redux State Management – All API fetches and state updates handled in the Redux store via createAsyncThunk.
Responsive UI – Fully functional on desktop, tablet, and mobile devices.
Fast Navigation – Seamless routing using React Router.

🛠 Tech Stack
Frontend: React, Redux Toolkit, React Router
Styling: TailwindCSS
API: Official Swiggy data (via a proxy)
Hosting: Netlify

📄 Pages
Home Page – Entry point with navigation.
Food Delivery Page – Restaurant list fetched via Redux store.
Restaurant Menu Page – Displays food items with prices and add-to-cart options.
Cart Page – Shows selected items with total price.

⚠️ CORS Usage
This site uses a public CORS proxy (https://cors-anywhere.herokuapp.com/) to fetch Swiggy API data.
If menu items fail to load:
Go to https://cors-anywhere.herokuapp.com/corsdemo
Click "Request temporary access"
Reload the website
