import { FC, memo, useCallback, useEffect } from "react";
import { useDisclosure, Wrap, WrapItem, Spinner, Center } from '@chakra-ui/react';

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from '../../hooks/useAllUsers'
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
  }, [users, onSelectUser, onOpen]);

  return (
    <>
      {loading ? (<Center h='100vh'><Spinner /></Center>) : (
        <Wrap p={{ base: 4, md: 10 }} >
          {users.map((user) => (
            <WrapItem key={user.id} mx='auto'>
              <UserCard onClick={onClickUser} imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} id={user.id} />
            </WrapItem>
          ))}
        </Wrap >
      )
      }
      <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
    </>
  )
});