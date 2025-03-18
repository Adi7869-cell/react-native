import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, StatusBar, SafeAreaView, TextInput, Alert } from 'react-native';

const Component = () => {
  return (
    <>
      <Text>Hello Aditya </Text>
    </>
  )
}

function App(): React.JSX.Element {

  const [color, setcolor] = useState("gray")
  const [hide, sethide] = useState(false)
  const[value, setValue] = useState('');

  const changeColor = () => setcolor(color == 'gray' ?  'orange' : 'gray')
    

  const visibilityOfBar = () => sethide(!(hide))
  const onchangeText = (val: string) => {
    
    console.log('hii')
    if (/^[0-9]*$/.test(val)) {
      setValue(val);  
    } else {
        console.log("Invalid input, please enter numbers only");
    }
  }

  return (
    <SafeAreaView style={styles.safeContent}>
      <StatusBar
        animated={true}
        backgroundColor={color}
        hidden={hide}
        barStyle='light-content'
      />

      <View style={styles.container}>
        <Text>Hello cloud kdjaijdiea</Text>
      </View>
      <View style={styles.box} >
        <Text >ijdsi</Text>
      </View>


      <View>
        <TextInput 
        onChangeText={onchangeText}
        placeholder='enter text'
        value={value} 
        keyboardType='numeric'
        style={styles.input}/>

        <Text>Your Entered number is {value} </Text>
      </View>

      <View style={styles.button}>
        <Button onPress={changeColor} title='change bar color' />
      </View>
      <Button onPress={visibilityOfBar} title='change bar Visibility' />

      <View>
        <View style={{ backgroundColor: "red" }}>
          <Image style={styles.first}
            source={require('./Assests/nature_combo.png')}
            resizeMode="stretch"
            capInsets={{ top: 1, left: 4, bottom: 500, right: 600 }}
          />
        </View>

        <Image style={styles.tinyLogo}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          onLoad={() => console.log("image start loaded")}
          blurRadius={6}
          onLoadEnd={() => console.log("imaged end load")}
          onError={() => console.log("imaged fail to load")}
          // tintColor="pink"
          onProgress={(event) => {
            console.log(event)
            const progress = event.nativeEvent.loaded / event.nativeEvent.total;
            console.log(`Loading: ${progress * 100}%`);
          }}
        />
      </View>
      <Component />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContent: {
    flex: 1
  },

  container: {
    flexDirection: "row",
    color: "orange"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "green"
  },
  first: {
    height: 90,

    width: 90,
  },
  tinyLogo: {
    height: 100,
    marginBottom: 30,
    width: 100,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  button: {
    marginBottom: 15
  }, 
  input:{

  }
})
export default App;
