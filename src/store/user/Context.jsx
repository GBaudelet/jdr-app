import { createContext, useReducer } from "react";
import userReducer from "./reducer";

// Création du contexte qui va contenir les données de l'utilisateur
// possède un composant Provider qui va fournir les données à ses enfants
// qui sera retournée depuis le composant Provider plus bas ici
const Context = createContext();
// création de l'état initial lié à l'utilisateur
const INITIAL_STATE = {
	isLogged: false,
	username: "",
};

// children est un prop qui contient tous les composants enfants de ce composant Provider (ici App) (voir main.jsx)

function Provider(props) {
    // utilisation du hook useReducer pour gérer l'état de l'utilisateur
    // user est le state
    // dispatch est la fonction qui permet de modifier le state
    // dispatch est une fonction qui prend en paramètre un objet action
    // action est un objet qui contient un type et un payload
    // userReducer est la fonction appelée par dispatch pour modifier le state 
	const [user, dispatch] = useReducer(userReducer, INITIAL_STATE);

    // fonction qui permet de connecter un utilisateur 
    // sera appelé lors du submit formulaire (ici dans le composant Auth)
	function login(username) {
		dispatch({ type: "LOGIN", payload: username });
	}

    // fonction qui permet de déconnecter un utilisateur 
    // sera appelé lors du click sur le bouton logout (ici dans le composant Header
    function logout(){
        dispatch({type: "LOGOUT"});
    }

    // on retourne le contexte qui contient les données de l'utilisateur
    // et les fonctions pour les modifier
    // Provider étant un composant crée par createContext
	return (
		<Context.Provider
			value={{
				user,
				login,
				logout,
			}}
		>
        
			{props.children}
		</Context.Provider>
	);
}
//export de l'objet de contexte qui contient les données de l'utilisateur
// voir ici le composant 'Header' qui utilise ce contexte et 'Auth'
export { Context };

// export du composant Provider
export default Provider;
