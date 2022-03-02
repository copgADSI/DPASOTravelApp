import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const ConfirmEmailScreen = () => {
    const { height } = useWindowDimensions();

    const [code, setCode] = useState('')
 
    const onConfirmPressed = () => {

    }

    const onSignInPress = () => {

    }
    
    const onReSendInPress = () => {

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Image source={Logo} style={styles.logo, { width: 200, height: 350, marginTop: -100 }} resizeMode="contain" /> */}
            <View style={styles.root}>
                <Text style={styles.tittle}>Confirma tu Email</Text>
                <CustomInput
                    placeholder="Código de Confirmación *"
                    value={code}
                    setValue={setCode}
                    onPress={onConfirmPressed}
                />
                <CustomButton text="Confirmar" />
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

export default ConfirmEmailScreen