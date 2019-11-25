import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Button, Content, Header, Left, Right } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Componnets
// import Header from '../components/Header'
import ChatItem from '../components/ChatItem'

const ChatList = props => {
	const [search, setSearch] = useState(false)

	return (
		<>
			<Header style={style.headerWrapper}>
				<Left>
					<Text style={style.headerTitle}>Burble</Text>
				</Left>
				<Right>
					<Button transparent>
						<Icon name="dots-vertical" size={25} style={{ color: '#5A7BB5' }} />
					</Button>
				</Right>
			</Header>
			<View style={style.searchWrapper}>
				<Icon name="magnify" size={25} color="#5A7BB5" />
				<TextInput style={style.searchInput} onChangeText={value => setSearch(value)} placeholder="Search" placeholderTextColor="#5A7BB5" />
			</View>
			<Content style={style.wrapper}>
				<TouchableOpacity onPress={() => props.navigation.navigate('ChatDetail')}>
					<ChatItem />
				</TouchableOpacity>
				<ChatItem />
				<ChatItem />
			</Content>
		</>
	)
}

const style = {
	wrapper: {
		flex: 1,
		backgroundColor: '#fff',
	},

	// Header
	headerWrapper: {
		backgroundColor: '#fff',
		elevation: 0,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#5A7BB5',
	},

	// Search
	searchWrapper: {
		display: 'flex',
		flexDirection: 'row',
		marginHorizontal: 10,
		paddingHorizontal: 10,
		backgroundColor: '#CCDCF2',
		// opacity: 0.2,
		borderRadius: 5,
		alignItems: 'center',
	},
	searchInput: {
		color: '#5A7BB5',
		fontSize: 16,
		fontWeight: 'bold',
		width: '100%',
	},
}

export default ChatList
