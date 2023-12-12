import { RiSettingsFill } from "react-icons/ri"
import { FaToggleOff } from "react-icons/fa6"
import Items from "./Items"

function Sidebar() {
	return (
		<section className="basis-1/5 bg-gray-200 p-4 flex flex-col">
			<div className="basis-20 flex justify-center items-center gap-4">
				<RiSettingsFill style={{ fontSize: '3rem', color: 'rgb(55 65 81)' }} />
				<h1 className="text-3xl uppercase font-bold text-gray-700">ordery</h1>
			</div>
			<Items />
			<div className="basis-20 flex items-center justify-center gap-4">
				<h2 className="text-2xl">Dark mode</h2>
				<FaToggleOff style={{ fontSize: '2rem' }} />
			</div>
		</section>
	)
}

export default Sidebar
