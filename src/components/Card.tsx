function Card({ item }: { item: any }) {
	const Icon = item.icon

	return (
		<li className={`${item.background} lg:basis-[23%] grow p-8 rounded-lg text-gray-700 flex items-center justify-between`}>
			<Icon className="text-5xl" />
			<div className="flex flex-col items-center">
				<h1 className="font-bold text-2xl">{item.count < 10 ? `0${item.count}` : item.count}</h1>
				<p className="font-medium capitalize">total {item.title} orders</p>
			</div>
		</li>
	)
}

export default Card
