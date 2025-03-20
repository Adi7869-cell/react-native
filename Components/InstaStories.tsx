import React from 'react';

import {View, Text, StyleSheet, ScrollView, Image, Alert, TextInput} from "react-native"

function InstaStories() {

    const arr= [
        "https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.webp?s=2048x2048&w=is&k=20&c=S3Zow4qlkOvWySLGoM4MCERydeHBxRbQUjnSKH2vbNY=", 
        "https://cdn.pixabay.com/photo/2021/12/15/18/18/flowers-6873165_1280.jpg", 
        "https://cdn.pixabay.com/photo/2024/02/25/13/30/art-8595775_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/03/22/18/23/eurasian-blue-tit-7085704_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/08/18/14/52/maple-leaves-7395109_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/04/19/09/34/flower-7937334_1280.jpg",
        "https://media.istockphoto.com/id/155356833/photo/pink-cherry-blossoms.webp?s=2048x2048&w=is&k=20&c=8MQqlBk8_wdE9djKwNdeDSlJ805yliOZC_cqh1-1myY=",
        "https://cdn.pixabay.com/photo/2024/02/09/14/54/butterfly-8563213_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/01/23/16/21/peacock-flowers-6961319_960_720.jpg",
        "https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.webp?s=2048x2048&w=is&k=20&c=S3Zow4qlkOvWySLGoM4MCERydeHBxRbQUjnSKH2vbNY=", 
        "https://cdn.pixabay.com/photo/2021/12/15/18/18/flowers-6873165_1280.jpg", 
        "https://cdn.pixabay.com/photo/2024/02/25/13/30/art-8595775_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/03/22/18/23/eurasian-blue-tit-7085704_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/08/18/14/52/maple-leaves-7395109_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/04/19/09/34/flower-7937334_1280.jpg",
        "https://media.istockphoto.com/id/155356833/photo/pink-cherry-blossoms.webp?s=2048x2048&w=is&k=20&c=8MQqlBk8_wdE9djKwNdeDSlJ805yliOZC_cqh1-1myY=",
        "https://cdn.pixabay.com/photo/2024/02/09/14/54/butterfly-8563213_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/01/23/16/21/peacock-flowers-6961319_960_720.jpg"
 
    ]
    return (
        <>

        <View style={styles.wrapper}>
        <Text style={{fontSize:20, marginLeft:8, fontWeight:"bold"}}>Instagram</Text>

        <ScrollView horizontal={true}
        // pagingEnabled={false}
        // onScroll={()=>{Alert.alert("hii")}}
       
        // keyboardShouldPersistTaps="never"
        // onMomentumScrollBegin={()=>{
        //     Alert.alert("start")
        // }}
        // onMomentumScrollEnd={()=>{
        //     Alert.alert("end")
        // }}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        >
            <View style={styles.container}>
            {
                arr.map((item, index)=>{
                    return (
                        <View key={index} style={[styles.card]}>
                            <Image style={styles.image} source={{uri:item}}/>
                        </View>
                    )
                })
            }    
            </View> 

            <TextInput/>
        </ScrollView>

           
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal:8, 
        backgroundColor:"lightblue"
    },
    container:{
        flex:1,
        flexDirection:"row-reverse", 
        paddingVertical:8
    }, 
    card:{
       
        borderRadius:49,
        marginHorizontal:10,
        height:80,
        width:80,
        marginVertical:5,
    }, 
    image:{
        height:79, width:79, borderRadius:38,
        outlineColor:"white",
        outlineWidth:2,
        outlineOffset:2
        
    }
})

export default InstaStories;