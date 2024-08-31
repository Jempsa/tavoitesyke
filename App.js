import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerHeartRate, setLowerHeartRate] = useState('0');
  const [upperHeartRate, setUpperHeartRate] = useState('0');


  const calculateHeartRate = () => {
    const ageNum = parseInt(age);
    if (!isNaN(ageNum)) {                     //Tarkistetaan onko ageNum numero isNaN = Jos syötetty arvo ei ole numero, palautetaan NaN (not a number)
      const lower = (220 - ageNum) * 0.65;    // Sykkeen laskenta
      const upper = (220 - ageNum) * 0.85;
      setLowerHeartRate(lower.toFixed(1));    //Desinaalin arvot
      setUpperHeartRate(upper.toFixed(1));
    } else {
      alert('Please enter a valid age');      // alert Jos ei syötä ikää ja painaa calculate 
    }
  };

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        placeholder='Insert age'
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
        style={styles.input}
      />

     <Button title='Calculate' onPress={calculateHeartRate}  color="black"/>
    <Text style={styles.field}>
      {lowerHeartRate !== '0' && upperHeartRate !== '0' ? `Limits: ${lowerHeartRate} - ${upperHeartRate} bpm` : ''} 
    </Text>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCAAEE',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  field: {
    marginTop: 8,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
});