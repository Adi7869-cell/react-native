import React,{useState} from 'react';
import { Text, Pressable, StyleSheet, Alert,TouchableOpacity } from 'react-native'
const Press = () => {

    const [color, setColor] = useState("lightblue")
    return (
        <>
            <Pressable 
            android_disableSound={false}
                android_ripple={{ color: 'rgba(253, 14, 5, 0.2)', radius: 100 }}
                unstable_pressDelay={2000}
                // onPress={() => Alert.alert('Long Pressed')}
                // disabled={true}
                hitSlop={{ top: 50, left: 80, bottom: 30, right: 40 }}
                style={[styles.press, {backgroundColor:color}]}
                // onHoverIn={()=>{
                //     setColor("pink")
                //     Alert.alert(color)
                // }}
               
                // onPressIn={() =>  Alert.alert('Press Started')} 
                // onPress={() => Alert.alert('Pressed')}
                // // pressRetentionOffset={{top: 40, left: 40, bottom: 24, right: 40}}
                // onPressOut={() => Alert.alert('Press Released')}
                // onLongPress={() => Alert.alert('Long Pressed')}
                // onHoverOut={() => Alert.alert('Hovered Out')}
                >
                <Text style={styles.text}>Hii I am Pressable </Text>
            </Pressable>

            <Pressable  
            style={styles.press} 
            delayLongPress={2000} 
            onLongPress={() => Alert.alert('Long Pressed')}>
                <Text>Long Press Me</Text>
            </Pressable>

            <TouchableOpacity
                style={styles.touchable}
                activeOpacity={0.3}
                // nextFocusDown="3"
                >
                <Text>Touchable Opacity</Text>
            </TouchableOpacity>

            


        </>
    );
}

const styles = StyleSheet.create({
    press: {
        // backgroundColor: "yellow",
        borderColor: "orange",
        borderWidth: 3,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: "50%",
        alignItems: 'center',
        shadowColor: 'green',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 90,
        elevation: 90
    },
    text: {
        color: "black",
        fontSize: 18,
    }, 
    touchable:{
        backgroundColor: "yellow",
        borderColor: "orange",
        borderWidth: 3,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        width: "50%",
    }
})
export default Press;