import { BsBoxSeam } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { PiWarehouse } from "react-icons/pi"
import { MdOutlineAnalytics } from "react-icons/md"
import Orders from "../components/Orders"
import Deliverers from "../components/Deliverers"
import Stock from "../components/Stock"
import Analytics from "../components/Analytics"

export const items = [
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

export const pages = new Map([
	['orders', Orders],
	['deliverers', Deliverers],
	['stock', Stock],
	['analytics', Analytics]
])

export const DARK = 'dark'
export const LIGHT = 'light'
export const NAME = 'ordery'
