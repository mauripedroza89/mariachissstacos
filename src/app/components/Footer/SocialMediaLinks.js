import { ButtonGroup, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaInstagramSquare, FaFacebookSquare, FaYelp, FaMapMarkerAlt} from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://www.instagram.com/mariachisss_tacos/" aria-label="Instagram" icon={<FaInstagramSquare fontSize="30px" />} />
    <IconButton as="a" href="https://www.facebook.com/Mariachisss-tacos-113314177519736/" aria-label="Facebook" icon={<FaFacebookSquare fontSize="30px" />} />
    <IconButton as="a" href="https://www.yelp.com/biz/mariachisss-tacos-san-antonio-3" aria-label="Yelp" icon={<FaYelp fontSize="30px" />} />
    <IconButton as="a" href="https://goo.gl/maps/rPZHwA1gc3ftdWGm6" aria-label="Maps" icon={<FaMapMarkerAlt fontSize="30px" />} />

  </ButtonGroup>
)