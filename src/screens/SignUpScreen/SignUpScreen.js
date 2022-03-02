import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView } from 'react-native'
import { Controller, useForm } from "react-hook-form";

import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const SignUpScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [phone, setPhone] = useState('')
    const { control, handleSubmit, watch, formState: { errors } } = useForm();


    const onRegisterPress = () => {
            navigation.navigate('confirmEmailScreen')
    }

    const onTermsOfUsePressed = () => {
        console.warn("Terms")
    }

    const onPrivacyPressed = () => {
        console.warn("Privacy")
    }

    const onSignInPress = () => {
        navigation.navigate('SignInScreen')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Image source={Logo} style={styles.logo, { width: 200, height: 350, marginTop: -100 }} resizeMode="contain" /> */}
            <View style={styles.root}>
                <Text style={styles.title}>Regístrate para Continuar</Text>
                <CustomInput
                     name="Email"
                     placeholder="Ingrese Email"
                     control={control}
                />
               {/*  <CustomInput
                    placeholder="Ingrese Contraseña"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomInput
                    placeholder="Confirmar Contraseña"
                    value={rePassword}
                    setValue={setRePassword}
                    secureTextEntry={true}
                />

                <CustomInput
                    placeholder="Ingrese Teléfono"
                    value={phone}
                    setValue={setPhone}

                /> */}
                <CustomButton text="Regístrate" onPress={onRegisterPress} />
                <CustomButton text="Ya Tengo Cuenta" onPress={onSignInPress} type="TERTIARY"/>
                <Text style={styles.text}>
                    Al registrarse aceptas los {' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>terminos de uso</Text> y {' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>Políctica de privacidad</Text>
                </Text>

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

export default SignUpScreen