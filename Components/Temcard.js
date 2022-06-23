import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';



export default function Temcard({ item, index, }) {

    const { width, height } = Dimensions.get("window")
  

    return (




            <View style={styles.customItems}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Image source={{ uri: item.displayPic }}  style={{ width: 70, height: 70, borderRadius: 40, borderColor: '#ddd', borderWidth: 1 }} /> */}

                    <View style={{ justifyContent: 'flex-start', flexDirection: 'column' }}>

                        <Text style={[styles.itemText, { fontWeight: 'bold', width: width * 0.7, color: 'red' }]}>{item.inprogress}</Text>
                        {/* <Text style={[styles.itemText, { fontSize: 12 }]}>{item.timestamp}</Text> */}
                        <Text style={[styles.itemText, { fontSize: 12 }]}>{item.todo}</Text>
                        {/* <Text style={[styles.itemText, { color: 'green', fontSize: 12 }]}>About: {item.diaplayAbout}</Text> */}

                    

                        {/* <TouchableOpacity activeOpacity={0.9} onPress={()=>createChatList(item) }>
                            <View style={styles.loginButton}>
                                <Text style={styles.buttonText}> Chat </Text>
                            </View>
                        </TouchableOpacity> */}


                    </View>
                </View>

            </View>

        // </TouchableOpacity>
    )

}


const styles = StyleSheet.create
    ({

        customItems: {

            padding: 5,
            marginTop: 13,
            marginStart: 10,
            marginEnd: 10,
            borderColor: '#FF7A01',
            borderWidth: 1.5,
            borderStyle: 'solid',
            borderRadius: 15,
            flexDirection: 'column'
        },

        itemText: {
            marginStart: 10,

        },
         loginButton: {
            backgroundColor: '#2a9a4e',
            color: 'white',
            borderRadius: 24,
            height: 30,
            width: 130,
            marginStart: 10,
            marginVertical: 8,
            justifyContent: 'center'
        },
        buttonText: {
            color: 'white',
            textTransform: 'capitalize',
            fontSize: 14,
            textAlign: 'center',
            justifyContent: 'center',
        }
 
    })