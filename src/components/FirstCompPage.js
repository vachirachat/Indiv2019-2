import React from 'react';
import Register from './Register';
import Logo from '../pic/Logo.png';
import Fade from 'react-reveal/Fade';
export default function FirstCompPage() {
    
    return (
        
        <div>
            <div id='firstContainer' style={{ backgroundColor: "#00b78b" }}>
                <div class='row'>

                    <div class='col-lg-4 col-sm-12'>
                        <Fade cascade>
                            <img id='firstMainLogo' src={Logo} style={{ width: '300px', borderRadius: '10px' }} />
                        </Fade>
                    </div>
                    <div class='col-lg-6 col-sm-12' style={{ color: 'white' }}>
                        <Fade cascade duration={4000}>
                            <div id="firstMainContent">
                                <h1 class="display-4">การสอบ Debug คืออะไร?</h1>
                                <p class="lead">การสอบวัดผลวิชาคณิตศาสตร์ ที่ประเมินความสามารถทางคณิตศาสตร์ของน้องๆ และเปรียบเสมือน Pre-test สำหรับข้อสอบ 7 วิชาสามัญ และ PAT1 ในสภาพสนามจริงอย่างแท้จริง
            
                    ข้อดียิ่งไปกว่านั้นก็คือ ผลสอบของเราชี้จุดอ่อน ไม่ว่าจะเป็นความสะเพร่า แม่นยำ หรือพื้นฐานในแต่ละบทออกมาให้น้องๆ ได้เห็นกันจะจะ พร้อมนำไปปรับปรุงทุกและพัฒนาได้ทันท่วงที ไม่ต้องไปพลาดในวันสอบจริงอีกด้วย!</p>
                    
        <a id='register1' class='btn btn-outline-green' href='/register'>Register</a>
                            </div>
                        </Fade>
                    </div>
                    
                    
                </div>

            </div>
            <div id='whyDebug' style={{textAlign:'center'}}>
                <div class='display-3 kanitFont'><Fade duration={3000}>ทำไมต้องสอบ Debug</Fade></div>
                <div class='display-4 kanitFont' style={{ color: '#c8171e' }}><Fade duration={4000}>คะแนนสอบเลขดี สอบอะไรก็ติด!</Fade></div>
            </div>
            <div id='rowInFour' class='row'>
            <div class='col-lg-4'>
                <div  style={{marginBottom:'50px',marginTop:'50px'}}>
                    <div class='h2 kanitFont'>เสมือนจริงที่สุด</div>
                    <ul class='10ul'  >
                        <li><div class='h6'>ทีมงานคุณภาพที่ออกแนวข้อสอบมาใกล้เคียงกับแนวของ สทศ มากที่สุด ทั้งจำนวนข้อ การติดตะแนน และสัดส่วนบทที่ออกสอบ</div></li>
                    </ul>
                </div>
                <div class='10ul'>
                    <div class='h2 kanitFont'>จำลองบรรยากาศ</div>
                    <ul>
                        <li><div class='h6'>จำลองบรรยากาศการสอบเหมือนจริงมากที่สุด ภายใต้ความกดดันและเวลาจำกัดในการทำข้อสอบ</div></li>
                    </ul>
                </div>
            </div>
            <div class='col-lg-3'>
            <img src={Logo} style={{width:'100%'}}/>
            </div>
            <div class='col-lg-4'>
                <div  style={{marginTop:'50px',marginBottom:'50px'}}>
                    <div class='h2 kanitFont'>มีเฉลยข้อสอบละเอียด</div>
                    <ul>
                        <li><div class='h6'>เมื่อสอบเสร็จแล้วสามารถนำข้อสอบกลับบ้านได้ เอาไว้รอเช็คกับเฉลยอย่างละเอียด พร้อมทบทวนหรือทำซ้ำได้ทุกเมื่อ ทุกเวลาที่ต้องการ</div></li>
                    </ul>
                </div>
                <div>
                    <div class='h2 kanitFont'>รอประกาศผลภายใน 15 วัน</div>
                    <ul>
                        <li><div class='h6'>ประกาศผลคะแนนแยกตามบทและแยกตามทักษะทางคณิตศาสตร์ในแต่ละด้าน พร้อมวิเคราะห์ผลอย่างละเอียด</div></li>
                        <li><div class='h6'>มีข้อสอบช้อยห์เอาไว้หลอก หากน้องๆผิดพลาด จะมีการบอกจุดผิดเหล่านั้นให้ในหน้าประกาศผลสอบ</div></li>
                    </ul>
                </div>
                </div>
            </div>

        </div>
    )
}