import { FC } from 'react'
import Answer from './Answer'

const Challenge: FC = () => {
  return (
    <div className="flex flex-col justify-between bg-black p-8 text-white rounded-xl">
      <h1 className="text-3xl">Челлендж 1</h1>
      <p className="my-4">Тут знаходиться опис челленджу, який має вирішити учасник змагання.</p>
      <Answer />
    </div>
  )
}

export default Challenge
