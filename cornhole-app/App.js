import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState({})
  const [newData, setNewData] = useState('')
  const [enteredText, setEnteredText] = useState('')
  useEffect(() => {
    fetch('http://localhost:5000/').then(res => res.json()).then(data => setData(data)).catch(err => console.log(err))
  }, [])
  const submitHandler = async () => {
    await axios.post('http://localhost:5000/', {enteredText}).then(data => setNewData(data.data.enteredText)).catch(err => console.log(err))
  }
  return (
    <View style={styles.container}>
      <Text>Cornhole</Text>
      <Text>{data.name}, {data.age}</Text>
      {newData && <Text>{newData}</Text>}
      <TextInput placeholder='Enter text here' onChangeText={text => setEnteredText(text)}></TextInput>
      <Button title='submit' onPress={submitHandler}>Submit</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
