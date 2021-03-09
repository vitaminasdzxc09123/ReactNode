import React from 'react';

import { View,  Image } from 'react-native';
import { ScrollView,  TouchableOpacity } from 'react-native-gesture-handler';



export default class ModelCard extends React.Component{
    render(){
        return(
             
 <View>
      <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         style={{marginTop: 30, marginLeft:-15}}>
      <TouchableOpacity>
      <View style={{
         backgroundColor: "#FEFEFE",
         borderRadius:20,
          width:229,
          height:199,
          marginLeft:30
                    }}>
      <Image source={require('../image/Restaurants/Blabla/blabla2.jpg')}
         style={{width:222,borderRadius:20, height:192, marginLeft:3,marginTop:3.5}}/>
       </View>
     </TouchableOpacity>

 <View   style={{
         height:200,
         borderRadius:15,
         padding:5,
         marginHorizontal: 10,
         marginLeft:-5,
            }}>
 </View>
     <TouchableOpacity>
         <View style={{
            backgroundColor: "#FEFEFE",
            borderRadius:20,
            width:229,
            height:199,
                       }}>
   
 <Image  source={require('../image/Restaurants/Blabla/blabla1.jpg')}
         style={{width:222,borderRadius:20, height:192,marginLeft:3,marginTop:3.5}}/>
  </View>
     </TouchableOpacity>

 <View   style={{
         height:200,
         borderRadius:15,
         padding:5,
         marginHorizontal: 10,
         marginLeft:-5,
                }}>

 </View>

     <TouchableOpacity>
     <View style={{
            backgroundColor: "#FEFEFE",
            borderRadius:20,
            width:229,
            height:199,
                       }}>
   
 <Image source={require('../image/Restaurants/Blabla/blabla.jpg')}
        style={{width:222,borderRadius:20, height:192,marginLeft:3,marginTop:3.5}}/>
   </View>
      </TouchableOpacity>

 <View   style={{
         height:200,
         borderRadius:15,
         padding:5,
         marginHorizontal: 10,
         marginLeft:-5,
                }}>
      </View>
      <TouchableOpacity>
      <View style={{
            backgroundColor: "#FEFEFE",
            borderRadius:20,
            width:229,
            height:199,
                       }}>
   
 <Image  source={require('../image/Restaurants/Blabla/blabla4.jpg')}
         style={{width:222,borderRadius:20, height:192,marginLeft:3,marginTop:3.5}}/>
     </View>
       </TouchableOpacity>

 <View   style={{
         height:200,
         borderRadius:15,
         padding:5,
         marginHorizontal: 10,
         marginLeft:-5,
                }}>
      </View>
 <TouchableOpacity>
 <View style={{
            backgroundColor: "#FEFEFE",
            borderRadius:20,
            width:229,
            height:199,
                       }}>
   
 <Image  source={require('../image/Restaurants/Blabla/blabla3.jpg')}
         style={{width:222,borderRadius:20,    height: 192,marginLeft:3,marginTop:3.5 }}/>
    </View>
      </TouchableOpacity>

      <View   style={{
         height:200,
         borderRadius:15,
         padding:5,
         marginHorizontal: 10,
         marginLeft:-5,
                }}>
      </View>
 <TouchableOpacity>
 <View style={{
            backgroundColor: "#FEFEFE",
            borderRadius:20,
            width:229,
            height:199,
            marginLeft:1,
                       }}>
   
 <Image  source={require('../image/Restaurants/Blabla/blabla9.jpg')}
         style={{width:222,borderRadius:20, height:192,marginLeft:3,marginTop:3.5}}/>
     </View>
     </TouchableOpacity>
     <View   style={{
         height:200,
         borderRadius:15,
         padding:5,
         marginHorizontal: 10,
         marginLeft:-5,
                }}>
      </View>
     <TouchableOpacity>
 <View style={{
            backgroundColor: "#FEFEFE",
            borderRadius:20,
            width:229,
            height:199,
            marginLeft:1,
                       }}>
   
 <Image  source={require('../image/Restaurants/Blabla/blabla10.jpg')}
         style={{width:222,borderRadius:20, height:192,marginLeft:3,marginTop:3.5}}/>
     </View>
     </TouchableOpacity>

     <View   style={{
         height:200,
         borderRadius:15,
         padding:5,
         marginHorizontal: 10,
         marginLeft:-5,
                }}>
      </View>

       </ScrollView>
                 </View>
             
        )
    }
}