import { useSelect } from "../context/Select"
import { pages } from '../utils/constants'

function Dashboard() {
	const { selected } = useSelect()

	const Page = pages.get(selected)
	return (
		<section className="grow">
			{Page && <Page />}
		</section>
	)
}

export default Dashboard
