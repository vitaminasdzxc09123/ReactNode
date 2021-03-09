import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'


import LoginScreen from './src/screens/LoginScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import ShopScreen from './src/screens/ShopScreen'
import VyoScreen from './src/screens/Vyo/VyoScreen'
import RestaurantsScreen from './src/screens/RestaurantsScreen'
import SignupScreen from './src/screens/SignupScreen'
import BlockCard from './src/screens/BlockCard';
import RitaScreen from './src/screens/Rita/RitaScreen';
import CenterScreen from './src/screens/Center/CenterScreen'
import AppleScreen from './src/screens/Apple/AppleScreen'
import PapayaScreen from './src/screens/Papaya/PapayaScreen'
import PanskaScreen from './src/screens/Panska/PanskaScreen'
import StreetScreen from './src/screens/Street/StreetScreen'
import DiboccaScreen from './src/screens/Dibocca/DiboccaScreen';
import BlablaScreen from './src/screens/Blabla/BlablaScreen';
import GustoScreen from './src/screens/Gusto/GustoScreen';
import BartkaScreen from './src/screens/Bartka/BartkaScreen';
import ChaikovskyScreen from './src/screens/Chaikovsky/ChaikovskyScreen';
import BaronScreen from './src/screens/Baron/BaronScreen';
import BrunoScreen from './src/screens/Bruno/BrunoScreen';
import RoomScreen from './src/screens/Room/RoomScreen';
import ShoshoScreen from './src/screens/Shosho/ShoshoScreen';
import SoloScreen from './src/screens/Solo/SoloScreen';
import ReberniaScreen from './src/screens/Rebernia/ReberniaScreen';
import YokiScreen from './src/screens/Yoki/YokiScreen';
import OzzyScreen from './src/screens/Ozzy/OzzyScreen';
import GrandScreen from './src/screens/Grand/GrandScreen';
import VidenScreen from './src/screens/Viden/VidenScreen';
import ContraScreen from './src/screens/Contra/ContraScreen';
import ZoneScreen from './src/screens/Zone/ZoneScreen';
import MetroScreen from './src/screens/Metro/MetroScreen';
import EpicentrScreen from './src/screens/Epicentr/EpicentrScreen';
import GarderobScreen from './src/screens/Garderob/GarderobScreen';
import AshanScreen from './src/screens/Ashan/AshanScreen';
import ZolotaScreen from './src/screens/Zolota/ZolotaScreen';










const  Stack = createStackNavigator();

const App = ({navigation }) => {
   const [isloggedin,setLogged] = useState(null)
    
   const detectLogin= async ()=>{
    const token = await AsyncStorage.getItem('token')
    if(token){
        setLogged(true)
    }else{
        setLogged(false)
    }
 }
useEffect(()=>{
   detectLogin()
},[])

  return (

    <NavigationContainer>
      <Stack.Navigator
      headerMode="none"
      >
        <Stack.Screen name="login" component={LoginScreen}/>
        
        
        <Stack.Screen name="Block" component={BlockCard}/> 
        
         <Stack.Screen name="Restaurants" component={RestaurantsScreen}/> 
        
         <Stack.Screen name="Shop" component={ShopScreen}/> 
         <Stack.Screen name="Rita" component={RitaScreen}/> 
         <Stack.Screen name="Vyo" component={VyoScreen}/> 
         <Stack.Screen name="Center" component={CenterScreen}/> 
         <Stack.Screen name="Apple" component={AppleScreen}/> 
         <Stack.Screen name="Papaya" component={PapayaScreen}/> 
         <Stack.Screen name="Panska" component={PanskaScreen}/> 
         <Stack.Screen name="Street" component={StreetScreen}/> 
         <Stack.Screen name="Dibocca" component={DiboccaScreen}/>
         <Stack.Screen name="Blabla" component={BlablaScreen}/> 
         <Stack.Screen name="Gusto" component={GustoScreen}/> 
         <Stack.Screen name="Bartka" component={BartkaScreen}/> 
         <Stack.Screen name="Chaikovsky" component={ChaikovskyScreen}/> 
         <Stack.Screen name="Baron" component={BaronScreen}/> 
         <Stack.Screen name="Bruno" component={BrunoScreen}/> 
         <Stack.Screen name="Room" component={RoomScreen}/> 
         <Stack.Screen name="Shosho" component={ShoshoScreen}/>
         <Stack.Screen name="Solo" component={SoloScreen}/> 
         <Stack.Screen name="Rebernia" component={ReberniaScreen}/> 
         <Stack.Screen name="Yoki" component={YokiScreen}/>
         <Stack.Screen name="Ozzy" component={OzzyScreen}/>  
         <Stack.Screen name="Grand" component={GrandScreen}/> 
         <Stack.Screen name="Viden" component={VidenScreen}/> 
         <Stack.Screen name="Contra" component={ContraScreen}/>   
         <Stack.Screen name="Zone" component={ZoneScreen}/>   
         <Stack.Screen name="Metro" component={MetroScreen}/>  
         <Stack.Screen name="Epicentr" component={EpicentrScreen}/>  
         <Stack.Screen name="Garderob" component={GarderobScreen}/>  
         <Stack.Screen name="Ashan" component={AshanScreen}/>  
         <Stack.Screen name="Zolota" component={ZolotaScreen}/>  
         <Stack.Screen name="loading" component={LoadingScreen}/>
        
        
        <Stack.Screen name="signup" component={SignupScreen}/>
            
          
            
            
      </Stack.Navigator>
    </NavigationContainer>
  

  );
  
};



export default App;
