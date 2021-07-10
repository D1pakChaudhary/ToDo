import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';

export default function App() {
const [todos, setTodos] = useState([
		{title: 'welcome!', key: '1'},
		{title: 'touching a todo item deletes it', key: '2'},
]);


const pressHandler = (key) => {
	 setTodos((prevTodos) => {
		return prevTodos.filter(todos => todos.key != key);
	});
	
}

const buttonHandler = (text) => {
	setTodos(prevTodos => {
		return [
		{title: text, key: Math.random().toString() },
		...prevTodos
		];
	})
}


  return (
    <SafeAreaView style={styles.container}>
	  <Header />
	  
	  <View style= {styles.addContainer}>
	  <AddItem buttonHandler={buttonHandler} />
	  </View>

	  <View style={styles.todoContainer}>

	  <FlatList
				data = {todos}
				renderItem ={ ({item}) => (
					<TodoItem item={item} pressHandler={ pressHandler } />
				)}
		/>
	  </View>
	  
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
  todoContainer: {
	backgroundColor: '#fff',
	paddingRight: 50,
	paddingTop: 20,
	padding: 20,
	alignSelf: 'center'
  },

  addContainer: {
	paddingTop: 50,
	paddingBottom: 20,
	alignSelf: 'center'

  }
});
