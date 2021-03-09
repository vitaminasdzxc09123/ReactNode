import React from 'react';

import { View, Text, Image ,ImageBackground,StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Title from '../screens/Title/Title';
import Title2 from '../screens/Title/Title2';

import LinearGradient from 'react-native-linear-gradient';


const BlockCard =({navigation}) => {
 
return (
 
<LinearGradient 
     start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
     locations={[0.1, 0.8]}
     colors={['#A7BFE8', '#D3CCE3']} style={styles.linearGradient}>
           
 <View style={{
       flexDirection: "row",
       marginTop: 100,
       alignItems: "center",
       paddingHorizontal: 40
                }}>
 </View>
 <Text style={{
        fontSize:35,
         marginTop:-90,
         marginLeft:20,
         color:"#fff",
         fontFamily: "RobotoBold"
                 }}>
          Santrip
 </Text>
 <TouchableOpacity
         style={{
         height: 2 ,
         width: 210 , 
         backgroundColor: "#FEAC5E",
         marginLeft:20,
                   }}>
  </TouchableOpacity>
  <Text style={{
         fontSize:20,
         marginLeft:20,
         paddingVertical:10,
         paddingRight: 80,
         lineHeight:12,
         fontFamily: "RobotoRegular",
         color:"#fff"
                 }}>
         обирай та вiдпочивай
  </Text>              
 <View>


      <View style={{
         height:250,
         marginLeft:-10,
         width:420,
         borderRadius:15,
         padding:10,
         marginTop:10,
                    }}>
 <ScrollView pagingEnabled horizontal style={{}}>

  <ImageBackground source={require('../screens/image/main/Che.png')}
                   style={{width:400,borderRadius:10, height:275,elevation: 6,marginLeft:-5, marginTop:-5}}>
       <Title>Чернівецька міська рада 
        </Title>
         </ImageBackground>
      
  <ImageBackground source={require('../screens/image/main/chnu2.png')}
                   style={{width:410,borderRadius:10, height:250,marginLeft:-5, marginTop:-5}}>
          <Title >Чернівецький національний університет  
            </Title>
              </ImageBackground>
           
  <ImageBackground source={require('../screens/image/main/che3.png')}
                   style={{width:407,borderRadius:10, height:250,marginLeft:-5, marginTop:-5}}>
                 <Title>Вулиця Ольги Кобилянської  
                   </Title>
                     </ImageBackground>

  <ImageBackground source={require('../screens/image/main/che4.png')}
                   style={{width:407,borderRadius:10, height:250,marginLeft:-5, marginTop:-5}}>
                 <Title>Театральна площа
                  </Title>
                    </ImageBackground>

  <ImageBackground source={require('../screens/image/main/che5.png')}
                   style={{width:400,borderRadius:10, height:250,marginLeft:-5, marginTop:-5}}>
                 <Title>Площа Філармонії
                   </Title>
                     </ImageBackground>
                       </ScrollView>
                         </View>
                  
 
  <View style={{
        height: 30 ,
        marginTop:15,
        width: 164, 
        borderRadius: 50 ,
        backgroundColor: "#FFF",
        marginLeft:10,
             }}>
  <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         style={{marginHorizontal: -40, marginTop: 2,marginLeft:2}} >
       
       <TouchableOpacity 
             onPress={()=>navigation.navigate('Restaurants')}
             style={{
             alignItems: "center",
             justifyContent: "center",
             height: 25 ,
             width: 160 , 
             borderRadius: 50 ,
           
             backgroundColor: "#A7BFE8",
   
             
                  }}><Title2>Restaurants</Title2>
                  
      </TouchableOpacity>  
      
      </ScrollView>
          </View>
          <View style={{
       height: 30 ,
        marginTop:10,
        width: 164, 
        borderRadius: 50 ,
        backgroundColor: "#FFF",
        marginLeft:10,
             }}>
  <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         style={{marginHorizontal: -40, marginTop: 2,marginLeft:-10}} >
       <TouchableOpacity 
             onPress={()=>navigation.navigate('Shop')}
             style={{
             alignItems: "center",
             justifyContent: "center",
             height: 25 ,
             width: 160 , 
             borderRadius: 50 ,
             backgroundColor: "#A7BFE8",
             marginLeft:12,
                  }}>
<Title2>Shops</Title2>

      </TouchableOpacity>
      
        </ScrollView>
          </View>
            </View>

 <Text style={{
       color:"#FFF",
       fontFamily:"RobotoRegular",
       marginTop:-10,
       marginLeft:240,
       fontSize:19,
              }}>
         Recommended
   </Text>
 <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         style={{marginHorizontal: -40, marginTop: 15, marginLeft:-2}}>
             
 <TouchableOpacity onPress={()=>navigation.navigate('Rita')}>
       <View 
             style={{
             backgroundColor: "#FEFEFE",
             height:250,
             marginLeft:10,
             width:220,
             borderRadius:15,
             padding:5,
                    }}>
 
 <Image source={require('../screens/image/Restaurants/RitaSteinberg/caption.jpg')}
        style={{width:210,borderRadius:10, height:170}}/>
                 
   <View style={{
         flexDirection: "row",
         width:220,
         alignItems: "center"
                  }}>
   <View style={{
         paddingHorizontal:5,
         paddingVertical:9
                  }}>
   <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:11,
         marginTop:-7,
         color:"#a2a2db"
                 }}>
          
Дуже атмосферний заклад, поринули в Чернівці часів існування культурних євреїв))) смачно, приємно, отримали величезне задоволення.
   </Text>
      </View>
        </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Vyo')}>
                
   <View style={{
         backgroundColor: "#FEFEFE",
         height:250,
         marginLeft:10,
         width:220,
         borderRadius:15,
         padding:5
                }}>
 
   <Image source={require('../screens/image/Restaurants/vyo/vjo7.jpg')}
           style={{width:210,borderRadius:10, height:170}}/>
                 
   <View style={{
         flexDirection: "row",
         width:220,
         alignItems: "center"
                  }}>
   <View style={{
         paddingHorizontal:5,
         paddingVertical:9
                  }}>
   <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:11,
         marginTop:-7,
         color:"#a2a2db"
                 }}>
          
          Это место - нечто среднее между пабом, баром и кабаре. В любом случае - это одно из самых добрых и радушных мест с прекрасным дружеским обслуживанием.
   </Text>
      </View>
        </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity
                onPress={()=>navigation.navigate('Center')}
               >
   <View style={{
         backgroundColor: "#FEFEFE",
         height:250,
         marginLeft:10,
         width:220,
         borderRadius:15,
         padding:5
                    }}>
 
   <Image source={require('../screens/image/shop/Center/center7.jpg')}
           style={{width:210,borderRadius:10, height:170}}/>
                 
   <View style={{
         flexDirection: "row",
         width:220,
         alignItems: "center"
                  }}>
   <View style={{
         paddingHorizontal:5,
         paddingVertical:9
                  }}>
   <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:11,
         color:"#a2a2db"
                 }}>
          
        Надзвичайно комфортний продуктовий магазин в якому хочеться щось купляти  </Text>
      </View>
        </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
                onPress={()=>navigation.navigate('Apple')}
               >
   <View style={{
         backgroundColor: "#FEFEFE",
         height:250,
         marginLeft:10,
         width:220,
         borderRadius:15,
         padding:5
                    }}>
 
   <Image source={require('../screens/image/shop/Apple/tone.jpg')}
           style={{width:210,borderRadius:10, height:170}}/>
                 
   <View style={{
         flexDirection: "row",
         width:220,
         alignItems: "center"
                  }}>
   <View style={{
         paddingHorizontal:5,
         paddingVertical:9
                  }}>
   <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:11,
         marginTop:-5,
         color:"#a2a2db"
                 }}>
          
          Купил вчера тут macbook pro 2015 (15"). Покупкой довольный, обслуживание хорошое, доступные цены и большой выбор продукции. Спасибо.
   </Text>
      </View>
        </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
                onPress={()=>navigation.navigate('Papaya')}
               >
   <View style={{
         backgroundColor: "#FEFEFE",
         height:250,
         marginLeft:10,
         width:220,
         borderRadius:15,
         padding:5
                    }}>
 
   <Image source={require('../screens/image/shop/Papaya/papaya1.png')}
           style={{width:210,borderRadius:10, height:170}}/>
                 
   <View style={{
         flexDirection: "row",
         width:220,
         alignItems: "center"
                  }}>
   <View style={{
         paddingHorizontal:5,
         paddingVertical:9
                  }}>
   <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:11,
         color:"#a2a2db"
                 }}>
          
