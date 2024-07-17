import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* 
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
        
      //BUTTON KULLANIMI
      <Button 
        title='Increase Count' 
        onPress={() => setCount(prev => prev + 1)} 
        touchSoundDisabled={true} 
        color={"red"} 
      />
        <Button 
        title='Deincrease Count' 
        onPress={() => setCount(prev => prev - 1)} 
        touchSoundDisabled={true} 
        color={"red"} 
      />

      <Text style = {{
        fontSize:22, 
        color:"green",
        fontWeight:"bold"
        }}>Current Count: {count}</Text>
        

        <Image 
         style = {{
          width:300,
          height:300,
         }}
         source={require("./assets/karpuz.png")}/>

         <Image source={{
          uri:"https://tele1.com.tr/wp-content/uploads/2022/04/nike-1068x601-1-690x450.jpg"}}
          style={{
            width:300,
            height:300,
          }}
          />
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
