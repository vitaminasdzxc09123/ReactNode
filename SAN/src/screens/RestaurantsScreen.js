import React from 'react';
import { View, StyleSheet , Image, Text} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Title3 from './Title/Title3'
import Title4 from './Title/Title4'

 const RestaurantsScreen = ({navigation}) => {
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
         style={{marginHorizontal: -30, marginTop: 3,}}>
            <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:190,
         color:"white"}}>Dibocca</Text>

<View        style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>      
      <TouchableOpacity
      onPress={()=>navigation.navigate('Dibocca')}>
        
      <Image source={require('../screens/image/Restaurants/Dibocca/dibocca11.png')}
         style={{width:350,borderRadius:16, height:220, marginLeft:0}}
         />
           <Title4>11:00-00:00</Title4>
         <Title3> Італійська, Середземноморська</Title3>
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
         marginLeft:155,
         color:"white"}}>Rita Steinberd</Text>
 <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>   
 <TouchableOpacity onPress={()=>navigation.navigate('Rita')}>
        
        <Image source={require('../screens/image/Restaurants/RitaSteinberg/caption.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
         <Title4>10:00-23:00</Title4>
         <Title3>Близькосхідна, Східноєвропейська, Українська, Ізраїльська</Title3>
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
         marginLeft:175,
         color:"white"}}>Bla Bla Bar</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  

     <TouchableOpacity onPress={()=>navigation.navigate('Blabla')}>
        
        <Image source={require('../screens/image/Restaurants/Blabla/blabla8.jpeg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>11:00-23:00</Title4>
         <Title3>Японська, Бар, Кафе, Суші, Азіатська, Бари з рестораном</Title3>
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
         marginLeft:170,
         color:"white"}}>Gusto coffee</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Gusto')}>
        
        <Image source={require('../screens/image/Restaurants/Gusto/gusto6.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>9:00-22:00</Title4>
         <Title3> українська кухня, кав'ярня </Title3>
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
         color:"white"}}>БАРТКА</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Bartka')}>
        
        <Image source={require('../screens/image/Restaurants/Bartka/Bartka.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>12:00-00:00</Title4>
         <Title3> Європейська, Паб, Гастропаб, Українська</Title3>
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
         marginLeft:175,
         color:"white"}}>Chaikovsky</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Chaikovsky')}>
        
        <Image source={require('../screens/image/Restaurants/Chaikovsky/chaikovsky.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>11:00-23:00</Title4>
         <Title3> Середземноморська, Європейська, Сучасна, Східноєвропейська</Title3>
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
         color:"white"}}>Baron</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Baron')}>
        
        <Image source={require('../screens/image/Restaurants/Baron/baron3.jpg')}
           style={{width:360,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>12:00-03:00</Title4>
         <Title3> Європейська, Східноєвропейська, Ізраїльська, Українська</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:30,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:195,
         color:"white"}}>Bruno</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Bruno')}>
        
        <Image source={require('../screens/image/Restaurants/Bruno/bruno.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>09:30-23:00</Title4>
         <Title3>Європейська, Українська</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:30,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:165,
         color:"white"}}>ROOM ROOM</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Room')}>
        
        <Image source={require('../screens/image/Restaurants/Room/room.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>09:00-22:00</Title4>
         <Title3> Кав'ярня, Українська кухня</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:190,
         color:"white"}}>ШО ШО</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Shosho')}>
        
        <Image source={require('../screens/image/Restaurants/Shosho/shosho1.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>10:00-23:00</Title4>
         <Title3> Iталійська, Українська, Грузинська </Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:200,
         color:"white"}}>SOLO</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Solo')}>
        
        <Image source={require('../screens/image/Restaurants/Solo/solo6.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>17:00-04:00</Title4>
         <Title3> Бар і клуб, Караоке-бар, танцювальний клуб і дискотека</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:180,
         color:"white"}}>РЕБЕРНЯ</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Rebernia')}>
        
        <Image source={require('../screens/image/Restaurants/Rebernia/rebernia.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>12:00-01:00</Title4>
         <Title3> Ресторан української кухні</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:205,
         color:"white"}}>Yoki</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Yoki')}>
        
        <Image source={require('../screens/image/Restaurants/Yoki/yoki.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>11:00-23:00</Title4>
         <Title3> Японська, Суші, Азіатська, Морепродукти</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:205,
         color:"white"}}>OZZY</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Ozzy')}>
        
        <Image source={require('../screens/image/Restaurants/Ozzy/ozzy2.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>09:00-23:00</Title4>
         <Title3> Фастфуд , Підходить для вегетаріанців</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:200,
         color:"white"}}>Grand</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Grand')}>
        
        <Image source={require('../screens/image/Restaurants/Grand/grand11.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>08:00-22:00</Title4>
         <Title3>Українська кухня , кав'ярня</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:180,
         color:"white"}}>Вiденська</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Viden')}>
        
        <Image source={require('../screens/image/Restaurants/Viden/viden.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>10:00-23:00</Title4>
         <Title3> Кафе, Європейська, Міжнародна, Центральноєвропейська</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:150,
         color:"white"}}>CONTRABANDA</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Contra')}>
        
        <Image source={require('../screens/image/Restaurants/Contra/contra.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>18:00-04:00</Title4>
         <Title3> COCKTAILS & SPIRITS </Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:10,
        
              }}>
  

     </View>
     <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:22,
         marginTop:-7,
         marginLeft:200,
         color:"white"}}>ZONE</Text>
     <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:270,
             width:360,
             marginLeft:48,
             borderRadius:16,
             padding:5,
                    }}>  
     <TouchableOpacity onPress={()=>navigation.navigate('Zone')}>
        
        <Image source={require('../screens/image/Restaurants/Zone/zone7.jpg')}
           style={{width:350,borderRadius:16, height:220, marginLeft:0}}/>
           <Title4>12:00-23:00</Title4>
         <Title3>Американська Азіатська Вегетаріанська Грузинська</Title3>
       </TouchableOpacity>
  </View>
   <View   style={{
           height:10,
           padding:50,
        
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
     
     export default RestaurantsScreen
