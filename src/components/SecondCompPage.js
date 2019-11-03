import React from 'react';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
export default function SecondCompPage() {
  return (
    <div>
      <div id='secondCom' class="jumbotron jumbotron-fluid">
        <div class='row' id='priceExam' >


          <Fade><h0 class='display-4' >ราคาค่าใช้จ่ายในการสมัครสอบ</h0></Fade>
          <Fade><h0 id='price' class='display-4' ><CountUp end={300} duration={5} /> บาท</h0></Fade>


        </div>


        <div id='dateReg' class='row'>
          <Fade left cascade duration={2000} delay={1000}>
            <table id='regTable' class="table table-bordered col-lg-3" >

              <tbody>
                <tr>
                  <th scope="row">สมัครสอบ</th>
                  <td>15-30 ตุลาคม 2562</td>
                </tr>
                <tr>
                  <th scope="row">ประกาศที่นั่ง</th>
                  <td>15 พฤศจิกายน 2562</td>
                </tr>
                <tr>
                  <th scope="row">สอบจริง</th>
                  <td>30 พฤศจิกายน 2562</td>
                </tr>

                <tr>
                  <th scope="row">ประกาศผล</th>
                  <td>1 ธันวาคม 2562</td>
                </tr>
              </tbody>

            </table>
          </Fade>
          <Fade right cascade duration={3000} delay={1000}>
          <div id='regDetail' class='col-lg-6' style={{color: '#00b78b' }}>
            <div class='h1'>เหลือเวลาอีก 3 วันในการสมัครสอบ</div>
            <div class='h1'>สมัครสอบคลิ๊กเลย</div>

            <a class='btn btn-outline-green' href='/register'>Register</a>
          </div>
          </Fade>

        </div>
      </div>
    </div>
  )
}