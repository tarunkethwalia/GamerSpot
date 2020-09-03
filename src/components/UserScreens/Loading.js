import React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import FlatButton from '../Shared/Button';

const Loading = ({navigation}) => {
  return (
    <View style={styles.loadContainer}>
      <Image
        source={require('../../../assets/Icons/Circle.png')}
        style={styles.firstCircle}
      />
      <Image
        source={require('../../../assets/Icons/Circle.png')}
        style={styles.secondCircle}
      />
      <Image
        source={require('../../../assets/LoadingBackground.png')}
        style={styles.loadImage}
      />
      <Image
        source={require('../../../assets/Icons/controller.png')}
        style={styles.controller}
      />
      <Text style={styles.titleText}>Welcome</Text>
      <View style={styles.buttonContainer}>
        <FlatButton
          text={'Get Started'}
          onPress={() => navigation.navigate('SignUp')}
          color1={'#020D4D'}
          color2={'#1A2C98'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadContainer: {
    flex: 1,
    backgroundColor: '#020D4D',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '12%',
  },
  loadImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  controller: {
    position: 'absolute',
    width: '30%',
    height: '23%',
    top: '20%',
    right: '-10%',
    transform: [{rotateZ: '45deg'}],
  },
  titleText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 40,
  },
  buttonContainer: {
    width: '70%',
  },
  firstCircle: {
    position: 'absolute',
    width: '11%',
    height: '8%',
    top: '60%',
    right: '20%',
    borderRadius: 50,
  },
  secondCircle: {
    position: 'absolute',
    width: '24%',
    height: '18%',
    top: '35%',
    left: '10%',
    borderRadius: 50,
    opacity: 0.4,
  },
});

export default Loading;
