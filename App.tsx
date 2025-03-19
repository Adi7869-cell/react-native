import React, { useState } from 'react';
import { Text, View, StyleSheet,  Button, StatusBar, ScrollView ,SafeAreaView, Switch} from 'react-native';
import Press from './Components/Press';
import Input from './Components/Input';
import ImageCon from './Components/ImageCon';
import Home from './Components/Home';
import CompanyData from './Components/CompanyData';
import Switch_comp from './Components/Switch_comp';

const Component = () => {
  return (
    <>
      <Text>Hello Aditya </Text>
    </>
  )
}

function App() {

  const [color, setcolor] = useState("gray")
  const [hide, sethide] = useState(false)
  
  const changeColor = () => setcolor(color == 'gray' ?  'orange' : 'gray')
    

  const visibilityOfBar = () => sethide(!(hide))
 

  return (
    <ScrollView>
    <SafeAreaView style={styles.safeContent}>
      <StatusBar
        animated={true}
        backgroundColor={color}
        hidden={hide}
        barStyle='light-content'
      />
      <Switch_comp/>
      <Home/>
      <CompanyData/>
      <Input/>
      <Press/>
      <ImageCon/>
      <View style={styles.button}>
      <Button onPress={changeColor} title='change bar color' />
      </View>
      <Button onPress={visibilityOfBar} title='change bar Visibility' />
      <Component />

    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeContent: {
    flex: 1
  },

 
  button: {
    marginBottom: 15
  } 
})
export default App;
