'use client';

import { FC, useState } from 'react';
import Button from './layout/Button';

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
    } catch (error) {}
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
