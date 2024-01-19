import { useState } from 'react';

import Logo from '@/components/Logo';
import Menu from '@/components/Menu';

export default function Profil() {
  const [bool, setBool] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url('/bg.png')` }}
      className='flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat'
    >
      <div>
        <Menu bool={bool} setBool={setBool} />
      </div>

      <div className='bg-primary/30 flex w-3/4 flex-row gap-6 backdrop-blur-md'>
        <div className='flex justify-center p-4'>
          <Logo />
          {/* <img src='/Logo2.svg' alt='logo' className='w-full' /> */}
        </div>
        <div className='bg-primary flex w-3/4 flex-row gap-6'>
          <div className='bg-secondary text-primary font-base flex grow flex-row items-center justify-center gap-6 p-3'>
            <form className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='prenom'>{'Prénom:'}</label>
                <input
                  type='text'
                  id='prenom'
                  value='Mike'
                  className='border-divider text-primary w-full border-b-2 bg-transparent'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='nom'>{'Nom:'}</label>
                <input
                  type='text'
                  id='nom'
                  value='Xiong'
                  className='border-divider text-primary w-full border-b-2 bg-transparent'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='mail'>{'Email:'}</label>
                <input
                  type='text'
                  id='mail'
                  value='Mike@test.com'
                  className='border-divider text-primary w-full border-b-2 bg-transparent'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='birthdate'>{'Date de naissance:'}</label>
                <p className='border-divider bg-transparent'>07/09/1993</p>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='genre'>{'Genre:'}</label>
                <select
                  id='genre'
                  value='male'
                  className='border-divider bg-transparent'
                >
                  <option value='male'>{'Homme'}</option>
                  <option value='female'>{'Femme'}</option>
                  <option value='other'>{'Autre'}</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
  );
}
