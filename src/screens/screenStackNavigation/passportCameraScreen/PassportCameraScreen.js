import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  StyleSheet as RNStyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useRoute, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import styles from './styles'; // Keep your existing styles
import Theme from '../../../theme/Theme';

const {width} = Dimensions.get('window');

const PassportCameraScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {documentType} = route.params || {};

  const cameraRef = useRef(null);
  const [device, setDevice] = useState(null);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  const devices = useCameraDevices();
  const back = devices.back;

  useEffect(() => {
    const loadCameraDevice = async () => {
      try {
        const availableDevices = await Camera.getAvailableCameraDevices();
        const back = availableDevices.find(d => d.position === 'back');
        if (back) {
          console.log('✅ Back camera found:', back.name);
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
  }, [back, device]);

  if (!isCameraVisible && !device) {
    return (
      <View style={styles.loading}>
        <Text style={styles.textLoading}>Loading camera...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.viewMainContainer}>
      <View style={styles.container}>
        <Camera
          ref={cameraRef}
          style={RNStyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
          torch={isFlashOn ? 'on' : 'off'}
        />
        <View style={{flex: 1, backgroundColor: Theme.colors.textColor17}}>
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
                  {
                    marginLeft: Theme.responsiveSize.size04,
                  },
                ]}
                source={Theme.icons.Info_White_Icon}
              />
            </View>
            <View style={{width: Theme.responsiveSize.size10}} />
          </View>
          <View style={styles.overlay}>
            <View style={styles.viewMiddle}>
              <View style={styles.frame} />
              <Text style={styles.instructionTitle}>{'Front of card'}</Text>
              <Text style={styles.instructionText}>
                Position all 4 corners clearly in the frame
              </Text>
            </View>
          </View>
          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.flashButton}
              onPress={() => setIsFlashOn(prev => !prev)}>
              <Image
                style={styles.flashIcon}
                source={
                  isFlashOn
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
                    // You can navigate or process the photo path here
                  } catch (e) {
                    console.error('Capture failed', e);
                    Toast.show({type: 'error', text1: 'Capture failed!'});
                  }
                }
              }}
            />
            <TouchableOpacity
              style={styles.flashButton}
              onPress={() => setIsFlashOn(prev => !prev)}>
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
