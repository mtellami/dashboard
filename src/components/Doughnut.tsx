import { Chart, ArcElement, Legend } from 'chart.js'
import { Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

function Doughnuut () {
	const data = {
  labels: ['Returned', 'Not Confirmed', 'Delivered'],
  datasets: [
    {
      label: 'Orders stat',
      data: [2, 5, 11],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ]
    }
  ]
}

	return (
		<div className="w-1/3 bg-white rounded-lg shadow max-h-[22rem] flex justify-center p-2">
			<Doughnut data={data} />
		</div>
	)
}

export default Doughnuut
