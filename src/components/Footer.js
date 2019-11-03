import React from 'react';
import '../style/style.css';
import lineIcon from '../pic/socialIcon/iconmonstr-line-3-240.png';
import facebookIcon from '../pic/socialIcon/iconmonstr-facebook-3-240.png';
import youtubeIcon from '../pic/socialIcon/iconmonstr-youtube-8-240.png';
export default function Footer(){
    return (
        <div style={{color:'white',backgroundColor:'black',paddingTop:'20px'}}>
            <div>
            <div class='display-4' style={{textAlign:'center'}}>DEBUGEXAM 2019</div>
            <h2 id='FollowUs' style={{textAlign:'center'}}>Follow us:</h2>
            <div class='row' id='footerContent' style={{alignItems:'center'}}>
                <div><a href='https://www.facebook.com/debugexam/'><img src={facebookIcon} style={{ width: '48px', borderRaefdius: '10px',marginLeft:'10px'}} /></a></div>
                <div><img src={lineIcon} style={{ width: '48px', borderRadius: '10px',marginLeft:'10px' }} /></div>
                <div><a href='https://www.youtube.com/channel/UC3m3skmSIqwSmrZjTTRYNIQ'><img src={youtubeIcon} style={{ width: '48px', borderRadius: '10px',marginLeft:'10px'}} /></a></div>
            </div>
            <div style={{textAlign:'center'}}>COPYRIGHT2019@vachirachat</div>
            </div>

        </div>
    )
}