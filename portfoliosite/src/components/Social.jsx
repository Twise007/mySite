import React from 'react'
import { BsGithub, BsWhatsapp, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';

const datas =[
  {link:"https://wa.me/+2348102904585", icon:<BsWhatsapp/>},
  {link:'https://facebook.com/OgbeniTundeoke', icon:<BsFacebook/>},
  {link:'https://twitter.com/tundeoke007', icon:<BsTwitter/>},
  {link:'https://github.com/Twise007', icon:<BsGithub/>},
  {link:'https://linkedin.com/in/tunde-oke-607684171', icon:<BsLinkedin/>}
]



const Social = () => {
  return (
    <div className='pt-2'>
      <ul className='list-none flex flex-row gap-1 justify-start items-center'>
      {datas.map((data, index) => 
        <div
        key={index}
        onClick={() => window.open(data.link, "_blank")}
        className='transCard w-12 h-12 hover:w-14 hover:h-14 rounded-full flex justify-center items-center cursor-pointer
        text-2xl hover:text-3xl duration-300 text-white hover:text-bg-btn'
      >
        <li>{data.icon}</li>
      </div> 
      )}
      </ul>
    </div>
  )
}

export default Social