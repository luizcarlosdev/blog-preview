/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import banner from '../public/images/illustration-article.svg'
import autor from '../public/images/image-avatar.webp'

import Card from './components/Card';

function App() {
  return (
    <>
      <Card 
      banner={banner}
      category='Learning'
      published='Published 21 Dez 2024'
      title='html & css foundations'
      introduction='These languages are the backbone of every website, defing structure, content and presentation.'
      autor_photo={autor}
      autor='greg hooper'
      />
    </>
  )
}

export default App
