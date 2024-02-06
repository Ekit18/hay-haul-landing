import { Menu, Truck } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <div className='w-full h-16 drop-shadow-md sticky top-0 z-10 flex justify-center bg-gray-50'>
        <div className='w-full md:px-0 px-4 md:w-3/4 h-full flex flex-row justify-between items-center'>
          <div className='flex flex-row gap-4 justify-center items-center'>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  className='bg-transparent min-[1110px]:hidden flex justify-center items-center'
                  size='icon'
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='left'
                className='flex flex-col items-start justify-start pr-0'
              >
                <NavbarLinks isSheetContent={true} />
                <div className='sm:hidden block'>
                  <a className='text-lg font-bold' href=''>
                    Log in
                  </a>
                  <a className='text-lg font-bold text-secondary pl-3' href=''>
                    Sign up
                  </a>
                </div>
              </SheetContent>
            </Sheet>
            <span className='w-12 h-10'>
              <Truck className='w-full h-full' />
            </span>
            <span className='text-2xl font-normal'>Hay Haul</span>
          </div>
          <NavbarLinks />
          <div className='sm:block hidden'>
            <a className='text-lg font-bold' href=''>
              Log in
            </a>
            <a className='text-lg font-bold text-secondary pl-3' href=''>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };

interface NavbarLinksProps {
  isSheetContent?: boolean;
}

const NavbarLinks = ({ isSheetContent = false }: NavbarLinksProps) => {
  return (
    <>
      <div
        className={cn(
          'min-[1110px]:block hidden',
          isSheetContent && 'block mt-10'
        )}
      >
        <ul
          className={cn(
            'flex flex-row gap-5 text-lg ',
            isSheetContent && 'flex-col gap-4 w-full'
          )}
        >
          <li className='hover:font-medium'>
            <a href='#advantages'>Advantages</a>
          </li>
          <li className='hover:font-medium'>
            <a href='#services'>Services</a>
          </li>
          <li className='hover:font-medium'>
            <a href='#reviews'>Reviews</a>
          </li>
          <li className='hover:font-medium'>
            <a href='#FAQ'>FAQ</a>
          </li>
          <li className='hover:font-medium'>
            <a href='#contactUs'>Contact us</a>
          </li>
        </ul>
      </div>
    </>
  );
};
