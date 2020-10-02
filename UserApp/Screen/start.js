import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
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

export default StartScreen;