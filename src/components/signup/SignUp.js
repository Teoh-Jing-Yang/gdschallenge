import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useState} from "react";
import SignUpApi from "./SignUpApi"

export default function SignUp({navigation}) {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [smartMeterNo,setSmartMeterNo] = useState('')

  const handleUserSignUp = async() => {
    let request = {
      "email":email,
      "password":password,
      "smartMeterNo":smartMeterNo
    }
    const response = await SignUpApi.userSignUp(request)
    console.log("SignUp response",response)
  }
  
  return (
    <View style={styles.container}>
      <Text>Sign Up Page</Text>
      <TextInput
        placeholder='Email'
        onChangeText={(value)=>setEmail(value)}
        />
        <TextInput
        placeholder='Password'
        onChangeText={(value)=>setPassword(value)}
        />
        <TextInput
        placeholder='Smart Meter No'
        onChangeText={(value)=>setSmartMeterNo(value)}
        />
        <View style={styles.signUpButton}>
        <TouchableOpacity onPress = {()=>{handleUserSignUp(),navigation.navigate("Dashboard")}}>
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
  signUpButton: {
    width:100,
    height:150,
    textAlign:"center"
  }
});

