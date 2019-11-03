import React,{Component} from 'react';
import '../../style/style.css';
import {Alert} from 'reactstrap';
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export class Register2 extends Component{
    

    continue = e =>{
        e.preventDefault();
        if (validateEmail(this.props.values.email)){
            this.props.nextStep();
        }else{
            alert('กรุณากรอก Email ให้ถูกต้อง');
        }
        
        }


    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render(){
        console.log(this.props.values);
        const {values,handleChange} = this.props;
        return (
            <div>
            <form>
                <h1>ขั้นตอนสมัคร STEP 2</h1>
                <div class="form-group">
                    <label for="name">ชื่อ-นามสกุล</label>
                    <input class="form-control" id="name" aria-describedby="nameHelp" onChange={handleChange('name')}/>
                    <small id="nameHelp" class="form-text text-muted">ใส่คำนำหน้าด้วย เช่น นายหรือนางสาว</small>
                </div>

                <div class="form-group">
                        <label for="Email">Email</label>
                        <input class="form-control" type="email" id="Email" onChange={handleChange('email')}/>
                        <small style={{color:'red'}}>{!validateEmail(this.props.values.email) && "กรุณาใส่ email ให้ถูกต้อง"}</small>
                </div>
                <div class="form-group">
                    
                        <label for="School">โรงเรียน</label>
                        {/*bug*/}
                        <select class='custom-select' id='input1' onChange={handleChange('school')} data-live-search="true">
                        <option selected>เลือกชั้นปีที่กำลังศึกษา</option>
                            <option value="1">สวนกุหลาบ</option>
                            <option value="2">เตรียมอุดม</option>
                            <option value="3">สามเสน</option>
                            <option value='4'>ปทุมวัน</option>
                        </select>
                

                </div>
                <div class="form-group">
                        <label for="Grade">ชั้นปี</label>
                        <select class="custom-select" id="inputGroupSelect01" onChange={handleChange('grade')}>
                            <option selected>เลือกชั้นปีที่กำลังศึกษา</option>
                            <option value="1">มัธยมศึกษา 4</option>
                            <option value="2">มัธยมศึกษา 5</option>
                            <option value="3">มัธยมศึกษา 6</option>
                            <option value='4'>เกินชั้นมัธยม</option>
                        </select>
                </div>
                    
                    
                    
                    <button type="submit" id='nextButton' class="btn btn-outline-green" onClick={this.back}>ย้อนกลับ</button>
                    <button type="submit" class="btn btn-outline-green" onClick={this.continue}>ต่อไป</button>

            </form>
                        
                    </div>
            
        )
    }
}
export default Register2;