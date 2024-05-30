import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { LinearGradient } from "expo-linear-gradient";
import { PhotoIcon, CameraIcon ,ArrowLeftStartOnRectangleIcon} from "react-native-heroicons/solid";


import * as ImagePicker from "expo-image-picker";

export default function Camerascreen({ navigation }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [type, setType] = useState(CameraType.back);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    if (cameraRef) {
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      if (hasMediaLibraryPermission) {
        await MediaLibrary.createAssetAsync(newPhoto.uri);
        alert('Photo saved to gallery!');
        setPhoto(newPhoto);

      }
    }

  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPhoto(result);
    }
  };

  async function sendPhoto() {
    // const photoData = new FormData();
    // photoData.append('image', {
    //     uri: photo.uri,
    //     type: 'image/jpeg',
    //     name: 'photo.jpg',
    // });
    // try {
    //     const response = await fetch('http://192.168.0.112:5000/predict_image', {
    //         method: 'POST',
    //         body: photoData,
    //     });
    //     if (response.status !== 200) {
    //         console.log(response.status);
    //     }
    //     const responseJson = await response.json();
    //     navigation.navigate('Result', { prediction: responseJson });
    //     console.log(responseJson);
    // } catch (error) {
    //     console.log(error);
    // }
  }

  if (photo) {
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri);
    };

    let resetCamera = () => {
      setPhoto(undefined);
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: photo.uri }} />
        <LinearGradient
          colors={["#070a13", "#164047", "#070a13"]}
          style={styles.button}
        >
          <TouchableOpacity
            style={{
              color: "#003f5c",
              borderRadius: 25,
              height: 45,
              width: 150,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: "transparent",
            }}
            onPress={() => {
              savePhoto();
              // sendPhoto();
            }}
          >
            <Text style={{ color: "#ffffff", fontFamily: "monospace" }}>
              Predict
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={["#070a13", "#164047", "#070a13"]}
          style={styles.button}
        >
          {hasMediaLibraryPermission ? (
            <TouchableOpacity
              style={{
                color: "#003f5c",
                borderRadius: 25,
                height: 45,
                width: 150,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                backgroundColor: "transparent",
              }}
              onPress={() => {
                resetCamera();
              }}
            >
              <Text style={{ color: "#ffffff", fontFamily: "monospace" }}>
                Save
              </Text>
            </TouchableOpacity>
          ) : undefined}
        </LinearGradient>
        <LinearGradient
          colors={["#070a13", "#164047", "#070a13"]}
          style={styles.button}
        >
          <TouchableOpacity
            style={{
              color: "#003f5c",
              borderRadius: 25,
              height: 45,
              width: 150,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: "transparent",
            }}
            onPress={() => setPhoto(undefined)}
          >
            <Text style={{ color: "#ffffff", fontFamily: "monospace" }}>
              Discard
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef} type={type}>
      <View style={styles.buttonContainer}>
       
        <TouchableOpacity   onPress={toggleCameraType} >
              <ArrowLeftStartOnRectangleIcon color="white" fill="white" size={46}  />
        </TouchableOpacity>


        <TouchableOpacity  onPress={takePic} >
                       <CameraIcon color="white" fill="white" size={46} />
        </TouchableOpacity>


        <TouchableOpacity onPress={pickImage}>
          <PhotoIcon  color="white" fill="white" size={46} />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal:30,
    marginBottom:20,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  button: {
    marginTop: 30,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
    height: 35,
    width: 150,
  },
});
