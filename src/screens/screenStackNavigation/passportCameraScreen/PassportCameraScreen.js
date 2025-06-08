import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet as RNStyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import {useRoute, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import styles from './styles'; // Keep your existing styles
import Theme from '../../../theme/Theme';
import {Constants} from '../../../constants';

const PassportCameraScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {documentType} = route.params || {};

  const cameraRef = useRef(null);
  const [device, setDevice] = useState(null);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [cameraPosition, setCameraPosition] = useState('back');
  const [flash, setFlash] = useState('off');

  useEffect(() => {
    const loadCameraDevice = async () => {
      try {
        const availableDevices = await Camera.getAvailableCameraDevices();
        const back = availableDevices.find(d => d.position === 'back');
        if (back) {
          setDevice(back);
          setIsCameraVisible(true);
        } else {
          console.log('❌ No back camera found');
        }
      } catch (error) {
        console.error('Error loading camera:', error);
      }
    };
    loadCameraDevice();
  }, [device]);

  if (!isCameraVisible && !device) {
    return (
      <View style={styles.loading}>
        <Text style={styles.textLoading}>Loading camera...</Text>
      </View>
    );
  }

  const toggleCamera = () => {
    setCameraPosition(prev => (prev === 'back' ? 'front' : 'back'));
  };

  const toggleFlash = () => {
    setFlash(prev => (prev === 'off' ? 'on' : 'off'));
  };

  return (
    <SafeAreaView style={styles.viewMainContainer}>
      <View style={styles.container}>
        <Camera
          ref={cameraRef}
          style={RNStyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
          torch={flash}
        />

        {/* Overlay with cutout */}
        <View style={RNStyleSheet.absoluteFill}>
          <View style={styles.overlayTop} />

          <View style={styles.overlayBottom} />

          <View style={styles.overlayLeft} />

          <View style={styles.overlayRight} />

          <View style={styles.frame} />
          {/* Header */}
          <View style={styles.viewHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styles.backIcon}
                tintColor={Theme.colors.bgColor2}
                source={Theme.icons.Back_Icon}
              />
            </TouchableOpacity>
            <View style={styles.viewRow}>
              <Text style={styles.textTitle}>{documentType}</Text>
              <Image
                style={[
                  styles.backIcon,
                  {marginLeft: Theme.responsiveSize.size04},
                ]}
                source={Theme.icons.Info_White_Icon}
              />
            </View>
            <View style={{width: Theme.responsiveSize.size10}} />
          </View>

          {/* Text & Instructions */}
          <View style={styles.viewMiddle}>
            <Text style={styles.instructionTitle}>Front of card</Text>
            <Text style={styles.instructionText}>
              {`Position all 4 corners of the front 
clearly in the frame`}
            </Text>
          </View>

          {/* Bottom Buttons */}
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
              <Image
                style={styles.flashIcon}
                source={
                  flash === 'on'
                    ? Theme.icons.Flash_on_Icon
                    : Theme.icons.Flash_off_Icon
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={async () => {
                if (cameraRef.current) {
                  try {
                    const photo = await cameraRef.current.takePhoto({
                      flash: isFlashOn ? 'on' : 'off',
                    });
                    console.log('📸 Photo captured:', photo);
                    Toast.show({type: 'success', text1: 'Photo captured!'});

                    // Navigate and pass image path
                    navigation.navigate(Constants.PASSPORT_CHECK_SCREEN, {
                      photoPath: photo.path,
                      isFromPassportCamera: true,
                    });
                  } catch (e) {
                    console.error('Capture failed', e);
                    Toast.show({type: 'error', text1: 'Capture failed!'});
                  }
                }
              }}
            />
            <TouchableOpacity style={styles.flashButton} onPress={toggleCamera}>
              <Image
                style={styles.flashIcon}
                source={Theme.icons.Front_Camera_Icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Toast />
      </View>
    </SafeAreaView>
  );
};

export default PassportCameraScreen;
