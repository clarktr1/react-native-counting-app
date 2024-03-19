import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [saved, setSaved] = useState([]);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function changeCount(num) {
    setCount(num);
    setValue('');
  }

  function reset() {
    setCount(0);
  }

  function save() {
    setSaved([...saved, count]);
  }

  return (
    <View style={styles.container}>
      <View style={{border:"1px solid #0e0e1e",borderRadius:"16px", width:"30%", height:"50%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontSize:"1.8rem", marginBottom:"5%"}}>Counter App</Text>
      <View style={[styles.buttonContainer, {marginBottom:"10%"}]}>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text>Enter Custom Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        keyboardType="numeric"
      />
      <TouchableOpacity style={[styles.button, styles.customButton]} onPress={() => changeCount(Number(value))}>
        <Text style={styles.buttonText}>Set</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.danger]} onPress={reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.save]} onPress={save}>
        <Text style={[styles.buttonText, { color: 'black' }]}>Save</Text>
      </TouchableOpacity>
      <Text style={[styles.buttonText, { color: 'black' }]}>Saved Numbers</Text>
      <View style={{display:"flex", flexDirection:"row"}}>
        {saved.length < 1 ? <Text>Nothing in list</Text> :
        saved.map((num, index) => (  
          <Text key={index}>{num} </Text>
        ))}
      </View>
      <StatusBar style="auto" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer: {
    marginBottom: 20,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  customButton: {
    backgroundColor: '#28a745',
    width: '10%',
    height: '10%',
  },
  danger: {
    backgroundColor: '#dc3545',
    width: '10%',
    height: '10%',
  },
  save: {
    backgroundColor: 'yellow',
    width: '10%',
    height: '10%',
  },
});
