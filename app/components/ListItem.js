import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                    {IconComponent}
                    { image && <Image source={image} style={styles.image} /> }
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText> 
                        { subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText> }
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: colors.medium
    },  
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70, 
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    }
})