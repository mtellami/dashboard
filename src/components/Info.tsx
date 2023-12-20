import { CgProfile } from "react-icons/cg"
import { useSelect } from "../context/Select"
import { DARK } from "../utils/constants"

function reform(n: number) {
	return n < 10 ? `0${n}` : n
}

function Info({ person }: {person: any}) {
	const { mode } = useSelect()

	const background = mode === DARK ? 'bg-gray-300' : 'bg-gray-50'
	const stat = [
		{color: 'text-green-600', key: 'shipped', value: reform(person.shipped)},
		{color: 'text-red-600', key: 'returned', value: reform(person.return)},
		{color: 'text-yellow-600', key: 'pending', value: reform(person.pending)},
	]

	return (
		<li className={`p-2 rounded shadow text-gray-700 ${background} w-[45%] lg:w-1/5 grow flex flex-col items-center`}>
			<div className="p-4 text-9xl">
				<CgProfile />
			</div>
			<h1 className="font-bold uppercase">{person.name}</h1>
			<h4 className="font-light text-xl capitalize tracking-wider my-1">{person.zone}</h4>
			<div className="my-10 flex justify-around w-full">
				{stat.map((item, index) => (
					<div key={index} className="flex flex-col items-center">
						<span className="font-semibold">{item.value}</span>
						<span className={`text-sm uppercase ${item.color}`}>{item.key}</span>
					</div>
				))}
			</div>
		</li>
	)
}

export default Info
