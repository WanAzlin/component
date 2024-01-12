import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  )
};

const Login = () => {
  
    return <View style={{flex: 1, backgroundColor: "#FFFFFF",  }} >
      
      <Text>Login</Text>
         
    </View>

}
const Signup = () => {
  
    return <View style={{flex: 1, backgroundColor: "#FFFFFF",  }} >
      
      <Text>Signup</Text>
         
    </View>

}
export default tabs

const styles = StyleSheet.create({});