Привабливий магазин з доступними цiнами на чудовою якiстю
   </Text>
      </View>
        </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
                onPress={()=>navigation.navigate('Panska')}
               >
   <View style={{
         backgroundColor: "#FEFEFE",
         height:250,
         marginLeft:10,
         marginRight:10,
         width:220,
         borderRadius:15,
         padding:5
                    }}>
 
   <Image source={require('../screens/image/Restaurants/Panska/panska3.jpeg')}
           style={{width:210,borderRadius:10, height:170}}/>
                 
   <View style={{
         flexDirection: "row",
         width:220,
         alignItems: "center"
                  }}>
   <View style={{
         paddingHorizontal:5,
         paddingVertical:9
                  }}>
   <Text style={{
         fontFamily:"RobotoRegular",
         fontSize:11,
         color:"#a2a2db"
                 }}>
          
          Отличное расположение. Большое, просторное помещение, много места. Обслужили хорошо, неторопливо, но и не противно-медленно. 
   </Text>
      </View>
      
        </View>

   
          </View>
          
          </TouchableOpacity>
          <View   style={{
         height:200,
         borderRadius:15,
         padding:5,
         marginHorizontal: 10,
         marginLeft:20,
                }}>
      </View>
                </ScrollView>

                   </LinearGradient>
 )};
 
 const styles = StyleSheet.create({
        iconStyle:{
        marginTop: 5,
        marginLeft:10,
        color: 'white'
      },
       linearGradient: {
       flex: 1,
      },
       contentContainer:{
       padding:5,
     },
     Image:{
           
     }
})

export default BlockCard;
































































// import React from 'react';
// import {View, StyleSheet , Image} from 'react-native';
// import Title from './Title'
// import Subtitle from './Subtitle'


// const BlockCard = () => {
//     return(
        // <View style ={styles.container}>
        //     <Image source={require('../image/stepan.jpg')} style={styles.image}/>
        //     <View style = {styles.contentContainer}>
        //         <Title>Some Title</Title>
        //         <Subtitle>Some description</Subtitle>
        //     </View>
        // </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         width : '100%',
//         height: 300,
//         borderRadius: 8 ,
//         overflow: 'hidden',
//         backgroundColor: 'blue'
//     },
//     image: {
//         width: '100%',
//         height: 200
//     },
//     contentContainer :{
//         padding : 5,
//     }
// })

// export default BlockCard;