import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import AppButton from '../components/AppButton'
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const VideoSelect = (props: Props) => {

  const navigate = useNavigation()

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      allowsMultipleSelection: false,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      navigate.navigate('VideoConvert', {selectedImg: image})
    } else{
      console.log("cancelled")
    }
  };

  return (
    <View style={styles.container}>
      <AppButton 
        onPress={() => {
          console.log("pressed")
          pickImage()
        }}
      >
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