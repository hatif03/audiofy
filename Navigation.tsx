import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AudioTrim from "./screens/AudioTrim";
import VideoConvert from "./screens/VideoConvert";
import VideoSelect from "./screens/VideoSelect";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <Stack.Navigator initialRouteName="VideoSelect">
            <Stack.Screen 
                name="AudioTrim" 
                component={AudioTrim} 
                options={{title: "Audio Trim"}}
            />
            <Stack.Screen 
                name="VideoConvert" 
                component={VideoConvert} 
                options={{title: "Video Convert"}}
            />
            <Stack.Screen 
                name="VideoSelect" 
                component={VideoSelect} 
                options={{title: "Video Select"}}
            />
        </Stack.Navigator>
    )
}

export default Navigation;