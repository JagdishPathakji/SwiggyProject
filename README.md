<h1>🍽️ Swiggy Clone – React + Redux Toolkit + TailwindCSS</h1>
<p>
  A responsive food delivery web application inspired by Swiggy, built with <strong>React</strong>, <strong>Redux Toolkit</strong>, and <strong>TailwindCSS</strong>.
  It uses a centralized Redux store to handle all API calls and state management, ensuring efficiency and scalability.
</p>

<p><strong>Live Demo:</strong> <a href="https://reactprojswiggyclone.netlify.app">reactprojswiggyclone.netlify.app</a></p>

<h2>🚀 Features</h2>
<ul>
  <li>Restaurant Listings – Browse a list of restaurants with images, cuisines, and ratings.</li>
  <li>Restaurant Menu Pages – View complete menus for each restaurant.</li>
  <li>Cart System – Add items to cart, view total bill, and manage quantities.</li>
  <li>Redux State Management – All API fetches and state updates handled in the Redux store via createAsyncThunk.</li>
  <li>Responsive UI – Fully functional on desktop, tablet, and mobile devices.</li>
  <li>Fast Navigation – Seamless routing using React Router.</li>
</ul>

<h2>🛠 Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React, Redux Toolkit, React Router</li>
  <li><strong>Styling:</strong> TailwindCSS</li>
  <li><strong>API:</strong> Official Swiggy data (via a proxy)</li>
  <li><strong>Hosting:</strong> Netlify</li>
</ul>

<h2>📄 Pages</h2>
<ul>
  <li>Home Page – Entry point with navigation.</li>
  <li>Food Delivery Page – Restaurant list fetched via Redux store.</li>
  <li>Restaurant Menu Page – Displays food items with prices and add-to-cart options.</li>
  <li>Cart Page – Shows selected items with total price.</li>
</ul>

<h2>⚠️ CORS Usage</h2>
<p>
  This site uses a public CORS proxy (<a href="https://cors-anywhere.herokuapp.com/">https://cors-anywhere.herokuapp.com/</a>) to fetch Swiggy API data.
  If menu items fail to load:
</p>
<ol>
  <li>Go to <a href="https://cors-anywhere.herokuapp.com/corsdemo">https://cors-anywhere.herokuapp.com/corsdemo</a></li>
  <li>Click "Request temporary access"</li>
  <li>Reload the website</li>
</ol>
