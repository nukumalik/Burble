import React from 'react'
import { View, Text } from 'react-native'
import { Card, Row, Col, Thumbnail } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ChatItem = () => {
	return (
		<>
			<Row style={style.wrapper}>
				<Col style={style.left}>
					<Thumbnail
						source={{
							uri:
								'https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/p960x960/66698418_3465507603475517_4307670301728047104_o.jpg?_nc_cat=110&_nc_ohc=BiWsPcaO5ngAQnEUKfeQBw-jz5ymkk9lCl0Vqmn_Kw6ygpEkI5s_xnVvg&_nc_ht=scontent.fcgk18-2.fna&oh=ad276d619351204126484e87f0eaabb7&oe=5E435095',
						}}
						circular
						style={{ width: 52, height: 52 }}
					/>
				</Col>
				<Col style={style.body}>
					<Row style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0', paddingVertical: 20 }}>
						<Col style={style.chatWrapper}>
							<Text style={style.chatTitle}>
								Nuku Malik <Icon name="hexagon" style={{ color: 'green' }} />
							</Text>
							<Text style={style.chatBody}>Ok siap bosque...</Text>
						</Col>
						<Col style={style.right}>
							<Icon name="check-all" size={20} style={{ color: '#5A7BB5' }} />
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	)
}

const style = {
	wrapper: {
		paddingHorizontal: 5,
	},
	left: {
		width: '22%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	body: {
		justifyContent: 'center',
	},
	right: {
		width: '10%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	chatWrapper: {
		JustifyContent: 'center',
	},
	chatTitle: {
		color: '#000',
		fontSize: 15,
		fontWeight: 'bold',
	},
	chatBody: {
		color: '#444',
	},
}

export default ChatItem
