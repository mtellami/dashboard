import { IoClose } from "react-icons/io5"
import { useSelect } from "../../context/Select"

function Popup() {
	const { togglePopup } = useSelect()

	return (
		<div className="absolute top-0 left-0 h-screen w-screen z-20 bg-gray-300/50 flex items-center justify-center">
			<div className="bg-gray-100 p-4 relative">
				<div className="text-red-400 absolute top-2 right-2 cursor-pointer" onClick={togglePopup}>
					<IoClose />
				</div>
			</div>
		</div>
	)
}

export default Popup
