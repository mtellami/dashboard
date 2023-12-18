import { useSelect } from "../context/Select"
import { pages, DARK } from '../utils/constants'
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Dashboard() {
	const { selected, mode } = useSelect()

	const Page = pages.get(selected)
	const bg = mode === DARK ? 'bg-gray-800' : 'bg-gray-100'
	const text = mode === DARK ? 'text-gray-200' : 'text-gray-800'
	const search = mode === DARK ? 'bg-gray-300 placeholder:text-gray-500 text-gray-900' : ''

	return (
		<section className={`basis-4/5 ${bg} ${text} flex flex-col`}>
			<header className="basis-1/12 p-12 flex items-center justify-between">
				<div className="relative basis-1/3">
					<input type="text" placeholder="Search" className={`shadow focus:outline-0 rounded-full py-3 px-5 w-full ${search}`} />
					<IoMdSearch className="absolute text-2xl top-3 right-4 text-gray-700 cursor-pointer" />
				</div>
				<div className="flex items-center gap-4">
					<h2 className="text-xl font-bold capitalize">administrator</h2>
					<div className={`${mode === DARK ? 'bg-gray-900' : 'bg-gray-50'}  p-3 text-3xl rounded-full shadow`} >
						<FaUser className="cursor-pointer"/>
					</div>
				</div>
			</header>
			<div className="grow">
				{Page && <Page />}
			</div>
		</section>
	)
}

export default Dashboard
