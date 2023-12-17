import { createContext, useContext, useEffect, useState } from "react";
import { DARK, LIGHT } from '../utils/constants'

const SelectContext = createContext({
	selected: 'orders',
	select: (_: string) => {},
	mode: 'light',
	toggle: () => {},
	open: false,
	togglePopup: () => {}
})

export const SelectProvider = ({ children }: {children: React.ReactNode}) => {
	const [selected, select] = useState('orders')
	const [mode, setMode] = useState('light')
	const [open, setOpen] = useState<boolean>(false)

	useEffect(() => {
		const previous = localStorage.getItem('mode')
		if (previous) {
			setMode(previous)
		}
	}, [])

	const toggle = () => {
		if (mode === DARK) {
			setMode(LIGHT)
			localStorage.setItem('mode', LIGHT)
		} else {
			setMode(DARK)
			localStorage.setItem('mode', DARK)
		}
	}

	function togglePopup() {
		console.log(open)
		setOpen(!open)
	}

	return (
		<SelectContext.Provider value={{ selected, select, mode, toggle, open, togglePopup }}>
			{children}
		</SelectContext.Provider>
	)
}

export const useSelect = () => {
	const context = useContext(SelectContext)
	return context
}
