import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './main.js'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [idValue, setIdValue] = React.useState('');
  const [pwdValue, setPwdValue] = React.useState('');

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.titleView}>
        <Text style = {styles.title}>LOGIN</Text>
      </View>
      <View style = {styles.inputView}>
        <TextInput style = {styles.input} placeholder={'id'} 
        onChangeText={text => setIdValue(text)} value = {idValue}></TextInput>
        {/* <Text>{idValue}</Text> */}
        <TextInput style = {styles.input} placeholder = {'pwd'}
         onChangeText={text => setPwdValue(text)} value = {pwdValue}></TextInput>
         <Text>{pwdValue}</Text>
      </View>
      <View>
        <TouchableOpacity style={[styles.touchable, {backgroundColor : 'black'}]}
        onPress = {() => navigation.navigate('Main', {userId : {idValue}, userPwd : {pwdValue}})}>
          {/* 로그인 확인 절차 - db연결 후 진행 */}
          <Text style = {{color : 'white', fontWeight: 'bold'}}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    margin : 10
  },
  titleView : {
    justifyContent : 'center',
    marginBottom : 10
  },
  title : {
    fontSize : 40,
    fontWeight : 'bold'
  },
  inputView : {
    marginBottom : 20
  },
  input : {
    fontSize : 20,
    borderColor : 'black',
    borderWidth : 1,
    marginTop : 10
  },
  touchable : {
    height : 50,
    marginBottom: 10, 
    justifyContent : 'center', 
    alignItems : 'center'
  }
});

const Stack = createStackNavigator();
const Login = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );  
}

export default Login;