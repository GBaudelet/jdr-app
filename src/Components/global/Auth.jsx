import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/user/Context";

function Auth() {
  const state = useContext(Context);
  console.log(state);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [msg, setMsg] = useState(null);

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    console.table({ username, password });
    if (username.length <= 2) return setMsg("Nom trop court");
    // si tout va bien
    // setMsg("Vous êtes connecté"); // on affiche un message
    state.login(username);
    navigate("/");
  }

  return (
    <main>
      {msg && <p>{msg}</p>}

      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Auth;
