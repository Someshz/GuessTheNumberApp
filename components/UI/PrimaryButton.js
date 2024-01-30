import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from '../../Util/Colors'

function PrimaryButton({children,onPress}) {

    return <View style={styles.buttonOuterContainer}>
        <Pressable style={styles.buttonInnerContainer} android_ripple={{ color: Colors.primary600 }} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        margin: 4,
        backgroundColor:Colors.primary700,
        borderRadius: 16,
    },
    buttonInnerContainer: { 
        padding: 8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default PrimaryButton;