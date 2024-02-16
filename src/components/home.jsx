import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserView,MobileView } from "react-device-detect";
import { FaStar } from "react-icons/fa";

export default function home() {
  return (
  <div className='mt-16'>
  <div className="containeraa">
    <div className="container_content">
      <div className="container_content_inner">
        <div className="title">
        <BrowserView className='projecttilt'>
          The beginning
        </BrowserView>
        <MobileView className='projecttiltmobile'>
          The beginning
        </MobileView>
        </div>
        <div className="par">
          <p className='myhomepara'>
          So many of our dreams at first seem impossible, then they seem improbable, 
          and then, when we summon the will,
          they soon become inevitable.{" "}
          </p>
        </div>
        <div className="btns">
          <button className="btns_more"><Link to='/about'>About me</Link></button>
        </div>
      </div>
    </div>
    <BrowserView className="container_outer_img">
      <div className="img-inner">
        <img
          src="https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="container_img"
          alt="walking_img"
          />
    </div>
    </BrowserView>
    <MobileView className="container_outer_img">
      <div className="img-inner">
        <FaStar className="container_img" alt="walking_img"/>
    </div>
    </MobileView>
  </div>
  <div className="overlay" />

    </div>
  )
}
