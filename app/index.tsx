import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/0x00whitecode/HNG_MobileApp_task')}>
        <Text style={styles.buttonText}>View GitHub Repository</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('http://hng.tech/hire/react-native-developers')}>
        <Text style={styles.buttonText}>Visit HNG Hire Pages</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://telex.ai/')}>
        <Text style={styles.buttonText}>Visit Telex</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5' 
  },
  header: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  button: { 
    backgroundColor: 'green', 
    width: 300,
    padding: 20, 
    borderRadius: 5, 
    marginTop: 15
   },
  buttonText: { 
    color: '#fff', 
    fontSize: 16 
  },
});
