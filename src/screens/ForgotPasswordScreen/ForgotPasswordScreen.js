import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation()
    const { height } = useWindowDimensions();
    const [email, setEmail] = useState('')
 
    const onResetPasswordPressed = () => {
        navigation.navigate('ResetPasswordScreen')

    }

    const onSignInPress = () => {
        navigation.navigate('SignInScreen')
    }
    
    const onReSendInPress = () => {

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Image source={Logo} style={styles.logo, { width: 200, height: 350, marginTop: -100 }} resizeMode="contain" /> */}
            <View style={styles.root}>
                <Text style={styles.tittle}>Recuperar Contraseña  </Text>

                <CustomInput
                    placeholder="Ingresa Email *"
                    value={email}
                    setValue={setEmail}
                />
                <CustomButton text="Confirmar" onPress={onResetPasswordPressed}/>
                <CustomButton text="Reenviar Código" type="SECONDARY" onPress={onReSendInPress}/>
                <CustomButton text="Volver al Inicio de Sesión" type="TERTIARY" onPress={onSignInPress}/>
            

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

export default ForgotPasswordScreen