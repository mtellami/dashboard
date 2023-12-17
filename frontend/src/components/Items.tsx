import { useSelect } from "../context/Select"
import { items, LIGHT } from '../utils/constants'

function Items() {
	const { selected, select, mode } = useSelect()

	return (
		<div className="grow mt-16 lg:pl-6">
			<h2 className={`hidden lg:block capitalize mb-12 text-2xl font-bold ${mode === LIGHT ? 'text-gray-800' : 'text-gray-100'}`}>dashboard</h2>
			<ul className="flex flex-col gap-6 lg:pl-4">
				{items.map((item, index) => {
					const Icon = item.icon
					const styles = 'flex items-center gap-4 text-xl p-4 cursor-pointer hover:bg-blue-400 ease-linear duration-150 rounded'
					const focus = mode === LIGHT ? '!text-gray-200' : '!text-gray-700'

					return (
						<li className={`${styles} ${mode !== LIGHT ? 'text-gray-100' : 'text-gray-800'} ${selected === item.name ? `bg-blue-400 ${focus}` : ''}`}
							key={index} onClick={() => select(item.name)}
							>
							<Icon style={{ fontSize: '2rem' }} />
							<h3 className="hidden lg:block capitalize">{item.name}</h3>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Items
