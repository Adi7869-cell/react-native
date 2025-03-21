import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, TouchableOpacity , Alert} from 'react-native';

interface FoodItem {
    foodItem: string;
    firstItem: string;
}

interface SectionData {
    id:number
    title: string;
    food: string[];
    first: string[];
}
const SectionList_comp = () => {

    const [refresh, setrefresh] = useState(false);
    const DATA:SectionData[] = [
        {
            id: 1,
            title: 'Main dishes',
            food: ['Pizza', 'Burger', 'Risotto'],
            first: ['aaa', 'bbb', 'ccc'],
        },
        {
            id: 2,
            title: 'Sides',
            food: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
            first: ['aaa', 'bbb', 'ccc'],
        },
        {
            id: 3,
            title: 'Drinks',
            food: ['Water', 'Coke', 'Beer'],
            first: ['aaa', 'bbb', 'ccc'],
        },
        {
            id: 4,
            title: 'Desserts',
            food: ['Cheese Cake', 'Ice Cream'],
            first: ['aaa', 'bbb'],
        },
        {
            id: 5,
            title: 'Breakfast',
            food: ['Parantha', 'Curd', 'Roti'],
            first: ['aaa', 'bbb', 'ccc'],
        },
        {
            id: 6,
            title: 'More Desserts',
            food: ['Cheese Cake', 'Ice Cream'],
            first: ['aaa', 'bbb', 'ccc'],
        },
    ];

       const combineFoodAndFirst = (food: string[], first: string[]): FoodItem[] => {
        return food.map((foodItem:string, index:number) => ({
            foodItem,
            firstItem: first[index], 
        }));
    };

     const renderItem = ({ item }:{item:FoodItem}) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.foodItem} - {item.firstItem}</Text>
            </View>
        );
    };

     const renderSectionHeader = ({ section: { title, id } }: {section:{title:string,id:number}}) => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{id} {title}</Text>
            </View>
        );
    };

      const sectionsWithData = DATA.map(section => ({
        id:section.id,
        title: section.title,
        data: combineFoodAndFirst(section.food, section.first),  
    }));

    const ListHeaderComponent= ()=>{
       return <View style={{flexDirection:"row", justifyContent:"space-between"}}> 
                    <Text style={styles.staticHeader}>Food</Text>
                    <TouchableOpacity onPress={()=>{
                        // Alert.alert(refresh)
                        setrefresh(!refresh)
                        setTimeout(() => {
                            setrefresh(false)
                        }, 3000);
                        
                    }} style={{backgroundColor:"pink", borderRadius:5, padding:5}}>
                      <Text>Refresh List</Text>  
                    </TouchableOpacity>
                </View>
    }

    return (
        <View style={styles.container}>
            <SectionList
                sections={sectionsWithData} // Use combined data
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => item.foodItem + index}  
                renderSectionHeader={renderSectionHeader}
                // ItemSeparatorComponent={()=> <Text> </Text> }
                onEndReached={()=>{console.log("reached end of the list ")
                    // used for implementing inifinite scrolling..load more data
                }}
                onRefresh={()=>{console.log("Refresh")}}
                refreshing={refresh}
                ListHeaderComponent={ListHeaderComponent}

                ListFooterComponent={()=><View>
                    <Text>List will be updated soon.</Text>
                </View>}
                renderItem={renderItem}
                SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    staticHeader: {
        marginHorizontal: 9,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'purple',
    },
    sectionSeparator: {
        marginBottom: 10,
    },
    headerContainer: {
        backgroundColor: '#c0e9c9',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#378e2c',
    },
    itemContainer: {
        backgroundColor: '#c8e6c9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 5,
    },
    itemText: {
        fontSize: 16,
        color: '#388e3c',
    },
});

export default SectionList_comp;
