import React from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import { Header, Footer, Thumbnail, Row, Col, Left, Right, Body, Button, Textarea, Grid } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const data = [
	{
		user: 1,
		message: 'Hello World',
	},
	{
		user: 2,
		message: 'Yo, ene opo mas?',
	},
	{
		user: 1,
		message: 'Wis mangan urung?',
	},
	{
		user: 1,
		message: 'Nak urung ayo bareng',
	},
	{
		user: 2,
		message: 'Aku lagek ae wis mangan mas,',
	},
	{
		user: 2,
		message: 'Mangan ayam panggan ning bu sumirah sing umah e ning pojok kae loo ..',
	},
]

const ChatDetail = props => {
	return (
		<>
			<Header style={style.headerWrapper}>
				<Left>
					<Button transparent style={style.headerLeftButton} onPress={() => props.navigation.goBack()}>
						<Icon name="arrow-left-thick" size={25} color="#FFF" />
						<Thumbnail
							source={{
								uri:
									'https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/p960x960/66698418_3465507603475517_4307670301728047104_o.jpg?_nc_cat=110&_nc_ohc=BiWsPcaO5ngAQnEUKfeQBw-jz5ymkk9lCl0Vqmn_Kw6ygpEkI5s_xnVvg&_nc_ht=scontent.fcgk18-2.fna&oh=ad276d619351204126484e87f0eaabb7&oe=5E435095',
							}}
							circular
							style={{ width: 30, height: 30 }}
						/>
					</Button>
				</Left>
				<Body style={{ paddingLeft: 15, justifyContent: 'center' }}>
					<Text style={style.headerTitle}>Nuku Malik</Text>
					<Text style={style.headerMeta}>Connected</Text>
				</Body>
				<Right></Right>
			</Header>

			<View style={{ flex: 1 }}>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<View style={item.user == 1 ? style.sender : style.receiver}>
							<Text style={{ color: '#000' }}>{item.message}</Text>
							<View
								style={
									item.user == 1
										? { alignItems: 'flex-start' }
										: { alignItems: 'flex-end', justifyContent: 'flex-end', display: 'flex', flexDirection: 'row' }
								}
							>
								<Text style={{ fontSize: 10, color: 'gray' }}>10.00 </Text>
								{item.user == 2 && <Icon name="check-all" color="#5A7BB5" />}
							</View>
						</View>
					)}
					numColumns={1}
					keyExtractor={(item, index) => index.toString()}
					style={{ padding: 15 }}
				/>
			</View>

			<View style={style.footerWrapper}>
				<View style={style.textInputWrapper}>
					<Textarea rowSpan={1} placeholder="Message..." style={style.textInput} />
					<Button style={style.sendButton}>
						<Icon name="send" size={25} color="#FFF" />
					</Button>
				</View>
			</View>
		</>
	)
}

const style = {
	// Header
	headerWrapper: {
		backgroundColor: '#5A7BB5',
	},
	headerLeftButton: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	headerTitle: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
	headerMeta: {
		color: '#DDD',
		fontSize: 10,
	},

	// Footer
	footerWrapper: {
		backgroundColor: '#FFF',
		elevation: 0,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},

	// Text Input
	textInputWrapper: {
		display: 'flex',
		flexDirection: 'row',
	},
	textInput: {
		backgroundColor: '#CCDCF2',
		width: '80%',
		padding: 10,
		minHeight: 45,
	},
	sendButton: {
		// marginLeft: 'auto',
		paddingHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#5A7BB5',
		elevation: 0,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},

	// Message
	sender: {
		padding: 10,
		backgroundColor: '#eee',
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		marginBottom: 10,
		marginRight: 'auto',
		elevation: 3,
	},
	receiver: {
		padding: 10,
		backgroundColor: '#CCDCF2',
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		marginBottom: 10,
		marginLeft: 'auto',
		elevation: 3,
	},
}

export default ChatDetail
