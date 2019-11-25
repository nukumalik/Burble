import axios from 'axios'

const URI = ''

export const getChat = () => {
	return {
		type: 'GET_CHAT',
		payload: axios.get(URI),
	}
}
