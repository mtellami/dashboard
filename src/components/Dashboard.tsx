import { useSelect } from "../context/Select"

function Dashboard() {
	const { selected } = useSelect()

	return (
		<section>
			<h1>{selected}</h1>
		</section>
	)
}

export default Dashboard
