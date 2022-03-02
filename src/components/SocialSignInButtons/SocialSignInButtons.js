import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const onSignInGoogle = () => {
        console.warn("ds")
    }

    return (
        <>
            <CustomButton text="Iniciar Sesión con Google " onPress={onSignInGoogle}  bgColor="#DD4D44" fgColor="#FAE9EA" />

        </>
    )
}

export default SocialSignInButtons