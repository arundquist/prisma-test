"use client"
import { addOne } from '@/lib/prismaHandling'
import React from 'react'

const PrismaButton = () => {
  return (
    <div><button onClick={()=>addOne()}>add one</button></div>
  )
}

export default PrismaButton