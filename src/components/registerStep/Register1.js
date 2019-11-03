import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

export class Register1 extends Component {
    constructor(props){
        super(props);
        
    }
    continue = e =>{

        
        
        if ((this.props.values.IDCard.length != 13 || this.props.values.IDCard != this.props.values.conIDCard || this.props.values.phoneNumber.length != 10)){
            
            alert ('กรุณากรอกข้อมูลให้ถูกต้อง');
            
        }else{
    
        e.preventDefault();
        this.props.nextStep();
        }
        
    };
    render() {
       
        const handleChange = this.props.handleChange;
        const values = this.props.values;
        const errors = this.props.values.errors;
        console.log(this.props);
        console.log(errors);
        return (
            <div>
                
                <form class='col-lg-5 col-sm-12'>
                    <h1>ขั้นตอนสมัคร STEP 1</h1>
                    <div class="form-group">
                        <label for="IDCard">รหัสบัตรประชาชน 13 หลัก</label>
                        <input type='number' class="form-control" id="IDCard" placeholder="x-xxxx-xxxxx-xx-x" onChange={handleChange('IDCard')}  />
                        
                        
                        <small style={{color:'red'}}>{this.props.values.IDCard.length != 13 && this.props.values.IDCard.length != 0 && 'กรุณาใส่รหัสบัตรประชาชนให้ถูกต้อง' }</small>
                        
                        
                    </div>
                    <div class="form-group">
                    <label for="conIDCard">ยืนยันรหัสบัตรประชาชน 13 หลัก</label>
                        <input type='number' class="form-control" id="comIDCard" placeholder="x-xxxx-xxxxx-xx-x" onChange={handleChange('conIDCard')}   />
                        <small style={{color:'red'}}>{this.props.values.IDCard != this.props.values.conIDCard && this.props.values.conIDCard.length != 0 && 'บัตรประชาชนไม่ตรงกับด้านบน'}</small>
                        
                    </div>
                        <div class="form-group">
                        <label for="phoneNumber">เบอร์โทรศัพท์มือถือ</label>
                        <input type='number' class="form-control" id="phoneNumber" placeholder='xxx-xxx-xxxx' onChange={handleChange('phoneNumber')} required='true' />
                        <small style={{color:'red'}}>{this.props.values.phoneNumber.length != 10 && this.props.values.phoneNumber.length != 0 && 'กรุราใส่หมายเลขโทรศัพท์ให้ถูกต้อง'}</small>
                    </div>
                        
                        <button class='btn btn-outline-green'  onClick={this.continue}>ต่อไป</button>
                </form>
                            
                        </div>
                        )
                    }
                }
export default Register1;