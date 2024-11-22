import React,{useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function App() {

  const [myData,setMyData] = useState("");
  useEffect(()=>{
    getDatabase()
  },[]);

  const getDatabase = async() =>{
    try{
      const data = await firestore().collection("testing").doc("UdLBTiIODGynTZzTZa9q").get();
      console.log(data._data);
      setMyData(data._data);

    }catch(err){
      console.log(err)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'yellow' }}>
      
        <Text>Name: {myData?myData.Name:"Loading..."}</Text>
        <Text>Age: {myData?myData.Age:"Loading..."}</Text>
        <Text>Salary: {myData?myData.Salary:"Loading..."}</Text> 
        
      
    </View>
  );
}
