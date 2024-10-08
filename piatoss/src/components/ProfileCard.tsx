import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
  Button,
  IconButton,
  Link,
  VStack,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import Profile from "@/../public/profile.png";
import { motion } from "framer-motion";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import {
  FaGithubAlt,
  FaSquareXTwitter,
  FaBloggerB,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa6";

const MotionBox = motion(Box);

export default function ProfileCard({ flipCard }: { flipCard: () => void }) {
  const portfolioUrl =
    "https://piatoss3612.notion.site/Lee-Hyohwak-d02f1c05aca944d7867bacbeef766aab?pvs=74";

  const openPortfolio = () => {
    window.open(portfolioUrl, "_blank");
  };

  const bgColor = useColorModeValue(
    "rgba(255, 255, 255, 0.9)",
    "rgba(26, 32, 44, 0.9)"
  );
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Flex
      p={5}
      w={["100%", "90%", "80%"]}
      alignItems="center"
      justifyContent="center"
      h="100%"
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        bg={bgColor}
        backdropFilter="blur(10px)"
        w="full"
        minW={["300px", "350px", "400px"]} // 최소 너비 설정
        maxW="xl"
        boxShadow="2xl"
        rounded="2xl"
        p={8}
        textAlign="center"
      >
        <VStack spacing={6}>
          <Image
            h={120}
            w={120}
            fit="cover"
            rounded="full"
            src={Profile.src}
            alt="Profile Image"
            boxShadow="lg"
          />
          <VStack spacing={2}>
            <Heading size="lg" color={textColor} fontFamily={""}>
              Lee Hyohwak
            </Heading>
            <Text fontWeight="bold" color="gray.600">
              Full-Stack Developer
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Heading size="md" color={textColor} fontFamily={""}>
              My Journey
            </Heading>
            <Typist cursor={{ show: false }} avgTypingDelay={40}>
              <Text color={textColor} fontSize="sm">
                Exploring the integration of blockchain in everyday life,
                crafting a better world with the power of blockchain
              </Text>
            </Typist>
          </VStack>

          <Stack direction="row" spacing={4} align="center" justify="center">
            {[
              {
                href: "https://github.com/piatoss3612",
                icon: FaGithubAlt,
                label: "GitHub",
                color: "gray",
              },
              {
                href: "https://piatoss3612.tistory.com/",
                icon: FaBloggerB,
                label: "Blog",
                color: "orange",
              },
              {
                href: "https://twitter.com/piatoss3612",
                icon: FaSquareXTwitter,
                label: "Twitter",
                color: "blue",
              },
              {
                href: "mailto:piatoss3612@mail.com",
                icon: FaEnvelope,
                label: "Email",
                color: "green",
              },
            ].map((item, index) => (
              <Link href={item.href} key={index} isExternal>
                <IconButton
                  aria-label={item.label}
                  icon={<item.icon />}
                  size="lg"
                  fontSize="24px"
                  color={`${item.color}.500`}
                  bg="transparent"
                  _hover={{
                    bg: `${item.color}.100`,
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                />
              </Link>
            ))}
          </Stack>

          <Stack w="full" maxW="md" spacing={4} mt={4}>
            <Button
              w="full"
              bg="blue.500"
              color="white"
              rounded="xl"
              boxShadow="md"
              _hover={{ bg: "blue.600", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              onClick={openPortfolio}
            >
              Portfolio
            </Button>
            <Button
              w="full"
              bg="pink.500"
              color="white"
              rounded="xl"
              boxShadow="md"
              _hover={{ bg: "pink.600", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              leftIcon={<FaHeart />}
              onClick={flipCard}
            >
              Support
            </Button>
          </Stack>
        </VStack>
      </MotionBox>
    </Flex>
  );
}
