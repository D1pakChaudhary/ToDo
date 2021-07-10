import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

	return(
		<View style={styles.header}>
			<Text style={styles.title}> My ToDos </Text>
		</View>



	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "orange",
        padding: 20,
        alignItems: 'center',
		top: 20,
	},

	title: {
		color: "#fff",
                fontSize: 24,
                fontWeight: 'bold',
	},
	





});

