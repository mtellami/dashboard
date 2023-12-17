import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
			<Sidebar />
			<Dashboard />
    </div>
  )
}

export default App
