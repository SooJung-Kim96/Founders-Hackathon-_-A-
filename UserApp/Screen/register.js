import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login.js'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.titleView}>
        <Text style = {styles.title}>REGISTER</Text>
      </View>
      <View style = {styles.inputView}>
        <TextInput style = {styles.input} value = {'id'}></TextInput>
        <TextInput style = {styles.input} value = {'pwd'}></TextInput>
      </View>
      <View>
        <TouchableOpacity style={[styles.touchable, {backgroundColor : 'black'}]}
        onPress = {() => navigation.navigate('Login')}>
          <Text style = {{color : 'white', fontWeight: 'bold'}}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touchable, {backgroundColor : 'yellow'}]}>
          <Text style = {{color : 'black', fontWeight: 'bold'}}>KAKAO 로그인</Text>
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
const Register = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );  
}

export default Register;