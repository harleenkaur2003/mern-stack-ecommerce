# MERN Stack E‑commerce

A full-stack e‑commerce web application built with the **MERN stack**—MongoDB, Express.js, React, and Node.js. It supports user authentication, product browsing, cart functionality, and admin controls with JWT and Bcrypt security.

## 🌐 Features

### User («Customer»)

* **Registration & Login** with secure password hashing (bcrypt) and JWT-based authentication.
* **Browse Products**: View product listings fetched from a MongoDB database.
* **Cart Functionality**: Add, update, and remove products in the cart.
* **Order Management**: Create orders, view past orders.

### Admin

* **Admin Login**: Role-based access to admin features.
* **Product Management**: Create, read, update, and delete products through secure REST APIs.
* **Order Management**: View and update order statuses.

### Backend

* **Secure REST APIs** using Express.js and MongoDB with Mongoose.
* **JWT Authentication & Authorization** middleware to protect routes.
* **Server-side Bcrypt** to hash and verify passwords.
* **Error Handling** & input validation to ensure stable behavior.

## 🚀 Tech Stack

* **Frontend**: React.js, Redux (or Context API), React Router.
* **Backend**: Node.js, Express.js.
* **Database**: MongoDB with Mongoose ORM.
* **Security**: JSON Web Token (JWT) + Bcrypt hashing.
* **Dev Tools**: Axios for API calls, Postman for API testing.

## ⚙️ Setup & Installation

### Prerequisites

* Node.js (v16+)
* MongoDB (Cloud or Local)

### Installation steps

```bash
# Clone the project
git clone https://github.com/harleenkaur2003/mern-stack-ecommerce.git
cd mern-stack-ecommerce

# Backend setup
cd server
npm install
# Create .env file:
# MONGO_URI=your_mongo_uri
# JWT_SECRET=your_jwt_secret
npm run dev

# Frontend setup
cd ../client
npm install
# Create .env file:
# REACT_APP_API_URL=http://localhost:5000/api
npm start
```


## 🛡 Security & Performance

* Passwords are hashed using **Bcrypt** before storage.
* **JWT** tokens provide secure session management.
* **Role-based access control** ensures only admins can manage products/orders.

## 🛠 Roadmap & Future Enhancements

*  **Payment integration** (Stripe, Razorpay, or PayPal)
*  **Dockerization** for containerized deployment
*  **AWS deployment** (ECS, EC2 or Lambda, RDS)
*  **Email notifications** for orders and status updates
*  **Additional user features** like password reset, wishlist
*  **Unit & integration tests** to improve reliability

## 🎯 Usage

1. Register a user or log in as admin.
2. Browse products & add items to cart.
3. Place an order and track its status.
4. (Future) Admins can access dashboard to manage the site.


---
