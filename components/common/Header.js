// Import Libraries for making a component

import React from 'react'
import { Text, View } from 'react-native'

// Make a component

const Header = props => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {' '}{props.headerText}{' '}
      </Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20
  }
}

// Make the component available to other parts of the app

export { Header }
