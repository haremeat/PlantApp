import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

import { Detail } from '../screens/Detail';

const Home = () => {
    return (
    
     <View style={{
         backgroundColor: "#FFF",
         flex: 1
     }}>
         <View style={{
             backgroundColor:"#00a46c",
             height:"28%",
             borderBottomLeftRadius:20,
             borderBottomRightRadius:20,
             paddingHorizontal: 20
         }}
         >
             <Image source={require('../images/1.png')}
             style={{
                 height: 10,
                 width: 20,
                 marginTop:50
             }}
             ></Image>
             <View style={{
                 flexDirection:"row",
                 alignItems:"ceneter",
                 marginTop:25,
                 width:"100%"
             }}>
                 <View style={{width:"50%"}}>
                     <Text style={{
                         fontSize:28,
                         color:"#FFF",
                         fontWeight:"bold"
                     }}>Hi Uishopy</Text>
                 </View>
                 <View style={{width: "50%", alignItems:"flex-end"}}>
                    <Image source={require('../images/g.png')} style={{height:60,width:60}}></Image>
                 </View>
             </View>
         </View>

        <LinearGradient
        colors={["rgba(0,164,109,0.4)", "transparent"]} 
        style={{
            left: 0,
            right: 0,
            height: 90,
            marginTop:-45
        }}>
            <View
            style={{
                backgroundColor:"#FFF",
                paddingVertical:8,
                paddingHorizontal:20,
                marginHorizontal:10,
                borderRadius:15,
                marginTop:25,
                flexDirection:"row",
                alignItems:"center"
            }}>
                <TextInput
                placeholder="Search"
                placeholderTextColor="#b1e5d3"
                style={{
                    fontWeight:"bold",
                    fontSize:18,
                    width:"100%"
                }}
                >
                </TextInput>
                <Image source={require('../images/3.png')} style={{height:20,width:20}} />
            </View>

            
            <ScrollView>

            </ScrollView>


            <View style={{
                flexDirection:"row",
                paddingHorizontal:20,
                width:"100%",
                alignItems:"center"
            }}>
                <View style={{width:"50%"}}>
                    <Text style={{
                        fontSize:17,
                        fontWeight:"bold",
                        color:"#585a61"
                    }}>Recommended</Text>
                    <View style={{
                        height:4,
                        backgroundColor:"#b1e5d3",
                        width:115,
                        marginTop:-5
                    }}></View>
                </View>
                <View style={{width:"50%", alignItems:"flex-end"}}>
                    <View style={{
                        backgroundColor:"#00a46c",
                        paddingHorizontal:20,
                        paddingVertical:5,
                        borderRadius:15
                    }}>
                        <Text style={{fontWeight:"bold", fontSize: 13, color:"#FFF"}}>More</Text>
                    </View>
                </View>
            </View>
            </LinearGradient>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
                height:50
            }}
            >
                <LinearGradient
                colors={["rgba(0,164,109,0.09)", "transparent"]}
                style={{
                    position:"absolute",
                    left:0,
                    right:0,
                    height:100,
                    marginTop:220,
                    top:0
                }} />
                
                <TouchableOpacity
                onPress={()=>navigation.navigate("Detail")}
                style={{
                    height:250,
                    elevation:2,
                    backgroundColor:"#FFF",
                    marginLeft:20,
                    marginTop:20,
                    borderRadius:15,
                    marginBottom:10,
                    width:160
                }}>
                    <Image source={require('../images/4.png')} style={{height:"75%", borderTopLeftRadius:15, borderTopRightRadius:15}} />
                    <View style={{
                        flexDirection:"row",
                        paddingTop:10,
                        paddingHorizontal:10
                    }}>
                        <Text style={{
                            fontWeight:"bold"
                        }}>SAMANTHA</Text>
                        <Text style={{
                            fontWeight:"bold",
                            color:"#00a46c",
                            paddingLeft:35
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal:10,
                        fontWeight:"bold",
                        color:"#b1e5d3",
                        paddingTop:3
                    }}>RUSSIA</Text>
                </TouchableOpacity>


                    {/* item */}
                    <View
                style={{
                    height:250,
                    elevation:2,
                    backgroundColor:"#FFF",
                    marginLeft:20,
                    marginTop:20,
                    borderRadius:15,
                    marginBottom:10,
                    width:160
                }}>
                    <Image source={require('../images/5.png')} style={{height:"75%", borderTopLeftRadius:15, borderTopRightRadius:15}} />
                    <View style={{
                        flexDirection:"row",
                        paddingTop:10,
                        paddingHorizontal:10
                    }}>
                        <Text style={{
                            fontWeight:"bold"
                        }}>ANGELICA</Text>
                        <Text style={{
                            fontWeight:"bold",
                            color:"#00a46c",
                            paddingLeft:45
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal:10,
                        fontWeight:"bold",
                        color:"#b1e5d3",
                        paddingTop:3
                    }}>RUSSIA</Text>
                </View>
                    {/* item end */}

                {/* item */}
                <View
                //onPress={()=>navigation.navigate("Detail")}
                style={{
                    height:250,
                    elevation:2,
                    backgroundColor:"#FFF",
                    marginLeft:20,
                    marginRight:20,
                    marginTop:20,
                    borderRadius:15,
                    marginBottom:10,
                    width:160
                }}>
                    <Image source={require('../images/6.png')} style={{height:"75%", borderTopLeftRadius:15, borderTopRightRadius:15}} />
                    <View style={{
                        flexDirection:"row",
                        paddingTop:10,
                        paddingHorizontal:10
                    }}>
                        <Text style={{
                            fontWeight:"bold"
                        }}>ANGELICA</Text>
                        <Text style={{
                            fontWeight:"bold",
                            color:"#00a46c",
                            paddingLeft:45
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal:10,
                        fontWeight:"bold",
                        color:"#b1e5d3",
                        paddingTop:3
                    }}>RUSSIA</Text>
                </View>
                    {/* item end */}

            </ScrollView>


            {/* list start */}
            <View style={{
                flexDirection:"row",
                paddingHorizontal:20,
                width:"100%",
                alignItems:"center",
                marginTop:0
            }}>
                <View style={{width:"50%"}}>
                    <Text style={{
                        fontSize:17,
                        fontWeight:"bold",
                        color:"#585a61"
                    }}>Featured Plants</Text>
                    <View style={{
                        height:4,
                        backgroundColor:"#b1e5d3",
                        width:115,
                        marginTop:-5
                    }}></View>
                </View>
                <View style={{width:"50%", alignItems:"flex-end"}}>
                    <View style={{
                        backgroundColor:"#00a46c",
                        paddingHorizontal:20,
                        paddingVertical:5,
                        borderRadius:15
                    }}>
                        <Text style={{fontWeight:"bold", fontSize: 13, color:"#FFF"}}>More</Text>
                    </View>
                </View>
            </View>
            {/* list end */}
            
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
                marginBottom:-100
            }}>
                <Image source={require('../images/18.png')}
                style={{
                    marginTop:20,
                    marginHorizontal:20,
                    width:300,
                    height:"100%",
                    borderRadius:10
                }}></Image>
                <Image source={require('../images/19.png')}
                style={{
                    marginTop:20,
                    marginHorizontal:20,
                    width:300,
                    height:"100%",
                    borderRadius:10
                }}></Image>
            </ScrollView>

     </View>   
    )
}

export default Home;

