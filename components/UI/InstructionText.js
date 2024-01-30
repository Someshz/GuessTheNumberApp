import {StyleSheet, Text} from 'react-native'
import Colors from '../../Util/Colors'

function InstructionText({children}){
    return <Text style={styles.instructionText}>{children}</Text>
}

export default InstructionText;

const styles=StyleSheet.create({
    instructionText:{
        color:Colors.yellow500,
        fontSize:24,
    }
})