import React, { useEffect, useState } from 'react';
import { View , Text, Image, FlatList, StyleSheet} from 'react-native';
const NextedFLatList =()=> {

    const [data, setdata] = useState(
    [
        {data:["Aditya", "Himashu", "Kashish", "Neeraj", "Sanajan"]},
        {data:["Jangra", "Arora", "Arora", "Chadda", "Rajput"]} ]);
    
    const renderItem =({item}: { item: { data: string[] } })=>{
        return (
            <>
                    <View style={styles.container}>
                            <FlatList
                            renderItem={({item}:{item:string})=>{
                                return (
                                    <Text>{item}</Text>
                                )
                            }}  
                            data={item.data}
                            />
                    </View>
            </>
        )
    }
    return (
        <View style={{marginVertical:9}}>
            <Text style={{fontWeight:"bold", fontSize:20}}>List Of Nested </Text>
            <FlatList 
              showsHorizontalScrollIndicator={false}
                data={data}
            
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
 
})
export default NextedFLatList;