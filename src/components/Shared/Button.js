import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const FlatButton = ({text, onPress, color1, color2}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={[color1, color2]} style={styles.linearContainer}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearContainer: {
    borderRadius: 10,
  },
  buttonContainer: {
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  buttonTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
  },
});

export default FlatButton;
