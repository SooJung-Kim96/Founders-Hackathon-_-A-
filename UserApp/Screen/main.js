import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';

const MainScreen = ({ route, navigation }) => {
    const { userId } = route.params;
    const { userPwd } = route.params;
    return (
        <SafeAreaView style = {styles.container}>
            <View>
                <Text>map Api</Text>
            </View>
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

// function SettingsScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }

//   const Tab = createBottomTabNavigator();
// const Main = () => {
//   return (
//     <Tab.Navigator>
//         <Tab.Screen name="Main" component={MainScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );  
// }

export default MainScreen;