import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../Util/Colors'

function Title({ children }) {
    return (
        <Text style={styles.titleContainer}>{children}</Text>)
}

export default Title

const styles = StyleSheet.create({
    titleContainer: {
        margin:24,
        fontSize: 24,
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})