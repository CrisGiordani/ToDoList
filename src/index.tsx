
import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableOpacity, Text, View, ScrollView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Logo from '../assets/Logo.png';
import Task from './components/Task';

import { styled } from './styles'
import { useEffect, useState } from 'react';

export default function Index() {

  const [tasksCriadas, setTasksCriadas] = useState<string[]>(["Testando..", "Task2", "Task outra"]);
  const [tasksConcluidas, setTasksConcluidas] = useState<string[]>(["Task concluida"]);
  const [countTasksCriadas, setCountTasksCriadas] = useState<string>("3")
  const [countTasksConcluidas, setCountTasksConcluidas] = useState<string>("1")

  function toggleTaskDone(task: string) {
    setTasksCriadas(prevTasks => prevTasks.filter(t => t !== task))
    setTasksConcluidas(prevTasks => [...prevTasks, task])
  }

  function toggleTaskUndone(task: string) {
    setTasksConcluidas(prevTasks => prevTasks.filter(t => t !== task))
    setTasksCriadas(prevTasks => [...prevTasks, task])
  }

  useEffect(() => {
    setCountTasksCriadas(tasksCriadas.length.toString())
    setCountTasksConcluidas(tasksConcluidas.length.toString())
  }, [tasksCriadas, tasksConcluidas]);

  return (
    <View style={styled.container}>
      <StatusBar style="auto" />
      <Image source={Logo} />
      <View style={styled.form} >
        <TextInput
          style={styled.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={"#535353"}
        />
        <TouchableOpacity style={styled.button}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styled.header}>
        <View style={styled.headerLeft}>
          <Text style={styled.textLeft}>Criadas</Text>
          <TextInput
            style={styled.counter}
            placeholder={countTasksCriadas}
            placeholderTextColor={"#FFF"}
          />
        </View>

        <View style={styled.headerRight}>
          <Text style={styled.textRight}>Concluídas</Text>
          <TextInput
              style={styled.counter}
              placeholder={countTasksConcluidas}
              placeholderTextColor={"#FFF"}
            />
        </View>
      </View>

      <ScrollView style={{marginTop: 30}}>
        {
          tasksCriadas.map((task) => (
            <Task key={task} task={task} checked={false} toggleTask={() => toggleTaskDone(task)} />
          ))
        }
        {
          tasksConcluidas.map((task) => (
            <Task key={task} task={task} checked={true} toggleTask={() => toggleTaskUndone(task)} />
          ))
        }
      </ScrollView>
    </View>
  );
}