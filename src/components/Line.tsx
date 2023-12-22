import { Legend, Tooltip } from 'chart.js';
import { CategoryScale, Chart, LineElement, LinearScale, PointElement, Title } from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function Linee() {
	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
	const withdrawals = [10, 400, 540, 600, 711, 650, 700]
	const data = {
		labels,
		datasets: [
			{
				label: 'Total withdrawal $',
				data: withdrawals,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)'
			}
		]
	}

	return (
		<div className="grow bg-white rounded-lg shadow max-h-[22rem] flex justify-center p-2">
			<Line data={data} />
		</div>
	)
}

export default Linee
