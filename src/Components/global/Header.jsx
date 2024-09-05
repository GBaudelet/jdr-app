import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/user/Context";

function Header() {
  // pour récupérer les données de l'utilisateur on utilise le hook useContext en lui passant le contexte à utiliser ici il correspond au contexte de l'utilisateur
  const state = useContext(Context);
  // state contient l'objet de contexte de l'utilisateur retourné par le contexte dans le prop value du composant Provider ( voir return du Composant Context.jsx)
  // {user :{isLogged: false,username: ""}, login, logout};
  return (
    <header>
      <h1>
        Hello, {state.user.username ? state.user.username : "Guest"} !!! 😍😍😍
      </h1>
      <nav>
        <Link to={"/"}>HOME</Link>
        {state.user.isLogged ? (
          <>
            <Link to={"/dashboard"}>DASHBOARD</Link>
            <button onClick={() => state.logout()}>logout</button>
          </>
        ) : (
          <Link to={"/auth"}>LOGIN</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
