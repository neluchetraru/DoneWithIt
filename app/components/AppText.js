import { Text } from 'react-native'
import React from 'react'

import defaultStyles from '../config/styles'

export default function AppText({ children, style, ...otherStyles }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherStyles} >{children}</Text>
  )
}
