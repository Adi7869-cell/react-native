import React from 'react';
import GeneralComponent from "./GeneralComponent"
import {Text, View} from "react-native"
function CompanyData() {
    return (
        <View  >

        <GeneralComponent title="Cloud Analogy">
  
          <Text>Mobile Developers</Text>
          Noida
  
        </GeneralComponent>
  
        <GeneralComponent title="Student Names">
          <View>
            <Text>Aditya jangra</Text>
            <Text>Neeraj Sharma</Text>
            <Text>Himanshu Arora</Text>
          </View>
  
        </GeneralComponent>
  
  
      </View>
    );
}


export default CompanyData;