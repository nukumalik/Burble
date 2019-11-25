import React, { useState } from 'react'
import { Text, TextInput } from 'react-native'
import { Header, Input, Left, Body, Right, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MyHeader = props => {
	const [search, setSearch] = useState(false)

	return (
		<Header style={search ? style.wrapperSearch : style.wrapper}>
			<Left>
				<Button transparent onPress={props.leftButtonIcon === 'magnify' ? () => setSearch(true) : props.leftButton}>
					<Icon name={props.leftButtonIcon} size={25} style={search ? style.iconSearch : style.icon} />
				</Button>
			</Left>
			<Body style={style.body}>
				{props.bodyCol}
				{!search && <Text style={style.title}>{props.title}</Text>}
				{search && (
					<TextInput
						onChangeText={props.searchText}
						style={style.inputSearch}
						autoFocus={true}
						placeholder="Search"
						placeholderTextColor={{ color: 'gray' }}
					/>
				)}
			</Body>
			<Right style={style.right}>
				{props.rightCol}
				<Button transparent onPress={search ? () => setSearch(false) : props.rightButton}>
					{search && <Icon name="close" size={25} style={style.iconSearch} />}
					{!search && <Icon name={props.rightButtonIcon} size={25} style={style.icon} />}
				</Button>
			</Right>
		</Header>
	)
}

const style = {
	wrapper: {
		backgroundColor: '#fff',
	},
	title: {
		color: '#f7c847',
		fontSize: 18,
		fontWeight: 'bold',
	},
	icon: {
		color: '#f7c847',
	},
	left: {},
	body: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	right: {
		alignItems: 'center',
	},

	// Search is True
	wrapperSearch: {
		backgroundColor: '#f7c847',
	},
	iconSearch: {
		color: '#f7c847',
	},
	inputSearch: {
		width: 230,
	},
}

export default MyHeader
