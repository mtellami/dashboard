import OrderStatus from "../src/types/OrderStatus"

export const orders = [
	{
		id: 123,
		createdAt: Date.now(),
		status: OrderStatus.Shipping,
		product: {
			id: 32,
			name: 'product 01',
			price: 53
		},
		customer: {
			name: 'john doe',
			address: '42 street Dubai',
			phone: '+135574372'
		}
	},
	{
		id: 521,
		createdAt: Date.now(),
		status: OrderStatus.Requested,
		product: {
			id: 11,
			name: 'product 02',
			price: 31
		},
		customer: {
			name: 'moad tell',
			address: '21 street Casablanca',
			phone: '+1933375143'
		}
	},
	{
		id: 871,
		createdAt: Date.now(),
		status: OrderStatus.Delivered,
		product: {
			id: 37,
			name: 'product 03',
			price: 45
		},
		customer: {
			name: 'hello worl',
			address: '93 street New York',
			phone: '+1932384122'
		}
	}
]
