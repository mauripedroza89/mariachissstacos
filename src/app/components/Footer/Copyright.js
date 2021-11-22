import { Text } from '@chakra-ui/layout'
import React from 'react'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Mariachisss Tacos, All rights reserved.
  </Text>
)