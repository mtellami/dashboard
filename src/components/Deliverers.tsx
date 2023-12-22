import { deliverers } from '../../static/deliverers'
import Info from './Info'

function Deliverers() {

	return (
		<section className="p-4 text-2xl">
			<h1 className="capitalize mx-4 mb-8">deliverers</h1>
			<ul className='m-4 flex justify-between gap-4 overflow-auto max-h-[45rem] flex-wrap'>
				{deliverers.map((person, index) => (
					<Info key={index} person={person} />
				))}
			</ul>
		</section>
	)
}

export default Deliverers
