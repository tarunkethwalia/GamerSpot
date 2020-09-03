import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Loading');
    }, 3000);
  }
  render() {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashLogo}>SplashLogo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    color: 'white',
    fontSize: 24,
  },
});

export default SplashScreen;
