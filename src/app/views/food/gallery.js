import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Grid, 
    GridItem,
    Link
  } from '@chakra-ui/react';


import image1 from '../../assets/images/mexicanfood.jpeg';
import image2 from '../../assets/images/wings.png';
 

export default function Picture(props) {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={2}>
        <GridItem>
            <Center py={12}>
            <Link href='/menu/food/mexicanfood'>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'680px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                    rounded={'lg'}
                    mt={0}
                    pos={'relative'}
                    height={'410px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${image1})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                        filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={430}
                        width={482}
                        objectFit={'cover'}
                        src={image1}
                    />
                    </Box>
                    <Stack pt={10} align={'center'}>
                    
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        Mexican food
                    </Heading>
                    
                    </Stack>
                </Box>
               </Link>
            </Center>
          </GridItem>  
          <GridItem>
            <Center py={12}>
            <Link href='/menu/food/americanfood'>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'680px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                    rounded={'lg'}
                    mt={0}
                    pos={'relative'}
                    height={'410px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${image2})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                        filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={430}
                        width={482}
                        objectFit={'cover'}
                        src={image2}
                    />
                    </Box>
                    <Stack pt={10} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        American food
                    </Heading>

                    </Stack>
                </Box>
               </Link>
            </Center>
          </GridItem> 
    </Grid>
  );
}
