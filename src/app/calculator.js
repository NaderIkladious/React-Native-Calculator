import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import calculate from "./calculate";
import Dimensions from 'Dimensions';
var window = Dimensions.get('window');

const numbers = [1,2,3,4,5,6,7,8,9];

export default class Calculator extends React.Component {
	state ={
		total: null,
    next: null,
    operation: null,
	}
	handlePress = (buttonName) => {
		this.setState(calculate(this.state, buttonName));
	}

	render() {
		const styles = StyleSheet.create({
		  container: {
		    flex: 1,
		    justifyContent: 'center',
		    paddingHorizontal: 10,
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: window.height/5
		  },
		  button: {
		    backgroundColor: '#353535',
		    padding: 15,
		    width: (window.width/4)*0.8, 
        borderWidth: 1,
        margin: (window.width/4)*0.1,
        marginVertical: (window.width/4)*0.15,
        height: (window.width/4)*0.8,
        borderRadius: 50,
        alignItems: 'center'
		  },
		  buttonWide: {
		    width: ((window.width/4)*0.8)*2 + ((window.width/4)*0.1)*2
		  },
		  bText: {
		  	alignItems: 'center',
		  	fontSize: 25,
		  	color: 'white',
		  	height: '100%',
		  },
		  orange: {
		  	backgroundColor: '#f8972b'
		  },
		  result: {
		  	height: window.height*0.3,
		  	flex: 1,
		  	marginTop: window.height*0.3*0.3,
		  	marginRight: '1%'
		  },
		  resultText: {
		  	color: 'white',
		  	fontSize: 60,
		  	alignItems: 'flex-end',
		  	textAlign: 'right'
		  },
		  lightButton: {
		  	backgroundColor: '#A5A5A5'
		  },
		  buttons: {
		  	height: window.height*0.7
		  }
		})
	  return (
	    <View style={{flex: 1, backgroundColor: '#000'}}>
	    	<View style={styles.result}>
	    		<Text style={styles.resultText}>{this.state.next || this.state.total || "0"}</Text>
	    	</View>
	    	<View style={styles.buttons}>
	        <View  style={styles.container}>
	          <TouchableHighlight style={[styles.button, styles.lightButton]} name="AC" onPress={() => this.handlePress('AC')}>
	          	<Text style={styles.bText}>AC</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={[styles.button, styles.lightButton]} name="+/-" onPress={() => this.handlePress('+/-')}>
	          	<Text style={styles.bText}>+/-</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={[styles.button, styles.lightButton]} name="%" onPress={() => this.handlePress('%')}>
	          	<Text style={styles.bText}>%</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={[styles.button, styles.orange]} name="÷" onPress={() => this.handlePress('÷')} orange>
	          	<Text style={styles.bText}>÷</Text>
	        	</TouchableHighlight>
	        </View>
	        <View  style={styles.container}>
	          <TouchableHighlight style={styles.button} name="7" onPress={() => this.handlePress('7')}>
	          	<Text style={styles.bText}>7</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={styles.button} name="8" onPress={() => this.handlePress('8')}>
	          	<Text style={styles.bText}>8</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={styles.button} name="9" onPress={() => this.handlePress('9')}>
	          	<Text style={styles.bText}>9</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={[styles.button, styles.orange]} name="x" onPress={() => this.handlePress('x')} orange>
	          	<Text style={styles.bText}>x</Text>
	        	</TouchableHighlight>
	        </View>
	        <View  style={styles.container}>
	          <TouchableHighlight style={styles.button} name="4" onPress={() => this.handlePress('4')}>
	          	<Text style={styles.bText}>4</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={styles.button} name="5" onPress={() => this.handlePress('5')}>
	          	<Text style={styles.bText}>5</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={styles.button} name="6" onPress={() => this.handlePress('6')}>
	          	<Text style={styles.bText}>6</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={[styles.button, styles.orange]} name="-" onPress={() => this.handlePress('-')} orange>
	          	<Text style={styles.bText}>-</Text>
	        	</TouchableHighlight>
	        </View>
	        <View  style={styles.container}>
	          <TouchableHighlight style={styles.button} name="1" onPress={() => this.handlePress('1')}>
	          	<Text style={styles.bText}>1</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={styles.button} name="2" onPress={() => this.handlePress('2')}>
	          	<Text style={styles.bText}>2</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={styles.button} name="3" onPress={() => this.handlePress('3')}>
	          	<Text style={styles.bText}>3</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={[styles.button, styles.orange]} name="+" onPress={() => this.handlePress('+')} orange>
	          	<Text style={styles.bText}>+</Text>
	        	</TouchableHighlight>
	        </View>
	        <View style={styles.container}>
	          <TouchableHighlight style={[styles.button, styles.buttonWide]} name="0" onPress={() => this.handlePress('0')} wide>
	          	<Text style={styles.bText}>0</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={styles.button} name="." onPress={() => this.handlePress('.')}>
	          	<Text style={styles.bText}>.</Text>
	        	</TouchableHighlight>
	          <TouchableHighlight style={[styles.button, styles.orange]} name="=" onPress={() => this.handlePress('=')} orange>
	          	<Text style={styles.bText}>=</Text>
	        	</TouchableHighlight>
	        </View>
        </View>

	    </View>
	  );
	}
}