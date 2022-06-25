import type { NextPage } from 'next'
import Form from '../components/Form'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className='text-5xl'>Вітаємо!</h1>
      <p className='my-6'>
        Введіть код доступу до змагання, аби перейти до завдань. Якщо у Вас немає коду доступу, зверніться до
        організатора змагання.
      </p>
      <Form />
    </div>
  )
}

export default Home
