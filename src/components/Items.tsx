import { BsBoxSeam } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { PiWarehouse } from "react-icons/pi"
import { MdOutlineAnalytics } from "react-icons/md"

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
	return (
		<div className="grow mt-8">
			<h2 className="capitalize mb-8">dashboard</h2>
			<ul className="flex flex-col gap-8">
				{items.map((item, index) => {
					const Icon = item.icon
					return (
						<li className="flex items-center" key={index}>
							<Icon />
							<h3>{item.name}</h3>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Items
