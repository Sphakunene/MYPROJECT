import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view style={styles.Header}>
      <Text style = {styles.boldtext}>Hello World!</Text>
      </view>
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

  Header:{
    backgroundColor:'pink',
    padding:100,
  },
  boldtext:{
    fontWeight:'bold',
  }
});
