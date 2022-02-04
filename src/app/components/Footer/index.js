import { Box, Stack, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Copyright } from './Copyright'
import logo from '../../assets/images/logo.jpeg'
import { SocialMediaLinks } from './SocialMediaLinks'

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >
    <Stack>
      
      <Stack id="socialmedia" direction="column" spacing="4" align="center" justify="space-around">
        
        <SocialMediaLinks />
      </Stack>
      <Avatar src={logo}/>
      <Copyright
        alignSelf={{
          base: 'center',
          sm: 'start',
        }}
      />
    </Stack>
  </Box>
)

export default Footer;