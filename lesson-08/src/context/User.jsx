// import { useReducer } from 'react';
import { useContext, createContext } from 'react';
import { useReducerWithThunk } from '../hooks';
import { LogIn, LogOut } from '../api';

export const Auth = createContext({});

const initialState = {
	token: null,
	loading: false,
};

// enum
const ActionType = Object.freeze({
	LOG_IN: 'LOG_IN',
	LOG_OUT: 'LOG_OUT',
	LOADING: 'LOADING',
});

const reducer = (state, action) => {
	switch (action.type) {
		case ActionType.LOG_IN:
			return { ...state, loading: false, token: action.payload };
		case ActionType.LOG_OUT:
			return { ...state, loading: false, token: action.payload };
		case ActionType.LOADING:
			return { ...state, loading: action.payload };
		default:
			return state;
	}
};

const action = {
	login: (payload) => async (dispatch) => {
		LogIn(payload)
			.then((token) => {
				dispatch({ type: ActionType.LOG_IN, payload: token });
			})
			.finally(() => {
				dispatch({ type: ActionType.LOADING, payload: false });
			});
	},
	logout: () => async (dispatch) => {
		LogOut()
			.then(() => {
				dispatch({ type: ActionType.LOG_OUT, payload: null });
			})
			.finally(() => {
				dispatch({ type: ActionType.LOADING, payload: false });
			});
	},
	loading: (payload) => ({ type: ActionType.LOADING, payload }),
};

// provider
export const AuthContext = ({ children }) => {
	const [state, dispatch] = useReducerWithThunk(reducer, initialState);

	return (
		<Auth.Provider value={{ state, action, dispatch }}>{children}</Auth.Provider>
	);
};

export const useAuth = () => useContext(Auth);
