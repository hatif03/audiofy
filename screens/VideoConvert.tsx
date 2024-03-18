import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigation'
import AppButton from '../components/AppButton'
import { MaterialIcons } from '@expo/vector-icons'

type Props = NativeStackScreenProps<RootStackParamList, 'VideoConvert'>

const VideoConvert = (props: Props) => {
  const uri = props.route.params.selectedImg

  const convert2Audio = () => console.log("convert2Mp3")

  return (
    <View style={styles.container}>
      <AppButton onPress={convert2Audio}>
        <MaterialIcons name="multitrack-audio" size={24} color="#2E6EEE" />
        <Text style={styles.btnTitle}>Convert File</Text>
      </AppButton>
    </View>
  )
}

export default VideoConvert

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTitle:{
    color: "#2E6EEE",
    fontWeight: "600",
    marginLeft: 5,
},
})