import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const SignInScreen = () => {
    const { height } = useWindowDimensions();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onSignInPress = () => {
        console.warn("Sign In")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }

    const onSignInGoogle = () => {

    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={styles.logo, { width: 200, height: 350, marginTop: -100 }} resizeMode="contain" />
                <CustomInput
                    placeholder="Ingrese Email"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Ingrese Contraseña"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomButton text="Iniciar Sesión" onPress={onSignInPress} />
                <CustomButton text="Iniciar Sesión con Google " onPress={onSignInGoogle} bgColor="#DD4D44" fgColor="#FAE9EA" />
                <CustomButton text="Olvidé mi Contraseña " onPress={onForgotPasswordPressed} type="TERTIARY" />
                <CustomButton text="No Tengo una Cuenta " onPress={onSignInGoogle} type="TERTIARY" />
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 2,
        maxWidth: 300,
        maxHeight: 200
    }
})

export default SignInScreen