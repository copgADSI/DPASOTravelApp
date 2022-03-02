import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import SocialSignInButtons from '../../components/SocialSignInButtons'

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

    const onSignUpUser = () => {
        console.warn("Crear")

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
                <SocialSignInButtons/>
                <CustomButton text="No Tengo Cuenta" onPress={ onSignUpUser} type="TERTIARY" />
                <CustomButton text="Olvidé mi Contraseña " onPress={onForgotPasswordPressed} type="TERTIARY" />
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