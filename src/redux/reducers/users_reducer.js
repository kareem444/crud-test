import { ADD_USER, DELETE_USER, EDIT_USER } from "../types";

const INITIAL_STATE = {
    users: [
        {name : "lare" , age:4 , gender : "Male"}
    ],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] };
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map((user, index) =>
                    index == action.payload.userIndex ? action.payload.user : user
                ),
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user, index) => index != action.payload),
            };
        default:
            return state;
    }
};
