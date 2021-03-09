import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import ModelCard from '../Zone/ModelCard';
import ListCard from '../Zone/ListCard';
import AntDesign from 'react-native-vector-icons/AntDesign';


import LinearGradient from 'react-native-linear-gradient';

 const ZoneScreen = ({navigation}) => {
    
     return (
        <LinearGradient 
        start={{x: 0.0, y: 0.25}} end={{x: 1.2, y: 1.0}}
        locations={[0.1, 3.0]}
        colors={['#A7BFE8', '#D3CCE3']} style={styles.linearGradient}>
         <ImageBackground source={require('../image/Restaurants/Zone/zone8.jpg')}
         style={{height:"66%",width: "100%"}}
         imageStyle={{borderRadius:40,marginTop:-40,
         }}>
     <AntDesign name="leftcircleo"  style={styles.iconStyle}
         size={30} 
         onPress={() => navigation.goBack()}/>
         <ListCard/>
         <ModelCard/>
     </ImageBackground>

   
    
</LinearGradient>
 )}

  const styles = StyleSheet.create({
     iconStyle:{
     marginTop: 5,
     marginLeft:10,
     color: 'white'
    },
       linearGradient: {
       flex: 1,
      },})

  export default ZoneScreen