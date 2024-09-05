// fonction réductrice appelée par le hook useReducer lors du dispatch d'une action

// contient la STATE_INITIAL au premier appel puis le nouveau state
function userReducer(state, action) {
	switch (action.type) {
		case "LOGIN":
            // si dispatch type:"LOGIN" alors retourne un objet avec isLogged à true et le username passé en payload
			return {
				isLogged: true,
				username: action.payload,
			};
		case "LOGOUT":
			return {
				isLogged: false,
				username: "",
			};
            
		default:
			console.log("Action inconnue");
			return state;
	}
}

export default userReducer;
