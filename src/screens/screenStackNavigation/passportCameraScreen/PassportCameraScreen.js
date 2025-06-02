import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Dimensions,
} from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';
// import styles from './styles';

const {width} = Dimensions.get('window');

const PassportCameraScreen = props => {
  return;
  const devices = useCameraDevices();
  const device = devices.back;

  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const micPermission = await Camera.requestMicrophonePermission();
      setHasPermission(
        cameraPermission === 'authorized' && micPermission === 'authorized',
      );
    };

    requestPermissions();
  }, []);

  if (device == null) return <Text>Loading camera...</Text>;
  if (!hasPermission) return <Text>No permission to access camera</Text>;

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <TouchableOpacity style={styles.captureButton}>
        <Text style={{color: 'white'}}>📸</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PassportCameraScreen;
