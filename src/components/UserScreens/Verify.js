import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import FlatButton from '../Shared/Button';

const Verify = ({navigation}) => {
  const handleVerify = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.verifyContainer}>
        <View style={styles.verifyDisplay}>
          <Image
            source={require('../../../assets/Icons/Pixel.png')}
            style={styles.pixel}
          />
          <Image
            source={require('../../../assets/Icons/Mobile.png')}
            style={styles.mobile}
          />
          <Image
            source={require('../../../assets/Icons/Circle2.png')}
            style={styles.circle}
          />
          <Image
            source={require('../../../assets/Icons/Circle2.png')}
            style={styles.circleOne}
          />
          <Image
            source={require('../../../assets/Icons/Circle2.png')}
            style={styles.circleTwo}
          />
          <Image
            source={require('../../../assets/Icons/Square2.png')}
            style={styles.square}
          />
        </View>
        <View style={styles.verifyContent}>
          <View style={styles.headingView}>
            <Text style={styles.headingText}>Verify OTP</Text>
          </View>
          <View style={styles.inputHolder}>
            <TextInput
              style={styles.verifyData}
              keyboardType="numeric"
              maxLength={1}
              returnKeyType="next"
            />
            <TextInput
              style={styles.verifyData}
              keyboardType="numeric"
              maxLength={1}
              returnKeyType="next"
            />
            <TextInput
              style={styles.verifyData}
              keyboardType="numeric"
              maxLength={1}
              returnKeyType="next"
            />
            <TextInput
              style={styles.verifyData}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View style={styles.headingView}>
            <Text style={styles.resendText}>
              Didn't receive? <Text style={styles.OTPLink}>Resend OTP</Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <FlatButton
              text={'Verify'}
              onPress={handleVerify}
              color1={'#55225C'}
              color2={'#AA396D'}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  verifyContainer: {
    flex: 1,
    backgroundColor: '#C24072',
  },
  verifyDisplay: {
    flex: 1,
  },
  verifyContent: {
    backgroundColor: '#020D4D',
    height: '48%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headingView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  headingText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  inputHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 50,
  },
  verifyData: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.5)',
    width: '14%',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  resendText: {
    color: 'rgba(255,255,255,0.5)',
    marginTop: 10,
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
  },
  OTPLink: {
    color: '#AA396D',
    textDecorationLine: 'underline',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
  },
  buttonContainer: {
    width: '70%',
    alignSelf: 'center',
  },
  pixel: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 200,
    right: 0,
  },
  mobile: {
    width: 80,
    height: 150,
    position: 'absolute',
    top: 5,
    transform: [{rotateZ: '-30deg'}],
  },
  circle: {
    width: 180,
    height: 180,
    position: 'absolute',
    backgroundColor: '#020D4D',
    top: 200,
    left: -40,
    borderRadius: 100,
    opacity: 0.4,
  },
  circleOne: {
    width: 50,
    height: 50,
    position: 'absolute',
    backgroundColor: '#020D4D',
    top: 50,
    left: 120,
    borderRadius: 100,
    opacity: 0.4,
  },
  circleTwo: {
    width: 30,
    height: 30,
    position: 'absolute',
    backgroundColor: '#020D4D',
    top: 120,
    left: 170,
    borderRadius: 100,
    opacity: 0.4,
  },
  square: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 40,
    right: -10,
    transform: [{rotateZ: '30deg'}],
    opacity: 0.5,
  },
});

export default Verify;
