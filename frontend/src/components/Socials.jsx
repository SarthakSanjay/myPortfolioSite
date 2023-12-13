import React from 'react'
import { SocialIcon } from 'react-social-icons'
const Socials = () => {
  return (
    <div className='h-[100px] lg:h-1/6 w-full flex lg:flex-col gap-3 '>
         <SocialIcon target='_blank' url='https://github.com/SarthakSanjay'/>
        <SocialIcon target='_blank' url='https://x.com/SarthakSanjay01'/>
        <SocialIcon target='_blank' url='https://www.linkedin.com/in/sarthak-sanjay-922828240/'/>
        <SocialIcon target='_blank' bgColor='red' url='mailto:sarthaksanjaycoll@gmail.com' />
    </div>
  )
}

export default Socials