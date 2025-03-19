import React, { useState } from 'react';
import { Text, View, TextInput, Alert, StyleSheet } from "react-native"
function Input() {

    const [value, setValue] = useState('');
    const [email, setmail] = useState('');


    const onchangeText = (val: string) => {

        console.log('hii')
        if (/^[0-9]*$/.test(val)) {
            setValue(val);
        } else {
            console.log("Invalid input, please enter numbers only");
        }
    }

    const emial = () => {
        console.log(email)
    }
    return (
        <>


            <View>
                <TextInput
                    onChangeText={onchangeText}
                    placeholder='enter Number'
                    value={value}
                    selectionColor="orange"
                    selectTextOnFocus={true}
                    selectionHandleColor={"pink"}
                    // selection={{start:4, end:9}}
                    keyboardType='numeric'
                    style={styles.input} />

                <Text>Your Entered number is {value} </Text>
            </View>

            <View>
                <TextInput
                    secureTextEntry={true}
                    placeholder='enter password of max 7 length'
                    maxLength={7}
                    style={styles.input} />
            </View>

            <View>
                <TextInput
                    value={email}
                    onChangeText={setmail}
                    keyboardType='email-address'
                    placeholder='enter email'
                    autoComplete='email'
                    autoFocus={true}
                    onSubmitEditing={emial}
                    style={styles.input} />
            </View>

            <View>
                <TextInput
                    autoCapitalize='words'
                    placeholder='Auto Capitilize'
                    autoCorrect={true}
                    style={styles.input} />
            </View>


        </>
    );
}


const styles = StyleSheet.create({

    input: {
        borderColor: "pink",
        borderWidth: 1,
        marginBottom: 8
    }
})

export default Input;