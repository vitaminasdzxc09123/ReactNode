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
      <Image source={require('../image/shop/Garderob/garderob1.jpg')}
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
   
 <Image  source={require('../image/shop/Garderob/garderob2.jpg')}
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
   
 <Image source={require('../image/shop/Garderob/garderob3.jpg')}
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
   
 <Image  source={require('../image/shop/Garderob/garderob4.jpg')}
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
   
 <Image  source={require('../image/shop/Garderob/garderob5.jpg')}
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
   
 <Image  source={require('../image/shop/Garderob/garderob6.jpg')}
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
   
 <Image  source={require('../image/shop/Garderob/garderob7.jpg')}
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