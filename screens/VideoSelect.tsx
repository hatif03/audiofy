import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton'
import { Ionicons } from '@expo/vector-icons'

type Props = {}

const VideoSelect = (props: Props) => {
  return (
    <View style={styles.container}>
      <AppButton onPress={() => console.log("pressed")}>
        <Ionicons name="cloud-upload-outline" size={24} color="#2E6EEE" />
        <Text style={styles.btnTitle}>Choose Video</Text>
      </AppButton>
    </View>
  )
}

export default VideoSelect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTitle: {
        color: "#2E6EEE",
        fontWeight: "600",
        marginLeft: 5,
    },
})