# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



a{
  text-decoration: none;
  color: white;
}

#navbar a.active {
  background-color: #04AA6D;
  color: rgb(24, 22, 22);
}

#navbar a:hover {
  background-color: #d20c0c;
  color: black;
}

 .search-results:hover {
  background-color: #d20c0c;
  color: white;
}


#navbar a {
  color: white;
  padding: 4px 10px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
}

header {
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
}

#check1{
  display: none;

}

header .logo{

  color: white;
  margin-left: 50px;
  text-transform: uppercase;
}

.search-box{
  
  position: relative;
}

.search-results-container{
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgb(19, 3, 3);

  border-top: none;


}


/* Footer Styles */
footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.productImage{
	display: block;
	border: 0;
	width: 100%;
	height: auto;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 0 1 24%;
  box-sizing: border-box;
  margin: 1rem .25em;
}
.cardContent {
  padding: 20px;
}

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.shopping-cart-icon {
  position: relative;
  display: inline-block;
}

.item-count {
  position: absolute;
  top: -11px;
  right: -12px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 5px;
  font-size: 10px;
}

.closeCart{
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
  align-self: flex-end;
}

.navbar-icon{
  display: flex;
  justify-content: space-between;
}

.cartTopSection{
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-bottom: 10px;
}
.cartTopSection h2{
  color: white;
  padding: 5px;
  text-align: center;
  margin: 0;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Ensure the modal appears above other content */
  color: black;
  max-height: 80%;
  overflow-y: auto;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 14, 14, 0.5); /* Semi-transparent background */
  z-index: 999; /* Ensure the overlay is behind the modal */
}

.linkToRedirect *{
  text-decoration: none;
  color: rgb(251, 114, 114);
  font: 1em sans-serif;
}
.cartContainer{
  padding: 20px;
}
.cardContainerForProduct{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}



/* cart */
.cart-container {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  background-color: #f9f9f9;

}
.cartProducts{
  display: flex;
  gap: 10px;

}
.thumbnail {
  width: 100px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 10px;
  display: block;
}
/* Style for the cart total */
.cart-container p {
  font-size: 18px;
  margin-bottom: 10px;
}
.cartButtons {
  margin-top: 10px;
  display: flex;
  flex-direction: column;

}
/* Style for the buttons */
.checkout, .continue-shopping, .clear-cart {
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: #007bff;
  margin-top: 5px;
  color: #fff;
}
.clear-cart{
  background-color: #d20c0c;
}
/* contact form */
.contact-form {
  max-width: 600px;
  margin: 50px auto;
  background-color: #4a4a4ae1;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group textarea {
  height: 150px;
}

.form-group input[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

/* search */
.input-wrapper{
  display: flex;
 align-items: center;
 box-shadow: 0px 0px 8px white;
 padding: 0 15px;
 border-radius: 10px;
 height: 2rem;
 width: 75%;
 background-color: white;
  margin: 10px 0;
}
.search-input {
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  background-color: transparent;
  margin-left: 5px;
}
.search-input:focus {
  outline: none;
}

.search-icon {
  color: royalblue;
}
/* 
Loaders */

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; 
}

.dot {
  width: 20px;
  height: 20px;
  background-color: #f8f1f1; 
  border-radius: 50%;
  margin: 0 5px; 
  animation: bounce 0.6s infinite alternate; /* adjust animation speed if needed */
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px); /* adjust bounce distance as needed */
  }
}

.dot:nth-child(2) {
  animation-delay: 0.1s; /* adjust delay between each dot's animation */
}

.dot:nth-child(3) {
  animation-delay: 0.2s; /* adjust delay between each dot's animation */
}
.dot:nth-child(4) {
  animation-delay: 0.3s; /* adjust delay between each dot's animation */
}

.quantity-box{
  display: flex;;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

/* checkout page */

.checkout-container {
  max-width: 800px;
  padding: 20px;
}
.checkout-h1 {
  text-align: center;
}
.checkout-heading {
  margin-top: 20px;
}
.checkout-form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.checkout-button{
  align-self: center;
  text-align: center;
  max-width: 100px;

}
.checkout-form label {
  display: block;
  margin-bottom: 5px;
}
.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="checkbox"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.form-group-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.form-group-checkbox input[type="checkbox"] {
  margin-right: 10px;
}
.form-group-checkbox label {
  margin-bottom: 0;
}
.checkout-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
  padding: 30px 0;
}
.form-errors{
  color: red;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;

}

@media (min-width: 768px) {
  .checkout-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  .checkout-container > div {
      flex-basis: 48%;
  }
}


@media (max-width: 768px) {
  .card {
    width: calc(50% - 40px);
  }
}

@media (max-width: 160px) {
  .card {
    width: calc(100% - 40px);
  }
}