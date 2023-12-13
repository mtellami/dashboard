import { useRef } from "react"
import { useSelect } from "../context/Select"

function Toggle() {
	const box = useRef<HTMLInputElement>(null)
	const { toggle } = useSelect()

	const switchMode = () => {
		if (box.current) {
			box.current.checked = !box.current.checked
			toggle()
		}
	}

	const styles = 'w-14 h-8 rounded-2xl relative cursor-pointer outline-4 outline-gray-500 transition duration-500 border-2 border-gray-500'
	return (
		<div className={`${styles} ${box.current?.checked ? 'bg-gray-500' : 'bg-white'}`} onClick={switchMode}>
			<span className={`absolute w-6 h-6 rounded-full top-0.5 ${box.current?.checked ? 'right-1 bg-white' : 'left-1 bg-gray-500'}`}/>
			<input type="checkbox" className="hidden" ref={box} />
		</div>
	)
}

export default Toggle
