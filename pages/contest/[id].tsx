import React from 'react'
import { NextPage } from 'next'
import Challenges from '../../components/Challenges'
import Challenge from '../../components/Challenge'

const Contest: NextPage = () => {
  return (
    <div className="flex gap-8">
      <Challenges />
      <Challenge />
    </div>
  )
}

export default Contest
