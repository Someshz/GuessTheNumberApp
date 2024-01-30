
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import Title from '../components/UI/Title';
import NumberContainer from '../components/Game/NumberContainer';
import { useEffect, useState } from 'react';
import PrimaryButton from '../components/UI/PrimaryButton';
import InstructionText from '../components/UI/InstructionText';
import Card from '../components/UI/Card'
import GameRounds from '../components/UI/GameRounds';

let minNumber = 1;
let maxNumber = 100;

function GameScreen({ onPickNumber, onGameOver }) {
    const initialGuess = GuessRandomNumber(1, 100, onPickNumber)
    console.log(initialGuess)
    const [guessNumber, setGuessNumber] = useState(initialGuess)
    const [guessArray, setGuessArray] = useState([initialGuess])
    const length1 = guessArray.length;
    function GuessRandomNumber(min, max, exclude) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;

        if (randomNumber === exclude) {
            GuessRandomNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    }

    function numberHandler(direction) {

        if ((direction === 'lower' && guessNumber < onPickNumber) || (direction === 'greater' && guessNumber > onPickNumber)) {
            Alert.alert("Invalid Input", "You entered wrong input please enter correct", [{ text: "Okay", style: 'destructive' }])
            return;
        }
        if (direction === 'lower') {
            maxNumber = guessNumber
        } else {
            minNumber = guessNumber + 1
        }
        const rndNumber = GuessRandomNumber(minNumber, maxNumber, guessNumber);
        setGuessNumber(rndNumber)
        setGuessArray((previousNumber) => [rndNumber, ...previousNumber])
    }

    useEffect(() => {
        if (onPickNumber === guessNumber) {
            onGameOver(guessArray.length)
        }
    }, [guessNumber, onPickNumber, onGameOver])

    useEffect(() => {
        minNumber = 1;
        maxNumber = 100;
    }, []);


    return <View style={styles.gameScreenContainer}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{guessNumber}</NumberContainer>
        <Card>
            <InstructionText>Higher or Lower?</InstructionText>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonLevel}><PrimaryButton onPress={numberHandler.bind(this, 'lower')}>-</PrimaryButton></View>
                <View style={styles.buttonLevel}><PrimaryButton onPress={numberHandler.bind(this, 'greater')}>+</PrimaryButton></View>
            </View>
        </Card>
        <View style={styles.list}>
        <View style={styles.listContainer}>
            <FlatList data={guessArray}
                renderItem={(guess) => <GameRounds roundNumber={length1 - guess.index} guess={guess.item} />}
                key={(item) => item} />
        </View>
        </View> 
    </View>
}

export default GameScreen;


const styles = StyleSheet.create({
    gameScreenContainer:{
        flexDirection:'column'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonLevel: {
        flex: 1,
    },
    listContainer: {
        padding: 20,
    }
})