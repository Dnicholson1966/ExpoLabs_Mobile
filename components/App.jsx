import { React, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  // Current array of tasks to complete.
  const currentTasks = [
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ];
  const [tasks, setTasks ] = useState(currentTasks) // useState hook, takes in current tasks.

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Other styles if necessary
});

export default App;