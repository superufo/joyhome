import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from '../../components/forms/LoginForm';

import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';

class LoginScreen extends Component {
   render() {
       return (
       <Container>
              <Header>
               <Left>
                 <Button transparent  onPress={() => this.props.navigation.goBack()} >
                   <Icon name='arrow-back' />
                 </Button>
               </Left>
               <Body>
                 <Title>登陆</Title>
               </Body>
               <Right>
                 <Button transparent>
                   <Icon name='menu' />
                 </Button>
               </Right>
             </Header>

             <Content>
                   <LoginForm />
             </Content>
         </Container>
       );
     }
}

export default  LoginScreen;