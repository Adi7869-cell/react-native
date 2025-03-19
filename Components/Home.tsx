import React from 'react';

import { Text, View, StyleSheet } from "react-native"
function Home() {
    return (
        <View style={styles.con}>
            <View style={styles.container}>
                <Text>Hello cloud</Text>
            </View>
            <View style={styles.box} >
                <Text >Hello Team</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    con:{
        marginBottom:15
    },
    container: {
        flexDirection: "row",
        color: "orange"
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 150,
        backgroundColor: "green"
    },

})

export default Home;