import { FC } from 'react'
import { Button } from '@mantine/core'

const Challenges: FC = () => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li>
          <Button radius='md' className='bg-black'>
            Челлендж 1
          </Button>
        </li>
        <li>
          <Button radius='md' className='bg-black'>
            Челлендж 1
          </Button>
        </li>
        <li>
          <Button radius='md' className='bg-black'>
            Челлендж 1
          </Button>
        </li>
        <li>
          <Button radius='md' className='bg-black'>
            Челлендж 1
          </Button>
        </li>
        <li>
          <Button radius='md' className='bg-black'>
            Челлендж 1
          </Button>
        </li>
      </ul>
    </>
  )
}

export default Challenges
