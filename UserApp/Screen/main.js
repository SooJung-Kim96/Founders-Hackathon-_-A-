import React from 'react';
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

const Main = ({ route, navigation }) => {
    const { userId } = route.params;
    const { userPwd } = route.params;
    return (
        <SafeAreaView style = {styles.container}>
        <View style = {styles.titleView}>
            <Text style = {styles.title}>{JSON.stringify(userId)}</Text>
            <Text style = {styles.title}>{JSON.stringify(userPwd)}</Text>
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

// const Stack = createStackNavigator();
// const RegisterScreen = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Register">
//         <Stack.Screen name="Register" component={Register} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );  
// }

export default Main;