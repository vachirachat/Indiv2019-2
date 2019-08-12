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
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">รหัสบัตรประชาชน 13 หลัก</label>
                        <input class="form-control" id="IDCard1" aria-describedby="emailHelp" placeholder="x-xxxx-xxxxx-xx-x" />
                            <small id="emailHelp" class="form-text text-muted">เพื่อใช้ในการ login ครั้งหน้า</small>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputEmail1">ยืนยันรหัสบัตรประชาชน 13 หลัก</label>
                        <input class="form-control" id="IDCard1" placeholder="x-xxxx-xxxxx-xx-x" />
                        <small id='checkID' class="form-text text-muted"></small>
                    </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">เบอร์โทรศัพท์มือถือ</label>
                            <input class="form-control" id="exampleInputPassword1" placeholder='xxx-xxx-xxxx'/>
                    </div>
                        
                        <button type="submit" class="btn btn-outline-green" onClick={this.continue}>ต่อไป</button>
                </form>
                            
                        </div>
                        )
                    }
                }
export default Register1;