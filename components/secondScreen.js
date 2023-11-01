import { Text, View, StyleSheet, Image, VirtualizedList } from 'react-native';

export default function SecondScreen({ navigation, route }) {
    return (
        <View>
             <Text>This is the second page</Text>

             <Button onPress={() => navigation.navigate('Home')}>
                <Text>Go to home page!</Text>
            </Button>
        </View>
    )
}