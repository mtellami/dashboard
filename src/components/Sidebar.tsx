import { RiSettingsFill } from "react-icons/ri"
import Items from "./Items"
import Toggle from 'react-toggle'

function Sidebar() {
	return (
		<aside className="basis-1/5 bg-gray-200 p-4 flex flex-col">
			<div className="basis-20 flex justify-center items-center gap-4">
				<RiSettingsFill style={{ fontSize: '3rem', color: 'rgb(55 65 81)' }} />
				<h1 className="text-3xl uppercase font-bold text-gray-700">ordery</h1>
			</div>
			<Items />
			<div className="basis-20 flex items-center justify-center gap-4">
				<h2 className="text-2xl">Dark mode</h2>
				<Toggle defaultChecked />
			</div>
		</aside>
	)
}

export default Sidebar
