import { FC } from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
import { useRouter } from 'next/router'
import { Button } from '@mantine/core'
import { LogoutIcon } from '@heroicons/react/outline'

const Header: FC = () => {
  const router = useRouter()

  return (
    <header className='py-6 flex justify-between items-center'>
      <Image
        src={logo}
        priority={true}
        alt='tsyfra'
      />
      {
        router.route !== '/' && (
          <div>
            <Button className='bg-white text-black p-0' rightIcon={<LogoutIcon className='text-black w-6' />}>
              Вийти
            </Button>
          </div>
        )
      }
    </header>
  )
}

export default Header
