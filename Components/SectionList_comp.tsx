import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const SectionList_comp = () => {
    const DATA = [
        {
            id: 1,
            title: 'Main dishes',
            data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
            id: 2,
            title: 'Sides',
            data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
            id: 3,
            title: 'Drinks',
            data: ['Water', 'Coke', 'Beer'],
        },
        {
            id: 4,
            title: 'Desserts',
            data: ['Cheese Cake', 'Ice Cream'],
        },

    ];


    const renderItem = ({ item }: { item: string }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>
            </View>
        );
    };


    const renderSectionHeader = ({ section: { title, id } }: { section: { title: string, id: number } }) => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{id} {title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={renderSectionHeader}
                ListHeaderComponent={() => <Text style={styles.staticHeader}>Food</Text>}
                renderItem={renderItem}
                SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },

    staticHeader:{
        marginHorizontal:9, fontWeight:"bold", fontSize:20, color:"purple"
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
