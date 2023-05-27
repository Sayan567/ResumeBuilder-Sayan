import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    // HStack aligns items horizontally. Row is also an alias for HStack.
    <HStack p={3} bg="blueviolet" justify="center" position='fixed' w='100%' bottom={0}>
      <Text color="white">
        Developed by{" "}
        <Link href="https://github.com/sayan567" isExternal color="black">
          Sayan Chakraborty <ExternalLinkIcon />
        </Link>{" "}
      </Text>
    </HStack>
  );
};
export default Footer;
