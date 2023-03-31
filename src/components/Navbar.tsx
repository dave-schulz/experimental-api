import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { FC } from 'react';
import { buttonVariants } from './layout/Button';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

interface NavbarProps {}

const Navbar = async ({}) => {
  const session = await getServerSession();

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 top-0 left-0 right-0 h-20 border-b broder-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container mx-auto max-w-7xl w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: 'link' })}>
          Text Similarity 1.0
        </Link>

        <div className="md:hidden">{/* <ThemeToggle /> */}</div>

        <div className="hidden md:flex gap-4">
          {/* <ThemeToggle /> */}
          <Link
            href="/documentation"
            className={buttonVariants({ variant: 'ghost' })}
          >
            Documentation
          </Link>

          {session ? (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: 'ghost' })}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
