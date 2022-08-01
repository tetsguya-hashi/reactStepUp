import { FC, ReactNode } from "react";
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button bg='teal.400' color='white' _hover={{ opacity: 0.7 }} disabled={disabled || loading} isLoading={loading} onClick={onClick}>{children}</Button>
  )
}