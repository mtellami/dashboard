import { RiSettingsFill } from "react-icons/ri"
import Items from "./Items"
import Toggle from "./Toggle"
import { useSelect } from "../context/Select"
import { LIGHT, NAME } from '../utils/constants'

function Sidebar() {
	const { mode } = useSelect()

	const bg = mode === LIGHT ? 'rgb(55 65 81)' : 'rgb(229 231 235)'
	return (
		<aside className={`basis-1/12 lg:basis-1/5 ${mode === LIGHT ? 'bg-gray-200' : 'bg-gray-700'} p-4 flex flex-col`}>
			<div className="basis-20 flex justify-center items-center gap-4 cursor-pointer">
				<RiSettingsFill style={{ fontSize: '3rem', color: bg }} />
				<h1 className={`text-3xl uppercase font-bold ${mode === LIGHT ? 'text-gray-700' : 'text-gray-200'} hidden lg:block`}>
					{NAME}
				</h1>
			</div>
			<Items />
			<div className="basis-20 flex items-center justify-center gap-4">
				<Toggle />
			</div>
		</aside>
	)
}

export default Sidebar
