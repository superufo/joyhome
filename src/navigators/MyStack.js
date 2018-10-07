import { createStackNavigator } from 'react-navigation';

import MyScreen from '../screens/my/Index';
import WelcomeScreen from '../screens/my/Welcome';
import LoginScreen from '../screens/my/Login';

const MyStack = createStackNavigator(
    {
        myScreen: { screen: MyScreen, header: null },
        welcomeScreen: { screen: WelcomeScreen, header: null },
        loginScreen: { screen: LoginScreen, header: null }
    },
    {
        initialRouteName: 'myScreen',
        navigationOptions: {
             header: null
        }
    }
);

export default MyStack;