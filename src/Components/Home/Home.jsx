import React, {useEffect} from 'react'
import './home.css'
import homeImg from '../../Assets/homeImg.png'
import {IoLocationSharp} from 'react-icons/io5'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { init } from 'aos'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='home'> 
      <div className='overlay'></div>
      <div className='homeContent container'>
        <div className='textDiv'>
          <h1 data-aos="fade-up"
          className='homeTitle'>
            Colloquium.ai
          </h1>
          <span data-aos="fade-up"
          className='smallText'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
          </span>
        </div>

        <div data-aos="fade-up" className='cardDiv grid'>
          <div className='domainInput'>
            <div className='input flex'>
              <input type="text" placeholder="Enter your domain here..."/>
            </div>
            <div className='searchOptions flex'>
            <AiOutlineSearch className='icon'/>
            <span>SEARCH</span>
          </div>
        </div>
          </div>

        {/*<div data-aos="fade-up"  className='imageContainer'>
          <img src={homeImg} alt='interview' />
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className='rightIcons'>
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FiTwitter className="icon"/>
          </div>

          <div className='leftIcons'>
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
  </div>*/}
      </div>
    </section>
  )
}

export default Home