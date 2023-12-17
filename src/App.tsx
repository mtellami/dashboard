import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
import Popup from "./components/popup/popup"
import { useSelect } from "./context/Select"

function App() {
	const { open } = useSelect()

  return (
    <div className="flex h-screen overflow-hidden transition">
			{open && <Popup />}
			<Sidebar />
			<Dashboard />
    </div>
  )
}

export default App
