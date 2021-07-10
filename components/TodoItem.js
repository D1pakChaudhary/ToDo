
import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function TodoItem ({ item, pressHandler }) {

	return(
	<TouchableOpacity onPress={() => pressHandler(item.key)}>
		<View>
			<Text style={styles.todoitems}> {item.title} </Text>
		</View>

	</TouchableOpacity>
	);


}

const styles = StyleSheet.create({
	todoitems: {
		color: "black",
		borderBottomWidth: 1,
		padding: 16,
		fontSize: 16,
		borderStyle: "dashed", 
	}

});
