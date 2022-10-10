import { addManyCustomersAction } from "../Store/customerReducer"

export const fetchCustomers = () => {
	return dispatch => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => dispatch(addManyCustomersAction(json)));
	}
}