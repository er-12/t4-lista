import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, FlatList, Alert, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    console.log('You added: ' + text);
    if (text.length > 0) {
      setData([...data, {key:text}]);
    } else {
      Alert.alert('Try again (item name must be at least 1 character long)')
    }
    setText('');
  }

  const clear = () => {
    setData([]);
    Alert.alert('List cleared!')
  }

  return (
    <View style={styles.container}>
      <Text>Add item:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
      <View style={styles.buttons} >
      <Button onPress={add} title="Add" />
      <Button onPress={clear} title="Clear" />
      </View>
      <Text style={styles.sl}>Shopping List:</Text>
      <FlatList 
        data={data}
        renderItem={({item}) =>
          <Text>{item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
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
    margin: 50
  },
  input: {
    width: 200,
    height: 25,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttons: {
    backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  sl: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    margin:2
  }
 
});


