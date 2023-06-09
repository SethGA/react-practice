import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';


export default class App extends React.Component {
  state = {
    value: 0,
    total_taps: 0
  }

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
      total_taps: this.state.total_taps + 1
    })
    console.log("Value: " + (this.state.value + 1))
  }

  decrementValue = () => {
    this.setState({
      value: this.state.value - 1,
      total_taps: this.state.total_taps + 1
    })
    console.log("Value: " + (this.state.value - 1))
  }

  render () {
    let textColor = 'black'; // zero black
    if (this.state.value < 0) { // negative red
      textColor = 'red';
    } else if (this.state.value > 0) { // positive green
      textColor = 'green';
    }

    let hiddenColor1 = 'white'; // hidden white 1
    let hiddenColor2 = 'white'; // hidden white 2
    if (this.state.value >= 10) { // revealed red
      hiddenColor1 = 'red';
    }
    if (this.state.value >= 13) { // revealed red
      hiddenColor2 = 'red';
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 60, marginBottom: -20, color: textColor}}>{this.state.value}</Text>
        <Text style={{ fontSize: 12, padding: 20, color: 'grey'}}>{"Total taps: "+ this.state.total_taps}</Text>
        <StatusBar style="auto" />
        <View style={{flexDirection:'row'}}>
          <Button onPress={this.decrementValue} title="Decrease" />
          <Text> </Text>
          <Button onPress={this.incrementValue} title="Increase" />
          <Text> </Text>
        </View>
        <Text style={{ fontSize: 20, color: hiddenColor1}}>{"ERROR: THRESHOLD SURPASSED"}</Text>
        <Text> </Text>
        <Text style={{ fontSize: 15, color: hiddenColor2}}>{"Target aquired."}</Text>
        <Text> </Text>
        <Text style={{ fontSize: 15, color: hiddenColor2}}>{"5 MINUTES TO IMPACT"}</Text>
      </View>
    );
  }

  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
