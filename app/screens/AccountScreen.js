import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]


export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
            <ListItem 
                title="Chetraru Ion"
                subTitle="fdsfds@gmail.com"
                image={require('../assets/mosh.jpg')}
            />
        </View>

        <View style={styles.container}>
            <FlatList 
                data={menuItems}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => 
                    <ListItem
                        title={item.title}
                        IconComponent={
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                        }
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
            />
        </View>
        <ListItem 
            title="Log Out"
            IconComponent={
                <Icon   
                    name="logout"
                    backgroundColor="#ffe66d"
                />
            }
        />
    </Screen>

  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})