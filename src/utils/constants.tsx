import { BsBoxSeam } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { PiWarehouse } from "react-icons/pi"
import { MdOutlineAnalytics } from "react-icons/md"
import Orders from "../components/Orders"
import Deliverers from "../components/Deliverers"
import Stock from "../components/Stock"
import Analytics from "../components/Analytics"
import { MdOutlinePendingActions } from "react-icons/md"
import { GiConfirmed } from "react-icons/gi"
import { LiaShippingFastSolid } from "react-icons/lia"
import OrderStatus from '../types/OrderStatus'
import { MdOutlinePending } from "react-icons/md"

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

export function Cards(orders: any) {
	return [
		{
			icon: MdOutlinePendingActions,
			count: orders.filter((order: any) => order.status === OrderStatus.Requested).length,
			background: 'bg-red-100',
			title: 'requested'
		},
		{
			icon: MdOutlinePending,
			count: orders.filter((order: any) => order.status === OrderStatus.Confirmed).length,
			background: 'bg-yellow-100',
			title: 'confirmed'
		},
		{
			icon: LiaShippingFastSolid,
			count: orders.filter((order: any) => order.status === OrderStatus.Shipping).length,
			background: 'bg-blue-100',
			title: 'shipped'
		},
		{
			icon: GiConfirmed,
			count: orders.filter((order: any) => order.status === OrderStatus.Delivered).length,
			background: 'bg-green-100',
			title: 'delivered'
		}
	]
}

export const pages = new Map([
	['orders', Orders],
	['deliverers', Deliverers],
	['stock', Stock],
	['analytics', Analytics]
])

export const DARK = 'dark'
export const LIGHT = 'light'
export const NAME = 'ordery'
