'use client';

import { FC, useState } from 'react';
import Button from './layout/Button';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
    } catch (error) {}
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
