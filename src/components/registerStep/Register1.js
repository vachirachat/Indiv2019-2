import React, { Component } from 'react';

export class Register1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <form class='col-lg-5 col-sm-12'>
                    <div class="form-group">
                        <label for="IDCard">รหัสบัตรประชาชน 13 หลัก</label>
                        <input type='text' class="form-control" id="IDCard" aria-describedby="emailHelp" placeholder="x-xxxx-xxxxx-xx-x" />
                            <small id="emailHelp" class="form-text text-muted">เพื่อใช้ในการ login ครั้งหน้า</small>
                    </div>
                    <div class="form-group">
                    <label for="comIDCard">ยืนยันรหัสบัตรประชาชน 13 หลัก</label>
                        <input type='text' class="form-control" id="comIDCard" placeholder="x-xxxx-xxxxx-xx-x" />
                        <small id='checkID' class="form-text text-muted"></small>
                    </div>
                        <div class="form-group">
                            <label for="phoneNumber">เบอร์โทรศัพท์มือถือ</label>
                            <input type='text' class="form-control" id="phoneNumber" placeholder='xxx-xxx-xxxx'/>
                    </div>
                        
                        <button type="submit" class="btn btn-outline-green" onClick={this.continue}>ต่อไป</button>
                </form>
                            
                        </div>
                        )
                    }
                }
export default Register1;