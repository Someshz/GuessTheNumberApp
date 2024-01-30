import { useState } from 'react'
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native'
import PrimaryButton from '../components/UI/PrimaryButton';
import Colors from '../Util/Colors'
import Title from '../components/UI/Title';
import InstructionText from '../components/UI/InstructionText';
import Card from '../components/UI/Card';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function inputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function confirmInputHandler() {
        const number = parseInt(enteredNumber)
        if (isNaN(number) || number <= 0 || number > 99) {
            console.log(number);
            Alert.alert("Invalid Number", "Entered number is invalid please enter the number between 1 to 99", [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return
        }
        onPickNumber(number);
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    return <View>
        <Title>Guess The Number</Title>
        <Card>
        <InstructionText>Enter The Number</InstructionText>
        <TextInput maxLength={2} style={styles.inputContainer} keyboardType='number-pad' onChangeText={inputHandler} value={enteredNumber} />
        <View style={styles.buttonContainer}>
            <View style={styles.buttonLevel}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonLevel}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </Card>
    </View>
}

const styles = StyleSheet.create({

    inputContainer: {
        height: 50,
        width: 50,
        marginVertical: 8,
        borderBottomWidth: 4,
        color: Colors.yellow500,
        borderBottomColor: Colors.yellow500,
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonLevel: {
        flex: 1
    },
    
})

export default StartGameScreen;