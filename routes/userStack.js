import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Loading from '../src/components/UserScreens/Loading';
import SignUp from '../src/components/UserScreens/SignUp';
import SplashScreen from '../src/components/UserScreens/SplashScreen';
import Verify from '../src/components/UserScreens/Verify';
import Login from '../src/components/UserScreens/Login';

const userScreens = {
  Splash: {
    screen: SplashScreen,
    navigationOptions: {},
  },
  Loading: {
    screen: Loading,
    navigationOptions: {},
  },
  SignUp: {
    screen: SignUp,
  },
  Verify: {
    screen: Verify,
  },
  Login: {
    screen: Login,
  },
};

const userStack = createStackNavigator(userScreens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});
export default createAppContainer(userStack);
