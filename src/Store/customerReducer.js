const defaultState = {
	customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";
const SORT_CUSTOMERS = "SORT_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MANY_CUSTOMERS:
			return { ...state, customers: [...state.customers, ...action.customer] }
		case ADD_CUSTOMER:
			return { ...state, customers: [...state.customers, action.customer] }
		case REMOVE_CUSTOMERS:
			return {
				...state,
				customers: [
					...state.customers.filter(customer => customer.id !== action.customer)
				]
			};
		case SORT_CUSTOMERS:
			return {
				...state,
				customers: [
					...state.customers.sort((nameA, nameB) => {
						return nameA.name > nameB.name ? 1 : -1
					})
				]
			};

		default:
			return state;
	}
};

export const addCustomerAction = (customer) => ({ type: ADD_CUSTOMER, customer })
export const addManyCustomersAction = (customer) => ({ type: ADD_MANY_CUSTOMERS, customer })
export const removeCustomerAction = (customer) => ({ type: REMOVE_CUSTOMERS, customer })
export const sortCustomerAction = () => ({ type: SORT_CUSTOMERS })