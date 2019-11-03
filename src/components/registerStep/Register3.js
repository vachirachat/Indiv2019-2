import React, { Component } from 'react';
import axios from 'axios';
export class Register3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.data,
        };
        this.data2 = {
            IDNum:'1100400984102',
            name:'vachirachat',
            email:'vachira21chat@outllklook.com',
            phone:'0819906782',
            school:'suankularb135',
            year:'1'

        }
    }
    continue = e => {
        e.preventDefault();
        this.props.handleSubmit();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    handleSubmit = e =>{
        e.preventDefault();
        this.props.handleSubmit();
        this.props.nextStep();
    };
    render() {
        return (
            <div>
                <div id='register3Form' class='col-lg-5 col-sm-12'>
                <h1>ขั้นตอนสมัคร STEP 3</h1>
                    <div class="accordion" id='accordionExample'>
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
                                        <div class="form-group" style={{ marginLeft: '10%' }}>
                                            <label for="exampleInputEmail1">กรอกรหัสโค้ดจากบัตรที่ซื้อมา</label>
                                            <input class="form-control col-lg-8" id="codeRegister" style={{ marginBottom: '5px' }} aria-describedby="emailHelp" placeholder="กรอกรหัส" />
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
                    <div style={{marginTop:'1%'}}>
                        <button type="submit" id='nextButton' class="btn btn-outline-green" onClick={this.back}>ย้อนกลับ</button>
                        <button type="submit" class="btn btn-outline-green" 
                         onClick ={(e)=> {
                            console.log('this is in Show');
                            console.log(this.data2);
                            axios.post('http://localhost:5000/api/users/register',
                            this.data2
                            ).then((res) => {
                                console.log(res.status);
                            }).catch((error) =>{
                                const {response} = error;
                                console.log(JSON.stringify(error));
                                alert(JSON.stringify(error['message']));
                            })
                            this.handleSubmit.bind(this);
                        }}>ต่อไป</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register3;