import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import FlatButton from '../Shared/Button';
import {globalStyles} from '../Shared/globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({navigation}) => {
  const handleSignIn = () => {
    navigation.navigate('SignUp');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="height" style={styles.loginContainer}>
        <View style={styles.loginDisplay}>
          <Image
            source={require('../../../assets/Icons/Pixel.png')}
            style={styles.pixel}
          />
          <Image
            source={require('../../../assets/Icons/Controller2.png')}
            style={styles.controller}
          />
          <Image
            source={require('../../../assets/Icons/Circle2.png')}
            style={styles.circle}
          />
          <Image
            source={require('../../../assets/Icons/Square2.png')}
            style={styles.square}
          />
        </View>
        <View style={styles.loginSlider}>
          <View
            style={{
              ...globalStyles.inputContainer,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Use your Existing Account
            </Text>
          </View>
          <View style={globalStyles.inputContainer}>
            <Icon
              name="account"
              size={20}
              color="rgba(225,225,225,0.5)"
              style={styles.iconStyle}
            />
            <TextInput
              placeholder="Username"
              style={{
                width: 250,
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
                color: 'white',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255,255,255,0.5)',
                padding: 0,
              }}
              placeholderTextColor="rgba(255,255,255,0.5)"
              // onChangeText={formikprops.handleChange('username')}
              // value={formikprops.values.username}
            />
          </View>
          <View style={globalStyles.inputContainer}>
            <Icon
              name="key"
              size={20}
              color="rgba(225,225,225,0.5)"
              style={styles.iconStyle}
            />
            <TextInput
              placeholder="Password"
              style={{
                width: 250,
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
                color: 'white',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255,255,255,0.5)',
                padding: 0,
              }}
              placeholderTextColor="rgba(255,255,255,0.5)"
              // onChangeText={formikprops.handleChange('username')}
              // value={formikprops.values.username}
            />
          </View>
          <View style={styles.buttonContainer}>
            <FlatButton
              text={'Sign Up'}
              onPress={() => {}}
              color1={'#55225C'}
              color2={'#AA396D'}
            />
          </View>
          <View
            style={{
              ...globalStyles.inputContainer,
              justifyContent: 'center',
            }}>
            <Text style={styles.TCText}>
              Don't have an account?{' '}
              <Text style={styles.TCLink} onPress={() => handleSignIn()}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#C24072',
  },
  loginDisplay: {
    flex: 1,
  },
  loginSlider: {
    flex: 1,
    backgroundColor: '#020D4D',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '70%',
  },
  TCText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
  },
  TCLink: {
    color: '#AA396D',
    textDecorationLine: 'underline',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
  },
  pixel: {
    position: 'absolute',
    width: 150,
    height: 150,
    transform: [{rotateY: '180deg'}],
  },
  controller: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: 160,
    left: '-10%',
    transform: [{rotateZ: '-30deg'}],
  },
  circle: {
    position: 'absolute',
    width: 180,
    height: 180,
    top: -20,
    right: '-10%',
    transform: [{rotateZ: '-30deg'}],
    opacity: 0.5,
  },
  square: {
    position: 'absolute',
    width: 140,
    height: 140,
    top: 200,
    right: 50,
    transform: [{rotateZ: '30deg'}],
    opacity: 0.5,
  },
});

export default Login;
