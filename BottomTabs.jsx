import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FeedStackNavigator } from './FeedStack';
 
const Tab = createBottomTabNavigator();
 
function SimpleScreen({ title }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>{title}</Text>
    </View>
  );
}
 

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={tabStyles.container}>
      <View style={tabStyles.floatingBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel || options.title || route.name;
          const isFocused = state.index === index;
 
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
 
          const iconName = route.name === 'Feed' ? 'newspaper' :
                           route.name === 'Explore' ? 'compass' : 'bookmark';
 
          return (
            <TouchableOpacity key={route.name} onPress={onPress} style={tabStyles.tabItem}>
              <Ionicons name={iconName} size={22} color={isFocused ? '#2563eb' : '#94a3b8'} />
              <Text style={{ fontSize: 11, color: isFocused ? '#2563eb' : '#94a3b8', fontWeight: isFocused ? 'bold' : 'normal' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
 
export function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Feed" component={FeedStackNavigator} />
      <Tab.Screen name="Explore" children={() => <SimpleScreen title="Campus Explore Map" />} />
      <Tab.Screen name="Bookmarks" children={() => <SimpleScreen title="Saved Events & Courses" />} />
    </Tab.Navigator>
  );
}
 
const tabStyles = StyleSheet.create({
  container: { position: 'absolute', bottom: 20, left: 16, right: 16 },
  floatingBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    height: 64,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: { alignItems: 'center', justifyContent: 'center' }
});
