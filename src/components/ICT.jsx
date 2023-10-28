import React from 'react'
import { LinearGradient } from 'react-text-gradients'

function ICT () {
  return (
    <div className='bg-black'>
      <section className='header '>
        
        <h1 className='text-center pt-7 text-9xl font-bold tracking-tight'>
          <LinearGradient gradient={['to left', '#deb8f5 ,#5b6cf9']}>
            ICT
          </LinearGradient>
        </h1>
        <p className='text-center py-6 text-lg leading-8 text-zinc-400 font-bold  '>
          Inner Circle Trader Michael J. Huddleston...
        </p>
      </section>
    </div>
  )
}
export default ICT
