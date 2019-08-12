import React, { Component } from 'react';

export class Register3 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        return (
            <div>
                <h1>Register 3</h1>
                <div style={{ width: '40%', marginLeft: '30%' }}>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        ใส่โค้ดจากบัตร
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                   <form class="form-1">
                                   <div class="form-group" style={{marginLeft:'10%'}}>
                                        <label for="exampleInputEmail1">กรอกรหัสโค้ดจากบัตรที่ซื้อมา</label>
                                        <input class="form-control col-lg-8" id="codeRegister" style={{marginBottom:'5px'}}aria-describedby="emailHelp" placeholder="กรอกรหัส" />
                                        <button class='btn btn-outline-green col-lg-8'>ลงทะเบียน</button>
                                        <small id="emailHelp" class="form-text text-muted">รหัส 14 หลักที่อยู่หลังบัตร</small>
                                    </div>
                                   </form>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        จ่ายด้วยบัตรเครดิต
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    omise
      </div>
                            </div>
                        </div>
                        
                        
                    </div>
                
                <button type="submit" class="btn btn-outline-green" onClick={this.back}>ย้อนกลับ</button>
                <button type="submit" class="btn btn-outline-green" onClick={this.continue}>ต่อไป</button>
                </div>
            </div>
        )
    }
}
export default Register3;