import React, {useState} from 'react';
import { TextInput, Button, StyleSheet,  View } from 'react-native';

export default function AddItem({buttonHandler}) {
const [text, setText] = useState('');


const onChangeText = (val) => {
	setText(val);
};

const onPress =() => {
	buttonHandler(text);
	setText('');

};

return (
	<View>
	<TextInput 
		style = { styles.input }
		placeholder = 'enter todo here'
		onChangeText = {onChangeText}
		value={text}
	/>

	<Button 
		color = "orange"
		title="Add Todo"
		onPress={ onPress } 

	/>
	</View>
);

}

const styles = StyleSheet.create({
	input: {
		borderBottomWidth: 1,
		
		padding: 10,
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginBottom: 5,
	},

});




