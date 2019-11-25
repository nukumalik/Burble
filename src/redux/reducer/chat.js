/* eslint-disable indent */
const initState = {
	isLoading: false,
	isError: false,
	data: [],
}

const chat = (state = initState, action) => {
	switch (action.type) {
		case 'GET_CHAT_PENDING':
			return {
				isLoading: true,
			}
		case 'GET_CHAT_REJECTED':
			return {
				isLoading: false,
				isError: true,
			}
		case 'GET_CHAT_FULFILLED':
			return {
				isLoading: false,
				isError: false,
				data: action.payload.data.data,
			}
		default:
			return state
	}
}

export default chat
