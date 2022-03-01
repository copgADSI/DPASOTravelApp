import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const SignUpScreen = () => {
    const { height } = useWindowDimensions();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [phone, setPhone] = useState('')

    const onRegisterPress = () => {

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={Logo} style={styles.logo, { width: 200, height: 350, marginTop: -100 }} resizeMode="contain" />
            <View style={styles.root}>
                <Text style={styles.title}>Regístrate para Continuar</Text>
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

                />
                <CustomButton text="Regístrate" onPress={onRegisterPress} />
                <Text style={styles.text}>
                    Al registrarse aceptas los <Text>terminos de uso</Text>  y privacidad
                </Text>

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
    },
    tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C10',
        margin: 10,
    },
    text:{

    }
})

export default SignUpScreen