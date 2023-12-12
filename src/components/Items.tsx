import { BsBoxSeam } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { PiWarehouse } from "react-icons/pi"
import { MdOutlineAnalytics } from "react-icons/md"
import { useSelect } from "../context/Select"

const items = [
	{
		icon: BsBoxSeam,
		name: 'orders'
	},
	{
		icon: TbTruckDelivery,
		name: 'deliverers'
	},
	{
		icon: PiWarehouse,
		name: 'stock'
	},
	{
		icon: MdOutlineAnalytics,
		name: 'analytics'
	}
]

function Items() {
	const { selected, setSelected } = useSelect()

	return (
		<div className="grow mt-16 pl-6">
			<h2 className="capitalize mb-12 text-2xl font-bold text-gray-800">dashboard</h2>
			<ul className="flex flex-col gap-6 pl-4">
				{items.map((item, index) => {
					const Icon = item.icon
					const styles = 'flex items-center gap-4 text-xl p-4 cursor-pointer hover:bg-blue-400 ease-linear duration-150 relative rounded'
					const on = ['absolute', 'bg-blue-500', 'top=0', 'left-[-4rem]', 'w-4', 'h-full', 'rounded']

					return (
						<li className={`${styles} ${selected === item.name ? `bg-blue-400 text-gray-200 ${on.map(style => `before:${style}`).join(' ')}` : ''}`}
							key={index} onClick={() => setSelected(item.name)}
							>
							<Icon style={{ fontSize: '2rem' }} />
							<h3 className="capitalize">{item.name}</h3>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Items
