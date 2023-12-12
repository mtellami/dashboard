import { createContext, useContext, useState } from "react";

const SelectContext = createContext({
	selected: 'orders',
	setSelected: (_: string) => {}
})

export const SelectProvider = ({ children }: {children: React.ReactNode}) => {
	const [selected, setSelected] = useState('orders')

	return (
		<SelectContext.Provider value={{ selected, setSelected }}>
			{children}
		</SelectContext.Provider>
	)
}

export const useSelect = () => {
	const context = useContext(SelectContext)
	return context
}
