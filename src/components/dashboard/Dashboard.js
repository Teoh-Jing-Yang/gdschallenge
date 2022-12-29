import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Dashboard() {

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
        
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
  signUpButton: {
    width:100,
    height:150,
    textAlign:"center"
  }
});

