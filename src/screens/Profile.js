import React from 'react'
import { View, Text } from 'react-native'
import { Content, Header, Thumbnail, Left, Body, Right, List, ListItem, Row, Col, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Profile = props => {
	return (
		<>
			<Header style={style.headerWrapper}>
				<Left>
					<Button transparent onPress={() => props.navigation.navigate('Chat')}>
						<Icon name="arrow-left-thick" size={25} color="#FFF" />
					</Button>
				</Left>
				<Body>
					<Text style={style.headerTitle}>Profile</Text>
				</Body>
				<Right></Right>
			</Header>
			<Content>
				<View style={style.wrapper}>
					<View style={style.thumbnailWrapper}>
						<Thumbnail
							source={{
								uri:
									'https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/p960x960/66698418_3465507603475517_4307670301728047104_o.jpg?_nc_cat=110&_nc_ohc=BiWsPcaO5ngAQnEUKfeQBw-jz5ymkk9lCl0Vqmn_Kw6ygpEkI5s_xnVvg&_nc_ht=scontent.fcgk18-2.fna&oh=ad276d619351204126484e87f0eaabb7&oe=5E435095',
							}}
							style={{ width: 150, height: 150, borderRadius: 150 }}
						/>
					</View>
				</View>
				<List>
					<ListItem itemDivider>
						<Text>General</Text>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Name</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>Nuku Malik Sanjaya Kusuma</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Phone Number</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>082291031015</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Gender</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>Man</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Address</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>Nuku Malik Sanjaya Kusuma</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem itemDivider>
						<Text>Additional</Text>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Gender</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>Man</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Address</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>Nuku Malik Sanjaya Kusuma</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem itemDivider>
						<Text>Additional</Text>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Gender</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>Man</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Address</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>Nuku Malik Sanjaya Kusuma</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem itemDivider>
						<Text>Additional</Text>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Gender</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>Man</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem>
						<Row>
							<Col style={style.leftList}>
								<Text>Address</Text>
							</Col>
							<Col style={style.rightList}>
								<Text>Nuku Malik Sanjaya Kusuma</Text>
							</Col>
						</Row>
					</ListItem>
					<ListItem itemDivider>
						<Text>Additional</Text>
					</ListItem>
				</List>
			</Content>
		</>
	)
}

const style = {
	headerWrapper: {
		backgroundColor: '#5A7BB5',
		elevation: 0,
	},
	headerTitle: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: 'bold',
	},

	// Main
	wrapper: {
		padding: 15,
	},

	// Thumbnail
	thumbnailWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	// List
	leftList: {
		width: 'auto',
		paddingRight: 20,
	},
	rightList: {
		alignItems: 'flex-end',
	},
}

export default Profile
