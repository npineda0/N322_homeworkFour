import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home({ navigation, route }) {
    return (
        <View>
            <Text>This is the home page</Text>

            <Button onPress={() => navigation.navigate('SecondScreen')}>
                <Text>Go to second page!</Text>
            </Button>
        </View>
    )
}