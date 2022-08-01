import { FC, memo } from "react";
import { Flex, Heading, Link, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as='nav' bg='teal.500' color='gray.50' align='center' justify='space-between' padding={{ base: 3, md: 5 }} >
        <Flex as='a' align='center' mr={8} _hover={{ cursor: 'pointer' }} >
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }} >ユーザー管理アプリ</Heading>
        </Flex>
        <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex' }} >
          <Box pr={4}>
            <Link pr={4}>ユーザー一覧</Link>
            <Link>設定</Link>
          </Box>
        </Flex>
        <IconButton onClick={onOpen} aria-label="メニューボタン" icon={<HamburgerIcon />} size='sm' variant='unstyled' display={{ base: 'block', md: 'none' }} />
      </Flex>
      <Drawer placement="left" size='xs' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg='gray.100'>
              <Button w='100%' borderRadius={0}>TOP</Button>
              <Button w='100%' borderRadius={0}>ユーザー一覧</Button>
              <Button w='100%' borderRadius={0}>設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
});