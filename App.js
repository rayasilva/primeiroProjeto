import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Title from './src/components/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Rayane Pereira da Silva </Text>
      <Text>Desenvolvimento de Dispositivos Moveis 22/fev2024</Text>
      <Button title='salvar'></Button>
     <Title/>
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
