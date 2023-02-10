import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import AppText from './AppText'
import colors from '../config/colors'

export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                    {IconComponent}
                    { image && <Image source={image} style={styles.image} /> }
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText> 
                        { subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText> }
                    </View>
                    <MaterialCommunityIcons name='chevron-right' size={25} color={colors.medium} />
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
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    image: {
        width: 70, 
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    }
})