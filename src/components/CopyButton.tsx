'use client';

import { Copy } from 'lucide-react';
import { ButtonHTMLAttributes, FC } from 'react';
import Button from './layout/Button';
import { toast } from './layout/Toast';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);

        toast({
          title: 'Copied!',
          message: 'API Key copied to your clipboard',
          type: 'success',
        });
      }}
      variant={'ghost'}
      className={className}
    >
      <Copy className="h-5 w-5" />
    </Button>
  );
};

export default CopyButton;
