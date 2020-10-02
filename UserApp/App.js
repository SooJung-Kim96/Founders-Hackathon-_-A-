import React from 'react';
import Login from './Screen/login.js'
import Register from './Screen/register.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.titleView}>
        <Text style = {styles.title}>SOME</Text>
      </View>
      <View style = {styles.buttonView}>
        <View style = {styles.buttons}>
          <TouchableOpacity style={[styles.touchable, {backgroundColor : 'gray'}]}
          onPress = {() => navigation.navigate('Login')}>
            <Text style = {{color : 'black', fontWeight: 'bold'}}>LOG IN</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.buttons}>
          <TouchableOpacity style={[styles.touchable, {backgroundColor : 'black'}]}
          onPress = {() => navigation.navigate('Register')}>
          <Text style = {{color : 'white', fontWeight: 'bold'}}>REGISTER</Text>
          </TouchableOpacity>
         </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  titleView : {
    flex : 7,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'skyblue'
  },
  title : {
    fontSize : 40,
    fontWeight : 'bold'
  },
  buttonView : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-around'

  },
  buttons : {
    flex:1,
    justifyContent : 'center',
    marginRight : 10,
    marginLeft : 10
  },
  touchable : {
    height: '70%',
    marginTop: 10, 
    justifyContent : 'center', 
    alignItems : 'center'
  }
});

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

export default App;