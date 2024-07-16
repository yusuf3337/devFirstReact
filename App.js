import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style = {{width :100,height :100, backgroundColor :"#b5179e"}}>
        <Text>Yusuf</Text>
      </View>

      <View style = {{width :200,height :200, backgroundColor :"#7209b7"}}>
        <Text>Cepni</Text>
      </View>
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
