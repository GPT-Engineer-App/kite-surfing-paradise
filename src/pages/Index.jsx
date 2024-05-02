import { Box, Container, Heading, Text, Image, Button, VStack, Link } from "@chakra-ui/react";
import { FaWind, FaWater, FaBookOpen, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Kitesurfing Adventures
          </Heading>
          <Text fontSize="xl">Your ultimate guide to the world of kitesurfing</Text>
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1627068477565-3a66d5f76d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraXRlc3VyZmluZ3xlbnwwfHx8fDE3MTQ2NjAwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kitesurfing action" mt={4} boxSize="sm" objectFit="cover" />
        </Box>

        <VStack spacing={5}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Learn Kitesurfing</Heading>
            <Text mt={4}>Get started with kitesurfing by understanding the basics and safety measures.</Text>
            <Button rightIcon={<FaBookOpen />} colorScheme="teal" mt={3}>
              Learn More
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Best Locations</Heading>
            <Text mt={4}>Discover the best locations worldwide for kitesurfing.</Text>
            <Button rightIcon={<FaWind />} colorScheme="teal" mt={3}>
              Explore Locations
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Equipment Guide</Heading>
            <Text mt={4}>Learn about the essential equipment needed for kitesurfing.</Text>
            <Button rightIcon={<FaWater />} colorScheme="teal" mt={3}>
              Check Equipment
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">About Us</Heading>
            <Text mt={4}>Learn more about our mission and the team behind Kitesurfing Adventures.</Text>
            <Button rightIcon={<FaInfoCircle />} colorScheme="teal" mt={3}>
              About Us
            </Button>
          </Box>
        </VStack>

        <Text fontSize="sm" color="gray.600">
          © 2023 Kitesurfing Adventures. All rights reserved.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
