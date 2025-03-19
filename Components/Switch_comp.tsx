import React, { useState } from 'react';
import { StyleSheet, Switch, View, Text, Alert } from 'react-native';

function Switch_comp() {
    const [isEnabled, setIsEnabled] = useState(true);  

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
            <Switch
                trackColor={{ false: 'green', true: 'red' }}   
                thumbColor={isEnabled ? 'purple' : 'yellow'}   
                onValueChange={setIsEnabled}   
                value={isEnabled}  
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: "red",
        fontSize: 20,
        marginBottom: 20,
    },
});

export default Switch_comp;
