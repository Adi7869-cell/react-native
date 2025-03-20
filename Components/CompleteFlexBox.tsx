import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function CompleteFlexBox() {

    const arr = [
        {
            color:"red",
        }, 
        {
            color:"pink",
        }, 
        {
            color:"blue",
        }, 
        {
            color:"orange",
        }, 
        {
            color:"purple",
        },
        {
            color:"pink",
        }, 
        {
            color:"blue",
        },
        {
            color:"orange",
        }, 
        {
            color:"purple",
        },
        {
            color:"pink",
        }, 
        {
            color:"blue",
        }, 
        {
            color:"orange",
        }, 
        {
            color:"purple",
        },
        {
            color:"pink",
        }, 
        {
            color:"yellow",
        }, 
        {
            color:"orange",
        }, 
        {
            color:"purple",
        },
        {
            color:"pink",
        }, 
        {
            color:"yellow",
        }, 
        {
            color:"red",
        }, 
    ]
    return (
        <>
            <View style={styles.container}>
                {
                    arr.map((value)=>{
                        return (
                            <View style={[styles.card, {backgroundColor:value.color}]}>
                                <Text>
                                    {value.color}
                                </Text>
                            </View>
                        )
                    })
                }
                
            </View>
        </>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column",
        direction: "ltr",
        // justifyContent: "center",
        flexGrow:1,
        flexWrap:"wrap",
        rowGap:6,
        columnGap:6,
                // alignItems:"center",
        height: 500
    },
    card: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderRadius: 40,
        marginVertical: 4,
        marginHorizontal: 6

    },

    // card1: {
    //     // alignSelf:"center",

    //     backgroundColor: "red"
    // },

    // card2: {
    //     // alignSelf:"flex-end",
    //     backgroundColor: "green"
    // },
    // card3: {
    //     // alignSelf:"center",
    //     backgroundColor: "blue"
    // },
    // card4: {
    //     backgroundColor: "purple"
    // },

})
export default CompleteFlexBox;