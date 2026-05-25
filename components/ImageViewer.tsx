import {ImageSourcePropType, StyleSheet} from 'react-native'
import {Image} from 'expo-image'

type Props = {
    imgSource: ImageSourcePropType;
    selectedImageUri?: string;
};

export default function ImageViewer({imgSource, selectedImageUri}: Props) {
    const imageSource = selectedImageUri ? {uri: selectedImageUri} : imgSource;
    return <Image source={imageSource} style={styles.image}/>
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});