import React,{useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, StatusBar } from 'react-native';
import database from '@react-native-firebase/database';


export default function App() {

  const [inputTextValue,setInputTextValue] = useState(null);
  const [list,setList] = useState(null);
  const handleAddData = async()=>{
    try {
      const response = await database().ref("todo/1").set({
        value: inputTextValue
      });
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',marginTop:10}}>Todo App</Text>
      <TextInput style={styles.inputbox}  placeholder='Enter details' 
      value={inputTextValue}
      onChangeText={(value)=>setInputTextValue(value)}/>
      <TouchableOpacity style={styles.btn} onPress={()=>handleAddData()}>
        <Text style={{fontWeight:'bold',fontFamily:'monospace'}}>Add Data </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const {height,width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  inputbox:{
    width:width - 30,
    borderRadius:15,
    borderWidth:2,
    marginTop:30,
    marginVertical:20,
    padding:10,

  },
  btn:{
    backgroundColor:'#DBD050',
    alignItems:'center',
    borderRadius:30,
    padding:10
  }
});
