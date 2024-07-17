import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
{/* STYLE BILGILERI 
      <View style = {{
        width :200,
        height :200,
        backgroundColor :"#7209b7",
        borderRadius :10,
        alignItems : "center",
        justifyContent :"center",
        }}>
        <Text>Cepni</Text>

        <View style = {{
        width :100,
        height :100,
        backgroundColor :"#b5179e", 
        borderRadius :12,
        margin :5, 
        justifyContent :"center",
        alignItems :"center",
        }}>
        <Text>Yusuf</Text>
      </View>
      </View>
        */}
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
