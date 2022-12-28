import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Tarefas de hoje</Text>
          <View style = {styles.items}>
            {/*Aqui vão as tarefas */}
            <Task text = {'Tarefa 1'}/>
            <Task text = {'Tarefa 2'}/>
            <Task text = {'Tarefa 3'}/>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop: 30,
  },
});
