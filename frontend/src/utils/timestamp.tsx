function timestamp(n: number) {
	const now = new Date(n)

	const format = (n: number) => {
		return n < 10 ? `0${n}` : n;
	}
	return `${format(now.getDay())}.${format(now.getMonth())}.${now.getFullYear()}`
}

export default timestamp
