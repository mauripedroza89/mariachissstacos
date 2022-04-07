import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Link
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('#f2f4f3', '#0a0908')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('#f2f4f3', '#0a0908'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('#5e503f', '#f2f4f3')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('#f2f4f3', '#5e503f')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box id="feedback" bg={useColorModeValue('#49111c', '#49111c')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading color={useColorModeValue('#f2f4f3', '#f2f4f3')}>Our Clients Speak</Heading>
          <Text color={useColorModeValue('#f2f4f3', '#f2f4f3')}>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Delicious</TestimonialHeading>
              <TestimonialText>
              The best birria in Town!
              The Dorados, and giant quesadilla are the best! </TestimonialText>
            </TestimonialContent>
            <Link color={'white'} href='https://www.google.com/maps/contrib/110134336146027994402/reviews?hl=en-US'>
              <TestimonialAvatar
              src={''}
              name={'Mauricio Munoz'}
            /></Link>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great Salsas</TestimonialHeading>
              <TestimonialText>
              Delicious food! Tried it one day went back the next day eventhough i was low on funds 🤣🤣🤣 thats how good it was!!! Most definitely recommend!!!!
              </TestimonialText>
            </TestimonialContent>
            <Link color={'white'} href='https://www.google.com/maps/contrib/110281027595909957630/reviews?hl=en-US'>
              <TestimonialAvatar
              src={''}
              name={'F Z'}
            /></Link>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Flavorful</TestimonialHeading>
              <TestimonialText>
              Great food, and great prices. Beans were flavorful and spicy. 😋 Tacos were tender and tortillas cooked perfectly soft. Definitely enjoyed their food, and will be returning to try something new.
              </TestimonialText>
            </TestimonialContent>
            <Link color={'white'} href='https://www.google.com/maps/contrib/102797052969583650043/reviews/@29.5666608,-98.4415412,11z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US'>
              <TestimonialAvatar
              src={''}
              name={'Ana Bade'}
            /></Link>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}