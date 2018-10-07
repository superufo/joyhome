import React from 'react'
import { Text } from 'react-native'
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import MainScreen from './screens/main/Index';
import RecommendScreen from './screens/recommend/Index';
import ReportScreen from './screens/report/Index';
import MyScreen from './screens/my/Index';

import MyStack from './navigators/MyStack';

const TabNavigation = TabNavigator({
    mainScreen: { screen: MainScreen, header: null },
    recommendScreen: { screen: RecommendScreen, header: null },
    reportScreen: { screen: ReportScreen, header: null },
    myStack: MyStack
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    <Button 
                    vertical
                    active={props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate('mainScreen')}
                    >
                        <Icon name='home' />
                        <Text style={{ color: 'white' }}>主页</Text>
                    </Button>

                    <Button 
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate('recommendScreen')}
                    >
                        <Icon name='paper' />
                        <Text style={{ color: 'white' }}>推荐</Text>
                    </Button>

                     <Button
                        vertical
                        active={props.navigationState.index === 2}
                        onPress={() => props.navigation.navigate('reportScreen')}
                        >
                            <Icon name='navigate' />
                            <Text style={{ color: 'white' }}>信息</Text>
                     </Button>

                     <Button
                            vertical
                            active={props.navigationState.index === 3}
                            onPress={() => props.navigation.navigate('myStack')}
                            >
                                <Icon name='person' />
                                <Text style={{ color: 'white' }}>我的</Text>
                   </Button>


                </FooterTab>
            </Footer>
        );
    }
});

export default TabNavigation