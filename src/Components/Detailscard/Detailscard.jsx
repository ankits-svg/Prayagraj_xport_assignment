import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

const Detailscard = () => {
  const cardRefs = useRef([]);
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    // Create a ScrollTrigger for each card
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%', // Adjust this value as needed
        },
      });
    });
  }, []);

  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        What is our company doing?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'We serve'} stat={'50,000 people'} ref={(el) => (cardRefs.current[0] = el)} />
        <StatsCard title={'In'} stat={'30 different countries'} ref={(el) => (cardRefs.current[1] = el)} />
        <StatsCard title={'Who speak'} stat={'100 different languages'} ref={(el) => (cardRefs.current[2] = el)} />
      </SimpleGrid>
    </Box>
  );
};

export default Detailscard;
