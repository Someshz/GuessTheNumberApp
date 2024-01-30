import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../Util/Colors';

function GameRounds({roundNumber,guess}){
 return <View style={styles.rootContainer}>
    <Text style={styles.textContainer}>#{roundNumber}</Text>
    <Text style={styles.textContainer}>Opponen't Guess {guess}</Text>
 </View>
}

export default GameRounds;

const styles=StyleSheet.create({
    rootContainer:{
        backgroundColor:Colors.yellow500,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:30,
        marginVertical:15,
        borderRadius:30,
        borderWidth:4,
        borderColor:'black'
    },
    textContainer:{
        fontSize:15
    }
})