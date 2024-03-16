import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    children: React.ReactNode
    onPress?(): void
}

const AppButton = (props: Props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.button}>
        {props.children}
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderRadius: 5,
        padding: 10,
        borderColor: "#2E6EEE"
    }
})