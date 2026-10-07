import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { RootDrawerNavigation } from './RootDrawer.jsx'

const prefix = Linking.createURL('/')

const linkingConfig = {
  prefixes: [prefix, 'campuspulse://'],
  config: {
    screens: {
      MainTabs: {
        screens: {
          Feed: {
            screens: {
              EventFeed: 'feed',
              EventDetail: 'events/:id', // Deep link matches /events/101
            },
          },
          Explore: 'explore',
          Bookmarks: 'bookmarks',
        },
      },
      Profile: 'profile',
      Settings: 'settings',
    },
  },
}

export default function App() {
  return (
    <NavigationContainer linking={linkingConfig}>
      <RootDrawerNavigation />
    </NavigationContainer>
  )
}