import Baar from './Bar'
import Doughnut from './Doughnut'
import Line from './Line'

function Analytics() {
	return (
		<section className="p-4 text-2xl">
			<h1 className="capitalize mb-8">analytics</h1>
			<div className="w-full flex flex-wrap gap-4">
				<Doughnut />
				<Line />
				<Baar />
			</div>
		</section>
	)
}

export default Analytics
