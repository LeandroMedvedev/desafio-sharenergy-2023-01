import { Center, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

import { Menu } from './Menu';
import { theme } from '../../styles/theme';

export const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Flex
      h="18vh"
      borderBottom="1px"
      borderBottomColor="gray.0"
      paddingX="8"
      paddingY="4"
      boxShadow="4px 3px 20px 0px #F2F2F2"
      bg={theme.colors.gray['0']}
    >
      <Flex align="center">
        <Center
          marginRight="0.5"
          background="blue.400"
          width="60px"
          height="60px"
          borderRadius="8px"
        >
          <Text
            marginLeft="50px"
            borderRadius="6px"
            padding="10px 20px"
            fontSize={theme.fontSizes['4xl']}
            fontFamily={theme.fonts.body}
            color={theme.colors.green['0']}
            bg={theme.colors.green['800']}
            fontWeight={theme.fontWeights.light}
          >
            <b>Q</b>uiz
          </Text>
        </Center>
      </Flex>
      <Center
        ml="auto"
        onClick={onToggle}
        fontSize={['2.5rem', '2.5rem', '2.5rem', '3rem']}
      >
        <FaBars
          color={theme.colors.gray['500']}
          // fontWeight={theme.fontWeights.hairline}
          // cursor="pointer"
        />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
