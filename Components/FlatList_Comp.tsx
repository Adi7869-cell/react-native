import React, { useEffect, useState } from 'react';
import { View , Text, Image, FlatList, StyleSheet} from 'react-native';
function FlatList_Comp() {

    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((result)=> setdata(result));
        
    }, [])

    const renderItem =({item}:{item:any })=>{
        return (
            <>
                    <View style={styles.container}>

                       <Image style={styles.image} source={{uri:item.image}}/>

                       <View style={styles.dataContainer}>
                        <Text>
                        {
                        item.title.length > 50 ? item.title.slice(0, 30)+"..." :item.title}
                  
                        </Text>
                        <Text>
                            {item.description.length > 50 ? item.description.slice(0, 30)+"..." :item.description}
                        </Text>
                        <Text style={styles.text}>
                          ${item.price}
                        </Text>
                        </View>
                        
                    </View>
            </>
        )
    }
    return (
        <View style={{marginVertical:9}}>
            <Text style={{fontWeight:"bold", fontSize:20}}>List Of Items</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            // ListHeaderComponent={()=>{
            //     return  (
            //     <View style={{marginVertical:9}}>
            //     <Text >List vertical end</Text>
            //     </View> 
            //     )
            // }}
            // ListFooterComponent={()=>{
            //     return  (
            //     <View style={{marginVertical:9}}>
            //     <Text >List vertical end</Text>
            //     </View> 
            //     )
            // }}
            renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        marginVertical:6,
        padding:14,
        borderColor:"#ffff",
        elevation:3,
        borderWidth:4,
        borderRadius:9,
        marginHorizontal:3
    }, 

    image:{
        height:80, 
        width:80,
        alignSelf:"center"
    },

    text:{
        marginTop:10,
        color:"green", 
        fontWeight:"bold", 
        fontSize:20
    }, 
    dataContainer:{
        marginLeft:20
    }
})
export default FlatList_Comp;