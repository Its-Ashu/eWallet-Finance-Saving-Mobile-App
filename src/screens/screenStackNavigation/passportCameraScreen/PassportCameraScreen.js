// CustomCameraScreen.tsx
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import styles from './styles';
// import Icon from 'react-native-vector-icons/Feather'; // or use any icon lib

const {width} = Dimensions.get('window');

const PassportCameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [device, setDevice] = useState(null);
  const [isFlashOn, setIsFlashOn] = useState(false);

  useEffect(() => {
    const init = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const micPermission = await Camera.requestMicrophonePermission();
      console.log('Camera permission:', cameraPermission);
      console.log('Mic permission:', micPermission);

      if (cameraPermission === 'authorized') {
        const availableDevices = await Camera.getAvailableCameraDevices();
        const backCamera = availableDevices.find(d => d.position === 'back');

        if (backCamera) {
          console.log('✅ Back camera found:', backCamera.name);
          setDevice(backCamera);
        } else {
          console.log('❌ No back camera found');
        }
      }

      setHasPermission(cameraPermission === 'authorized');
    };

    init();
  }, []);

  if (!hasPermission || !device) {
    return (
      <View style={styles.loading}>
        <Text style={styles.textLoading}>Loading camera...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
        torch={isFlashOn ? 'on' : 'off'}
      />
      <View style={styles.overlay}>
        <View style={styles.frame} />
        <Text style={styles.instructionTitle}>Front of card</Text>
        <Text style={styles.instructionText}>
          Position all 4 corners of the front clearly in the frame
        </Text>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => setIsFlashOn(f => !f)}>
          <Text style={{color: 'white'}}>
            {isFlashOn ? 'Flash ON' : 'Flash OFF'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={() => {
            // capture logic
          }}
        />
        <TouchableOpacity
          onPress={() => {
            // gallery logic
          }}>
          <Text style={{color: 'white'}}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PassportCameraScreen;
