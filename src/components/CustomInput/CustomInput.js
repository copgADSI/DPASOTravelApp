import React from 'react'
import { Controller } from 'react-hook-form'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
 
const CustomInput = ({ control, name, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange, onBlur } }) => (
                    <TextInput
                    
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                    />
                )}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10

    },
    input: {
        borderColor: '#e8e8e'
    }
})
export default CustomInput