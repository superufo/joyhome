import { createStackNavigator } from 'react-navigation';
import TabNavigation from './TabNavigation'

const RootStack = createStackNavigator(
    {
        tabFooter: TabNavigation
    },
    {
        initialRouteName: 'tabFooter',
        navigationOptions: {
            header: null
        }
    }
);

export default RootStack;
