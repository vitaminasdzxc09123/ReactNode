import React,{useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import { SafeAreaView, StyleSheet, ScrollView, View, Text,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'

const SignupScreen = (props) => {

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')

  const sendCred=async (props)=>{
    fetch("http://10.0.2.2:8000/signup",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "email":email,
      "password":password
    })
  })
    .then(res=>res.json())
    .then(async (data)=>{
          try {
            await AsyncStorage.setItem('token', data.token)
            props.navigation.replace("home")
           } catch (e) {
            console.log("error hai",e)
           }
    })
  }
  return (
    <>
     <LinearGradient 
     start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
     locations={[0.1, 0.8]}
     colors={['#A770EF', '#4568DC']} style={styles.linearGradient}>
   <KeyboardAvoidingView behavior="position">
  
 

   <Text
   style={{
     color: "white",
     fontSize:30,
     marginLeft:100,
     marginTop:140
   }}
   >Registration
   </Text>

   <TextInput
     label='Email'
     mode="outlined"
     value={email}
     style={{marginLeft:18,marginRight:18,marginTop:18}}
     theme={{colors:{primary:"blue"}}}
     onChangeText={(text)=>setEmail(text)}
   />
   <TextInput
     label='password'
     mode="outlined"
     secureTextEntry={true}
     value={password}
     onChangeText={(text) => {setPassword(text)}}
      style={{marginLeft:18,marginRight:18,marginTop:18}}
      theme={{colors:{primary:"blue"}}}
   />
    <Button 
     mode="contained" 
     style={{marginLeft:18,marginRight:18,marginTop:18}}
     onPress={() => sendCred(props) }>
    signup
  </Button>
  <TouchableOpacity>
  <Text
   style={{
     color: "white",
     fontSize:18,
     marginLeft:90,
     marginTop:20
   }}
     onPress={()=>props.navigation.replace("login")}
   
   >already have a account</Text>
  </TouchableOpacity>



</KeyboardAvoidingView>
</LinearGradient>
   </>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  

  },
});



export default SignupScreen;
