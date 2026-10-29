# Paradise Nursery Shopping Application
## Final Project: Developing Front-End Apps with React (IBM / Coursera)

A responsive, dynamic e-commerce shopping cart web application for **Paradise Nursery** — an online houseplant shop where *"Where Green Meets Serenity"*. Built using **React**, **Redux Toolkit**, **Vite**, and **Vanilla CSS**.

---

## 📋 Coursera Assessment Submission URLs

Use the following public GitHub URLs to submit each question for the final project assessment:

| Task # | File Name | Points | Coursera Question & Requirement | Submitted GitHub URL |
|:---:|:---|:---:|:---|:---|
| **Task 1** | `README.md` | 2 pts | Submit the GitHub URL of the README.md file containing the project name details. | `https://github.com/pranavss73/e-plantShopping/blob/main/README.md` |
| **Task 2** | `AboutUs.jsx` | 1 pt | Submit the GitHub URL of AboutUs.jsx file, which includes details about the company. | `https://github.com/pranavss73/e-plantShopping/blob/main/src/AboutUs.jsx` |
| **Task 3** | `App.css` | 1 pt | Submit the GitHub URL of the App.css file, which includes the code implementing the background image for the Paradise Nursery landing page. | `https://github.com/pranavss73/e-plantShopping/blob/main/src/App.css` |
| **Task 4** | `App.jsx` | 3 pts | Submit the GitHub URL of the App.jsx file, which includes the Paradise Nursery landing page with the company name and a “Get Started” button. | `https://github.com/pranavss73/e-plantShopping/blob/main/src/App.jsx` |
| **Task 5** | `CartSlice.jsx` | 4 pts | Submit the GitHub URL of the CartSlice.jsx file, which includes the code implementing the Redux slice for the shopping cart. | `https://github.com/pranavss73/e-plantShopping/blob/main/src/CartSlice.jsx` |
| **Task 6** | `ProductList.jsx` | 16 pts | Submit the GitHub URL of your ProductList.jsx file (3 categories, 6 plants each, Add to Cart with disabled state, dynamic navbar, cart item counter badge). | `https://github.com/pranavss73/e-plantShopping/blob/main/src/ProductList.jsx` |
| **Task 7** | `CartItem.jsx` | 23 pts | Submit the GitHub URL of your CartItem.jsx file displaying the Shopping Cart page (thumbnails, unit price, +, -, delete, total per plant, grand total, checkout alert, continue shopping). | `https://github.com/pranavss73/e-plantShopping/blob/main/src/CartItem.jsx` |

---

## 🌿 Project Overview & Features

### 1. Landing Page (`App.jsx`, `AboutUs.jsx`, `App.css`)
- **Branding**: Showcases the brand name **Paradise Nursery** and tagline *"Where Green Meets Serenity"*.
- **Greenhouse Background**: High-resolution greenhouse image (`https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg`) with backdrop blur and overlay.
- **About Us Section**: Details company mission, background, and dedication to indoor plants and wellness.
- **Get Started Button**: Transitions user smoothly to the plant catalog view.

### 2. Product Catalog (`ProductList.jsx`, `ProductList.css`)
- **3 Houseplant Categories (6+ plants each, 18 total)**:
  1. *Air Purifying Plants*: Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera.
  2. *Aromatic Fragrant Plants*: Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Sweet Basil.
  3. *Low Maintenance Plants*: ZZ Plant, Golden Pothos, Cast Iron Plant, Jade Plant, Chinese Evergreen, Succulent Trio.
- **Add to Cart Logic**:
  - Adds plant to Redux shopping cart state.
  - Automatically disables button and updates label to `✓ Added to Cart`.
  - Live cart icon in navbar increments total quantity dynamically.
- **Persistent Navbar**:
  - Appears across both Product Listing and Cart pages.
  - Navigation links to *Home*, *Plants*, and *Cart* with dynamic quantity badge.

### 3. Shopping Cart (`CartItem.jsx`, `CartSlice.jsx`, `CartItem.css`)
- **Plant Breakdown**: Shows image thumbnail, name, unit price, quantity, and total price per plant.
- **Quantity Adjusters**: `+` and `-` buttons to increase or decrease quantities; automatically removes when reduced to 0.
- **Delete Button**: Removes an item completely from the cart.
- **Total Cart Amount**: Dynamically calculated across all cart items.
- **Continue Shopping**: Seamlessly routes back to product catalog.
- **Checkout Button**: Displays "Coming Soon" notification alert for future payment gateway integration.

---

## 📁 Repository Structure

```text
project 5/
├── dist/                   # Production build bundle
├── public/                 # Static assets
├── src/
│   ├── AboutUs.css         # Styling for AboutUs component
│   ├── AboutUs.jsx         # Company details and background (Task 2)
│   ├── App.css             # Background image & landing page styles (Task 3)
│   ├── App.jsx             # Main landing page & view router (Task 4)
│   ├── CartItem.css        # Styling for Cart view
│   ├── CartItem.jsx        # Shopping cart view & controls (Task 7)
│   ├── CartSlice.jsx       # Redux Toolkit slice for shopping cart (Task 5)
│   ├── ProductList.css     # Styling for catalog & persistent navbar
│   ├── ProductList.jsx     # Houseplant catalog grouped by 3 categories (Task 6)
│   ├── index.css           # Global typography & layout styles
│   ├── main.jsx            # Entry point with Redux Provider
│   └── store.js            # Redux store configuration
├── .gitignore              # Ignored files (node_modules, dist)
├── index.html              # HTML5 entry with Google Fonts
├── package.json            # Project dependencies & scripts
├── README.md               # Project documentation & grading submission guide (Task 1)
└── vite.config.js          # Vite configuration
```

---

## 🚀 Running the Project Locally

```bash
# Navigate to the project directory
cd "project 5"

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 🛠️ Technology Stack
- **React 18**
- **Redux Toolkit & React-Redux**
- **Vite 5**
- **Vanilla CSS (Flexbox & CSS Grid)**
