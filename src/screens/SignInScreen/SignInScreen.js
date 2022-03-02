import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView, TextInput } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { Controller, useForm } from "react-hook-form";

import SocialSignInButtons from '../../components/SocialSignInButtons'

const SignInScreen = () => {
    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    const navigation = useNavigation()
    const { height } = useWindowDimensions();

    const onSignInPressed = (data) => {
        console.warn(data)
        //Validar usuario

        navigation.navigate('HomeScreen')
    }

    const onForgotPasswordPressed = () => {

        navigation.navigate('ForgotPasswordScreen')
    }

    const onSignUpPress = () => {
        navigation.navigate('SignUpScreen')

    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={styles.logo, { width: 200, height: 350, marginTop: -100 }} resizeMode="contain" />
                <CustomInput
                    name="Email"
                    placeholder="Ingrese Email"
                    control={control}
                />

                <CustomInput
                    name="Password"
                    placeholder="Ingrese Contraseña"
                    control={control}
                    secureTextEntry
                />

                <CustomButton text="Iniciar Sesión" onPress={handleSubmit(onSignInPressed)} />
                <SocialSignInButtons />
                <CustomButton text="No Tengo Cuenta" onPress={onSignUpPress} type="TERTIARY" />
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