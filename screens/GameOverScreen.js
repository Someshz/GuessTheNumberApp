import {View, Text, Image, StyleSheet} from 'react-native'
import Title from '../components/UI/Title'
import PrimaryButton from '../components/UI/PrimaryButton'

function GameOver({userNumber, roundNumber, startGame}){
    return <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={styles.imageViewContainer}>
            <Image style={styles.imageContainer} source={require('../assets/images/success.png')}/>
        </View>
        <Text style={styles.textContainer}>
            You Completed the Game for <Text>{userNumber}</Text> in <Text>{roundNumber}</Text> rounds.
        </Text>
        <PrimaryButton onPress={startGame}>Start Game</PrimaryButton>
    </View>
}

export default GameOver


const styles=StyleSheet.create({
    rootContainer:{
        mergin:20,
    },
    imageViewContainer:{
        alignItems:'center'
    },
    imageContainer:{
        height:300,
        width:300,
        borderRadius:150,
        borderWidth:8,
        marginVertical:30

    },
    textContainer:{
        fontSize:26,
        textAlign:'center',
        fontWeight:'bold'
    }
})