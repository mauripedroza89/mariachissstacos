import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
  } from '@chakra-ui/react';
  
import banner from '../../assets/images/banner2.jpeg';

  export default function Owner() {
    return (
      <section id="about">
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              align={"center"}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#49111c',
                  zIndex: -1,
                }}>
                Our manager,
              </Text>
              <br />
              <Text as={'span'} color={'#49111c'}>
                Christian Hernandez!
              </Text>
            </Heading>
            <Text color={'#49111c'}>
              Snippy is a rich coding snippets app that lets you create your own
              code snippets, categorize them, and even sync them in the cloud so
              you can use them anywhere. All that is free!
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              align={"center"}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                as={'a'}
                href="https://www.yelp.com/biz/mariachisss-tacos-san-antonio-3"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'#49111c'}
                _hover={{ bg: '#a9927d' }}>
                Rate our food
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'auto'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Our cook'}
                fit={'cover'}
                align={'center'}
                w={'auto'}
                h={'auto'}
                src={banner}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      </section>
    );
  }
