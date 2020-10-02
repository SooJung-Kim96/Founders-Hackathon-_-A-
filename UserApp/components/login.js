import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.titleView}>
        <Text style = {styles.title}>LOGIN</Text>
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
  }
});

export default LoginScreen;