import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

import { GestureHandlerRootView } from 'react-native-gesture-handler'


const initialMessages = [
    { 
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    { 
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]


export default function MessagesScreen() {
  const [ messages, setMessages ] = useState(initialMessages)
  const [ refreshing, setRefreshing] = useState(false)

  const handleDelete = ( message ) => {
    setMessages(messages.filter(m => m.id !== message.id))
  }

  return (
    <SafeAreaView>
        <FlatList 
            data={messages}
            keyExtractor={message => message.id}
            renderItem={({ item }) => <ListItem 
                title={item.title} 
                subTitle={item.description} 
                image={item.image} 
                onPress={()=> console.log(item)}
                renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
            />}
            ItemSeparatorComponent={() => <ListItemSeparator />}
            refreshing={refreshing} 
            onRefresh={() => {
                setMessages(initialMessages)
            }}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})