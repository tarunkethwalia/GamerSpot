import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FlatButton from '../Shared/Button';
import {globalStyles} from '../Shared/globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import * as yup from 'yup';

const signupSchema = yup.object({
  username: yup.string().required().min(8),
  password: yup.string().required().min(8),
  phoneno: yup
    .string()
    .required()
    .min(10)
    .test('PhoneTest', 'Phone number should be of 10 digits.', (val) => {
      return val.length === 10;
    }),
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TermsConditions: false,
      accountType: '',
      formValues: {
        username: '',
        password: '',
        phoneno: '',
      },
    };
  }

  handleSignUp = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.signUpContainer}>
          <Image
            source={require('../../../assets/Icons/Circle2.png')}
            style={styles.firstCircle}
          />
          <Image
            source={require('../../../assets/Icons/Circle2.png')}
            style={styles.secondCircle}
          />
          <Image
            source={require('../../../assets/Icons/Square2.png')}
            style={styles.firstSquare}
          />
          <KeyboardAvoidingView style={styles.signUpSlider} behavior="height">
            <Formik
              initialValues={this.state.formValues}
              validationSchema={signupSchema}
              onSubmit={(values) => {
                let accountType = this.state.accountType;
                let TermsConditions = this.state.TermsConditions;
                let finalValues = {...values, accountType, TermsConditions};
                console.log(finalValues);
                this.props.navigation.navigate('Verify');
              }}>
              {(formikprops) => (
                <>
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
                      Create a new Account
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
                      onChangeText={formikprops.handleChange('username')}
                      value={formikprops.values.username}
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
                      onChangeText={formikprops.handleChange('password')}
                      value={formikprops.values.password}
                      secureTextEntry={true}
                    />
                  </View>
                  <View style={globalStyles.inputContainer}>
                    <Icon
                      name="phone"
                      size={20}
                      color="rgba(225,225,225,0.5)"
                      style={styles.iconStyle}
                    />
                    <TextInput
                      placeholder="Phone No."
                      keyboardType="numeric"
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
                      onChangeText={formikprops.handleChange('phoneno')}
                      value={formikprops.values.phoneno}
                    />
                  </View>
                  <View style={globalStyles.inputContainer}>
                    <Icon
                      name="account-check"
                      size={20}
                      color="rgba(225,225,225,0.5)"
                      style={styles.iconStyle}
                    />
                    <DropDownPicker
                      items={[
                        {label: 'Player', value: 'Player'},
                        {label: 'Organiser', value: 'Organiser'},
                        {label: 'Business', value: 'Business'},
                      ]}
                      onChangeItem={(item) =>
                        this.setState({
                          ...this.state,
                          accountType: item.value,
                        })
                      }
                      defaultValue={this.state.accountType}
                      placeholder="Account Type"
                      arrowStyle={{
                        backgroundColor: 'rgba(225,225,225,0.5)',
                        borderRadius: 50,
                      }}
                      containerStyle={{height: 30, width: 250, margin: 0}}
                      style={{
                        backgroundColor: 'none',
                        borderColor: '#00004C',
                        borderBottom: 2,
                        borderBottomColor: 'rgba(225,225,225,0.5)',
                        padding: 0,
                        margin: 0,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                      }}
                      selectedLabelStyle={{
                        color: 'white',
                        fontSize: 16,
                        fontFamily: 'OpenSans-Regular',
                        padding: 0,
                        margin: 0,
                      }}
                      placeholderStyle={{
                        color: 'rgba(225,225,225,0.5)',
                        fontSize: 16,
                        fontFamily: 'OpenSans-Regular',
                        padding: 0,
                        margin: 0,
                      }}
                      labelStyle={{
                        color: 'black',
                        fontFamily: 'OpenSans-Regular',
                      }}
                      dropDownStyle={{backgroundColor: '#fafafa'}}
                    />
                  </View>
                  <View style={globalStyles.inputContainer}>
                    <CheckBox
                      value={this.state.TermsConditions}
                      onValueChange={() =>
                        this.setState({
                          ...this.state,
                          TermsConditions: !this.state.TermsConditions,
                        })
                      }
                      tintColors={{
                        true: '#AA396D',
                        false: 'rgba(255,255,255,0.5)',
                      }}
                    />
                    <Text style={styles.TCText}>
                      I have accepted the{' '}
                      <Text style={styles.TCLink}>Terms & Conditions</Text>
                    </Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <FlatButton
                      text={'Sign Up'}
                      onPress={formikprops.handleSubmit}
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
                      Already have an account?{' '}
                      <Text style={styles.TCLink} onPress={this.handleSignUp}>
                        Sign In
                      </Text>
                    </Text>
                  </View>
                </>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    backgroundColor: '#AA396D',
  },
  signUpSlider: {
    backgroundColor: '#020D4D',
    paddingVertical: '5%',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
  firstCircle: {
    position: 'absolute',
    width: 250,
    height: 250,
    top: 120,
    right: -50,
    borderRadius: 50,
    opacity: 0.5,
  },
  secondCircle: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 80,
    left: 140,
    borderRadius: 50,
    opacity: 0.8,
  },
  firstSquare: {
    position: 'absolute',
    width: '30%',
    height: '50%',
    top: 60,
    left: -50,
    borderRadius: 10,
    opacity: 0.7,
    transform: [{rotateZ: '45deg'}],
  },
  iconStyle: {
    marginRight: 5,
  },
});

export default SignUp;
