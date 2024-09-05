import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import UserProvider from "./store/user/Context";

import App from "./App.jsx";
import "./assets/scss/index.css";

//  UserProvider est un composant qui va fournir le contexte de l'utilisateur à ses enfants (ici App)
createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);
