import React,{useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';

export default function App() {

  const [myData,setMyData] = useState("");
  useEffect(()=>{
    getDatabase()
  },[]);

  const getDatabase = async() =>{
    try{
      const data = await database().ref('users/1').once('value');
      console.log(data);
      setMyData(data.val())
      

    }catch(err){
      console.log(err)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'yellow' }}>
      
        <Text>Name: {myData?myData.name:"Loading..."}</Text>
        <Text>Age: {myData?myData.age:"Loading..."}</Text>
        <Text>Salary: {myData?myData.post:"Loading..."}</Text> 
        
      
    </View>
  );
}
