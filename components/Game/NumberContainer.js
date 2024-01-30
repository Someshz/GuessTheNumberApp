import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../Util/Colors'
import { cloneElement } from 'react'

function NumberContainer({children}) {
    return <View style={styles.numberContainer}>
        <Text style={styles.textContainer}>{children}</Text>
    </View>
}

export default NumberContainer

const styles= StyleSheet.create({
    numberContainer:{
        borderWidth:4,
        borderColor:Colors.yellow500,
        margin:24,
        padding:24,
        borderRadius:8,
        alignItems:'center'
    },
    textContainer:{
        fontWeight:'bold',
        color:Colors.yellow500,
        fontSize:32,
    }
})