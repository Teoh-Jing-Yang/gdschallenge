import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useState} from "react";
import LoginApi from "./LoginApi"

export default function Login({navigation}) {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleUserLogin = async() => {
    let request = {
      "email":email,
      "password":password
    }
    const response = await LoginApi.userLogin(request)
    console.log("Login response",response)
  
  }
  
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <TextInput
        placeholder='Email'
        onChangeText={(value)=>setEmail(value)}
        />
        <TextInput
        placeholder='Password'
        onChangeText={(value)=>setPassword(value)}
        />
        <View style={styles.loginbutton}>
        <TouchableOpacity onPress = {()=>{handleUserLogin(),navigation.navigate("Dashboard")}}>
            <Text>Login</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.loginbutton}>
        <TouchableOpacity onPress = {()=>{console.log("redirect user to sign up page"),navigation.navigate("SignUp")}}>
            <Text>SignUp</Text>
        </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginbutton: {
    width:100,
    height:150,
    textAlign:"center"
  }
});

