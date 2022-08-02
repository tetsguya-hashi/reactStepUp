import { FC } from "react";
import { Box, Image, Stack, Text } from '@chakra-ui/react';

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
}

export const UserCard: FC<Props> = (props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box onClick={() => onClick(id)} w='260px' h='260px' bg='white' borderRadius='10px' shadow='md' p={4} _hover={{ cursor: 'pointer', opacity: 0.8 }}>
      <Stack textAlign='center'>
        <Image borderRadius='full' boxSize='160px' m='auto' src={imageUrl} alt={userName} />
        <Text fontSize='lg' fontWeight='bold'> {userName} </Text>
        <Text fontSize='sm' color='gray'>{fullName}</Text>
      </Stack>
    </Box>

  )
}