import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Tarefas de hoje</Text>
          <View style = {styles.items}>
            {/*Aqui vão as tarefas */}
            <Task />
            <Task />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper:{},
  sectionTitle:{},
  items:{},
});
