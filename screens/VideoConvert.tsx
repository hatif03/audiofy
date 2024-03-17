import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const VideoConvert = (props: Props) => {
  console.log(props.route.params.selectedImg)
  return (
    <View>
      <Text>VideoConvert</Text>
    </View>
  )
}

export default VideoConvert

const styles = StyleSheet.create({})