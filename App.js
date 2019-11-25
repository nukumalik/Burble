import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Screen
import ChatList from './src/screens/ChatList'
import ChatDetail from './src/screens/ChatDetail'
import StoryList from './src/screens/StoryList'
// import StoryDetail from './src/screens/StoryList'
import AroundList from './src/screens/AroundList'
// import AroundDetail from './src/screens/AroundList'
import Profile from './src/screens/Profile'

const chatStack = createStackNavigator(
	{
		ChatList,
		ChatDetail,
	},
	{
		defaultNavigationOptions: {
			header: null,
		},
	}
)

// Make Tab Bottom Bar Hide in Chat Detail Screen
chatStack.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true
	if (navigation.state.index > 0) {
		tabBarVisible = false
	}

	return {
		tabBarVisible,
	}
}

const storyStack = createStackNavigator(
	{
		StoryList,
	},
	{
		defaultNavigationOptions: {
			header: null,
		},
	}
)

const aroundStack = createStackNavigator(
	{
		AroundList,
	},
	{
		defaultNavigationOptions: {
			header: null,
		},
	}
)

const profileStack = createStackNavigator(
	{
		Profile,
	},
	{
		defaultNavigationOptions: {
			header: null,
		},
	}
)

const appNavigator = createBottomTabNavigator(
	{
		Photo: aroundStack,
		Story: storyStack,
		Chat: chatStack,
		Around: aroundStack,
		Profile: {
			screen: profileStack,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
	},
	{
		initialRouteName: 'Chat',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let iconName
				if (routeName === 'Chat') {
					iconName = 'message-text'
				} else if (routeName === 'Story') {
					iconName = 'buffer'
				} else if (routeName === 'Around') {
					iconName = 'map-marker-radius'
				} else if (routeName === 'Photo') {
					iconName = 'account-group'
				} else {
					iconName = 'account-circle'
				}

				return <Icon name={iconName} size={30} color={tintColor} />
			},
		}),

		tabBarOptions: {
			tabStyle: {
				borderTopWidth: 0,
				borderTopColor: '#000',
			},
			style: {
				elevation: 10,
			},
			showLabel: false,
			activeBackgroundColor: '#5A7BB5',
			activeTintColor: '#FFF', //#f7c847
			inactiveBackgroundColor: '#5A7BB5',
			inactiveTintColor: '#CCDCF2',
			keyboardHidesTabBar: false,
		},
	}
)

const appContainer = createAppContainer(appNavigator)

export default appContainer
