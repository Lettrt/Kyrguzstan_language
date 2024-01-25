export const setLSToken = (token: string) => {
	localStorage.setItem('token', token)
}

export const getLSToken = () => {
	return localStorage.getItem('token')
}

export const removeLSToken = () => {
	localStorage.removeItem('token')
}
export const setLSRefresh = (token2: string) => {
	localStorage.setItem('token', token2)
}

export const getLSRefresh = () => {
	return localStorage.getItem('token')
}

export const removeLSRefresh = () => {
	localStorage.removeItem('token')
}

export const setLSId = (id: string) => {
	localStorage.setItem('id', id)
}

export const getLSId = () => {
	return localStorage.getItem('id')
}

export const removeLSId = () => {
	localStorage.removeItem('id')
}
