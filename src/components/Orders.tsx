import { useEffect, useState } from 'react'
import { orders } from '../../static/orders'
import { useSelect } from '../context/Select'
import { Cards, DARK } from '../utils/constants'
import Card from './Card'

function timestamp(n: number) {
	const now = new Date(n)

	const format = (n: number) => {
		return n < 10 ? `0${n}` : n;
	}

	const date = `${format(now.getDay())}-${format(now.getMonth())}-${now.getFullYear()}`
	// const time = `${format(now.getHours())}-${format(now.getMinutes())}`

	return date
}

function Orders() {
	const { mode } = useSelect()
	const [cards, setCards] = useState<any[]>([])

	useEffect(() => {
		// fetch orders from backend
		setCards(Cards(orders))
	}, [])

	const headers = ['order', 'date', 'price', 'status']

	const background = mode === DARK ? 'bg-gray-300' : 'bg-gray-50'

	return (
		<section className="px-8 font-bold">
			<ul className='flex items-center justify-between py-8'>
				{cards.map((type, index) => 
					<Card item={type} key={index} />)}
			</ul>
			<h1 className="capitalize mb-8 text-2xl">recent orders</h1>
			<ul className='flex flex-col gap-6'>
				<li className='flex items-center justify-between px-4 font-medium capitalize pr-8'>
					{headers.map((header, index) => (
						<span key={index}>{header}</span>
					))}
				</li>
				{orders.map((order, index) => (
					<li key={index} className={`flex items-center justify-between rounded-lg p-4 text-gray-700 capitalize ${background}`}>
						<span>#{order.id}</span>
						<span>{timestamp(order.createdAt)}</span>
						<span>{order.product.price}</span>
						<span className='w-20'>{order.status}</span>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Orders
