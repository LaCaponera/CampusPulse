import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabsNavigator } from './BottomTabs';

const Drawer = createDrawerNavigator();

function ProfileScreen() {
    return (
        <View style={styles.center}>
            <Text style={styles.heading}>Student Profile</Text>
            <Text>Major: Computer Science | Year: 3</Text>
        </View>
    )
}

function SettingsScreen() {
    return (
        <View style={styles.center}>
            <Text style={styles.heading}>App Settings & Notifications</Text>
        </View>
    )
}

export function RootDrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
            name="MainTabs"
            components={BottomTabsNavigator}
            options={{ title: 'Campus Home'}}
            />
            <Drawer.Screen name="Profile" components={ProfileScreen} />
            <Drawer.Screen name="Settings" components={SettingsScreen} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center'},
    heading: { fontSize:20, fontWeight: 'Bold', marginBottom: 8}
})