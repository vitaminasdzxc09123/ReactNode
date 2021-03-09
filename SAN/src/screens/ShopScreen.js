import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground , Image} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView , TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Title3 from './Title/Title3'
import Title4 from './Title/Title4'

 const Shops = ({navigation}) => {
     return (
      <View>
         <LinearGradient 
     start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
     locations={[0.1, 0.8]}
     colors={['#A7BFE8', '#C9D6FF']} style={styles.linearGradient}>
         <AntDesign name="leftcircleo"  style={styles.iconStyle}
      size={30} 
      onPress={() => navigation.goBack()}/>
      <ScrollView
         alwaysBounceVertical
         showsHorizontalScrollIndicator={false}
         style={{marginHorizontal: -30, marginTop: 10}}>

      <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:175,
         color:"white"}}>Street Look</Text>

      <View  style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>     
      <TouchableOpacity
      onPress={()=>navigation.navigate('Street')}>
        
      <Image source={require('../screens/image/shop/Street/street2.jpg')}
         style={{width:350,borderRadius:16, height:220, marginLeft:0}}
         />
            <Title4>10:00-20:00</Title4>
         <Title3> Трендові речі                                       Широкий ассортимент</Title3>
     </TouchableOpacity>
    </View>
 <View   style={{
         height:30,
         padding:10,
         marginHorizontal: 19
            }}>
 </View>
 <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:195,
         color:"white"}}>Метро</Text>

      <View  style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>   
 <TouchableOpacity
      onPress={()=>navigation.navigate('Metro')}>
        
        <Image source={require('../screens/image/shop/Metro/metro.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
         <Title4>07:00-22:00</Title4>
         <Title3>20 240 товарів в асортименті</Title3>
       </TouchableOpacity>
    </View>
   <View   style={{
           height:30,
           padding:10,
           marginHorizontal: 19
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:190,
         color:"white"}}>PAPAYA</Text>

      <View  style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>   
     <TouchableOpacity
      onPress={()=>navigation.navigate('Papaya')}>
        
        <Image source={require('../screens/image/shop/Papaya/papaya1.png')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
                 <Title4>10:00-20:00</Title4>
         <Title3>NEW collection ,
Жіночий одяг ,
Жіноче взуття
</Title3>
       </TouchableOpacity>
     </View>
   <View   style={{
           height:30,
           padding:10,
           marginHorizontal: 19
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:195,
         color:"white"}}>Центр</Text>

      <View  style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>   
     <TouchableOpacity
      onPress={()=>navigation.navigate('Center')}>
        
        <Image source={require('../screens/image/shop/Center/center.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
                   <Title4>08:00-22:00</Title4>
         <Title3>Подарунковi корзини на рiзний смак</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:30,
           padding:10,
           marginHorizontal: 19
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:180,
         color:"white"}}>AppleTone</Text>

      <View  style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>   
     <TouchableOpacity
      onPress={()=>navigation.navigate('Apple')}>
        
        <Image source={require('../screens/image/shop/Apple/tone.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
          <Title4>10:00-19:00</Title4>
         <Title3>appletone – надає  можливість продати, обміняти та придбати</Title3>
       </TouchableOpacity>
    </View>
   <View   style={{
           height:30,
           padding:10,
           marginHorizontal: 19
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:185,
         color:"white"}}>Епiцентр</Text>

      <View  style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>   
     <TouchableOpacity
      onPress={()=>navigation.navigate('Epicentr')}>
        
        <Image source={require('../screens/image/shop/Epicentr/epicentr.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
         <Title4>08:00-21:30</Title4>
         <Title3>Будівництво та ремонт, Побутова техніка, Автотовари i тд...</Title3>
       </TouchableOpacity>
     </View>
   <View   style={{
           height:30,
           padding:10,
           marginHorizontal: 19
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:185,
         color:"white"}}>Garderob</Text>

      <View  style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>   
     <TouchableOpacity
      onPress={()=>navigation.navigate('Garderob')}>
        
        <Image source={require('../screens/image/shop/Garderob/garderob.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
         <Title4>09:00-19:00</Title4>
         <Title3>Магазин брендового одягу, взуття та аксесуарів</Title3>
       </TouchableOpacity>
     </View>
   <View   style={{
           height:30,
           padding:10,
           marginHorizontal: 19
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:200,
         color:"white"}}>Ашан</Text>

      <View  style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>   
     <TouchableOpacity
      onPress={()=>navigation.navigate('Ashan')}>
        
        <Image source={require('../screens/image/shop/Ashan/ashan.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
            <Title4>08:00-23:00</Title4>
         <Title3>Продукти харчування, Одяг, Все для подорожей</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:30,
           padding:10,
           marginHorizontal: 19
              }}>
  
    
     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:165,
         color:"white"}}>ЗолотаКраїна</Text>

      <View  style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>   
     <TouchableOpacity
      onPress={()=>navigation.navigate('Zolota')}>
        
        <Image source={require('../screens/image/shop/Zolota/zolota.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
          <Title4>10:00-20:00</Title4>
         <Title3>сережки, персні, ланцюжки, браслети, підвіски
</Title3>
       </TouchableOpacity>
    </View>
   <View   style={{
           height:30,
           padding:50,
           marginHorizontal: 19
              }}>
  

     </View>
       </ScrollView>
       </LinearGradient>
       </View>
     
       )}
     const styles = StyleSheet.create({
      iconStyle:{
      marginTop: 5,
      marginLeft:10,
      color: 'white'
     }})
     
     export default Shops
