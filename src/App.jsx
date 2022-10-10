import './App.css';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction, sortCustomerAction } from './Store/customerReducer';
import { addCashAction, getCashAction } from './Store/cashReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
	const dispatch = useDispatch();
	const cash = useSelector(state => state.cashReducer.cash);
	const customers = useSelector(state => state.customerReducer.customers);

	const addCash = (cash) => {
		dispatch(addCashAction(cash));
	}

	const getCash = (cash) => {
		dispatch(getCashAction(cash));
	}

	const addCustomer = (name) => {
		const customer = {
			id: v4(),
			name
		}
		dispatch(addCustomerAction(customer));
	}
	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id));
	}

	const sortCustomers = () => {
		dispatch(sortCustomerAction());
	}

	return (
		<div className="app">
			<div style={{ fontSize: '3rem', textAlign: 'center' }}>{cash}</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<button onClick={() => addCash(+prompt())}>Пополнить счет</button>
				<button onClick={() => getCash(+prompt())}>Снять со счета</button>
				<button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
				<button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
				<button onClick={() => sortCustomers(customers)}>Сортиировать</button>
				{/* <button onClick={() => removeCustomer(prompt())}>Удалить клиента</button> */}
			</div>
			{customers.length > 0 ?
				<div style={{ textAlign: 'center' }}>
					{customers.map(customer =>
						<div
							style={{ backgroundColor: 'lightblue', padding: 10, marginTop: 10 }}
							key={customer.id}
							onClick={() => removeCustomer(customer)}>
							{customer.name}</div>
					)}
				</div>
				:
				<div style={{ fontSize: '2rem', marginTop: 20, textAlign: 'center' }}>
					Клиентов нет!
				</div>
			}
		</div>
	)
}

export default App;