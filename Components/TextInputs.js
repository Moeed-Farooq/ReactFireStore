import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'


const TextInputs = (props) => {
    return (
       
            <TextInput
                placeholder={props.placeholder}
                multiline={false}
    
                editable={true}
                onChangeText={(e) => props.onChange(e)}
                style={[styles.textInputStyle, props.style1]}
            />
       
    )
}

export default TextInputs

const styles = StyleSheet.create({

    textInputStyle: {
        paddingStart: 13,
        paddingEnd: 13,
        height: 47,
        borderWidth: 1,
        borderColor: '#B6B6B6',
        marginVertical: 8,
        marginHorizontal: 24,
        borderRadius: 6,
        

    }
})