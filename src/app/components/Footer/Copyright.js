import { Text } from '@chakra-ui/layout'
import React from 'react'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props} color='#f2f4f3'>
    &copy; {new Date().getFullYear()} Mariachisss Tacos, All rights reserved.
  </Text>
)