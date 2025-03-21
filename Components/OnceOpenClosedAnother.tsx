import React,{useState} from 'react';
import { View, StyleSheet ,Text, FlatList, TouchableOpacity} from 'react-native';
const OnceOpenClosedAnother =()=> {
    
        const [data, setdata] = useState(
        [
            {
                data:["Aditya", "Himashu", "Kashish", "Neeraj", "Sanajan"], 
                isSelected:false
            },
            {
                data:["Jangra", "Arora", "Arora", "Chadda", "Rajput"] , 
                isSelected:false
            }
        ]);

        const open_close_list = (index:number)=>{
            const newArr = data.map((value, ind)=>{
                return {
                    data:value.data, 
                    isSelected: index == ind ? !value.isSelected: false
                };
            })

            setdata(newArr)
        }
        const renderItem =({item, index}: { item: { data: string[], isSelected:boolean }, index:number })=>{
            return (
                <>
                        <View style={styles.container}>
                            <View>
                            <Text style={[styles.text, {color:"green"}]}>Item {index + 1}</Text>
                            <TouchableOpacity onPress={()=>open_close_list(index)} style={styles.openClose}>
                                <Text>
                                {item.isSelected ? "Close" :"Open"}
                                    
                                    </Text>    
                            </TouchableOpacity>
                            </View>
                           
                            {item.isSelected ? 
                            (
                            <FlatList
                            keyExtractor={(item, index) => index.toString()} 
                                renderItem={({item}:{item:string})=>{
                                    return (
                                        <View style={{padding:4, marginHorizontal:6}}>

                                        <Text style={styles.text}>{item}</Text>

                                        </View>
                                    )
                                }}  
                                data={item.data}
                                />
                                ): null}
                                
                        </View>
                </>
            )
        }
        return (
            <View style={{marginVertical:9}}>
                <Text style={{fontWeight:"bold", fontSize:20}}>Once Upon Closed Another. </Text>
                <FlatList 
                  showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
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
        openClose:{
            position:"absolute",
            right:5,
            backgroundColor:"lightblue",
            padding:5,
            borderRadius:5,
            top:-3
        },
        text:{
            marginTop:5,
            color:"darkblue", 
            fontWeight:"bold", 
            fontSize:17
        }
    })
export default OnceOpenClosedAnother;