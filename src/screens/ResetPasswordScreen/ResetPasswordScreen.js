import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const ResetPasswordScreen = () => {
    const navigation = useNavigation()
    const { height } = useWindowDimensions();
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSignInPress = () => {
        navigation.navigate('SignInScreen')
    }
    
    const onSubmitPressed = () => {

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Image source={Logo} style={styles.logo, { width: 200, height: 350, marginTop: -100 }} resizeMode="contain" /> */}
            <View style={styles.root}>
                <Text style={styles.tittle}>Nueva Contraseña  </Text>

                <CustomInput
                    placeholder="Nueva Contraseña *"
                    value={newPassword}
                    setValue={setNewPassword}
                />
                <CustomInput
                    placeholder="Confirmar Contraseña *"
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                />
                <CustomButton onPress={onSubmitPressed} text="Confirmar" />
                <CustomButton onPress={onSignInPress} text="Volver a Inicio de Sesión" type="TERTIARY" />


            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    root: {
        marginTop:100,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 2,
        maxWidth: 300,
        maxHeight: 200
    },
    tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C10',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    }

})

export default ResetPasswordScreen