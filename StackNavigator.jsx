import { View, Text, Button, Stylesheet } from 'react-native' 
import { createNativeStackNavigator } from '@react-navigaton/native-stack'

const Stack = createNativeStackNavigator()

export function EventFeedScreen({ navigation }) {
    return(
        <View style={styles.center}>
            <Text style={styles.heading}>Upcoming Campus Event</Text>
            <Button
            title="View Hackaton 2026 (ID: 101)"
            onPress={() => navigation.navigate('EventDetail', {id: '101', title: 'Campus Hackaton 2026'})}            
            />
        </View>
    )
}

export function EventDetailScreen({ route }) {
    const {id, title} = route.params || {id: 'Unknow', title: 'Default Event'}

    return(
        <View style={styles.center}>
            <Text style={styles.heading}>Event Details</Text>
            <Text style={styles.dub}>Event ID: {id}</Text>
            <Text style={styles.body}>Title: {title}</Text>
        </View>
    )
}

export function FeedStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EventFeed" component={EventFeedScreen} options={{ title: 'Campus Feed'}}/>
            <Stack.Screen name="EventDetail" component={EventDetailScreen} option={{ title: 'Event Details'}}/>
        </Stack.Navigator>
    )
}

const styles = Stylesheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20},
    heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 12},
    sub:{},
    body:{ fontSize: 15, color: '#475569'}
})