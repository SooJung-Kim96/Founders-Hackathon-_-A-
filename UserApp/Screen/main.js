import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

const MainScreen = ({ navigation }) => {
    // const { userId } = route.params;
    // const { userPwd } = route.params;
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.inputView}>
              <TextInput style = {styles.input} placeholder={'원하는 장소를 검색하세요'}></TextInput>
              <TouchableOpacity style = {styles.touchable}>
                <Text style = {styles.touchText}>검색</Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.map}>
                {/* map api 적용 영역 */}
            </View>
        {/* <View style = {styles.titleView}>
            <Text style = {styles.title}>{JSON.stringify(userId)}</Text>
            <Text style = {styles.title}>{JSON.stringify(userPwd)}</Text>
        </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    margin : 10,
    marginTop : 20,
    marginBottom : 20
  },
  inputView : {
    flex : 1,
    flexDirection:'row'
  },
  input : {
    flex:3,
    fontSize : 20,
    borderColor : 'black',
    borderWidth : 1,
    marginRight : 10
  },
  touchable : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'skyblue'
  },
  touchText : {
    fontSize : 15,
    color : 'black'
  },
  map : {
    flex : 9,
    backgroundColor : 'gray',
    marginTop : 10
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