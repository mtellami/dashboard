import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="flex border min-h-screen">
			<Sidebar />
			<Dashboard />
    </div>
  )
}

export default App
