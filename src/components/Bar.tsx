import { Legend, Tooltip } from "chart.js"
import { BarElement, CategoryScale, Chart, LinearScale, Title } from "chart.js"
import { Bar } from 'react-chartjs-2'

Chart.register( 
	CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function Baar() {
	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
	const statis = [100, 190, 210, 200, 240, 280, 250]
	const data = {
		labels,
		datasets: [
			{
      	label: 'Orders',
      	data: statis,
      	backgroundColor: 'rgba(67,56,202,0.7)',
			}
		]
	}
	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Total Orders'
			}
		}
	}

	return (
		<div className="w-full bg-white rounded-lg shadow max-h-[24rem] flex justify-center">
			<Bar data={data} options={options} />
		</div>
	)
}

export default Baar
