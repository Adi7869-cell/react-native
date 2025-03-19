import React from 'react';
import { StyleSheet, Text, View } from "react-native"


const GeneralComponent = (props: { title: string; children: React.ReactNode }) => {
    return (
        <>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    {props.title}
                </Text>
                <Text style={styles.sectionDescription}>
                    {props.children}
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 20,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        margin: 8,
        fontSize: 18,
        fontWeight: '400',
    },
})

export default GeneralComponent;