# 📋 Cadastro App – Frontend React + Tailwind + JWT Auth

A modern and responsive frontend interface built in **React** with **TailwindCSS**, connected to a backend API with secure **JWT authentication**. It features protected/private routes, clean architecture, and seamless communication with the backend using **Axios**.

## 🧠 Tech Stack

- ⚛️ **React** – Component-based UI
- 🔐 **JWT** – JSON Web Token for secure session handling
- 💨 **TailwindCSS** – Utility-first CSS framework
- 📡 **Axios** – API communication
- 🌐 **React Router** – Public and private route handling

---

## 🛠️ Features

- ✅ Secure login system with JWT
- ✅ Protected routes using context and token validation
- ✅ Axios integration with environment-based `baseURL`
- ✅ Clean UI built with TailwindCSS
- ✅ Responsive design, mobile-first
- ✅ Modular code structure

---

## 🗂️ Project Structure

/src
├── components/ # UI elements and layout
├── context/ # Auth context provider
├── pages/ # Login, Dashboard, etc.
├── services/ # Axios config and API calls
├── App.jsx # Main app logic and routes
├── main.jsx # Entry point
└── index.css # Tailwind base styles

---

## ⚙️ Getting Started

```bash
git clone https://github.com/Duartois/sistema-de-cadastro.git
cd sistema-de-cadastro
npm install
npm run dev
The app will run on http://localhost:5173 (or your Vite config port).
```
🔒 JWT Authentication Example

```js
const login = async (email, senha) => {
  try {
    const response = await api.post('/login', { email, senha });
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    console.error('Login failed', error);
  }
};
```

## 🌍 Use Cases

Admin panels for internal tools
User registration portals
Any app requiring secure login and API communication

## 📬 Contact

GitHub: github.com/Duartois
LinkedIn: linkedin.com/in/matheusduartegoncalves
Email: your.email@example.com
