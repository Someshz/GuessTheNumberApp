import { StyleSheet, View } from 'react-native';
import Colors from '../../Util/Colors'
function Card({ children }) {
    return <View style={styles.startGameContainer}>
        {children}
    </View>
}

export default Card;

const styles=StyleSheet.create({
    startGameContainer: {
        alignItems: 'center',
        marginTop: 50,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: Colors.primary800
    },
})