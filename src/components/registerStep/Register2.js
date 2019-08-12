import React,{Component} from 'react';
import '../../style/style.css';
export class Register2 extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render(){
        const {values,handleChange} = this.props;
        return (
            <div>
            <form class='col-lg-5 col-sm-12'>
                <div class="form-group">
                    <label for="name">ชื่อ</label>
                    <input class="form-control" id="name" aria-describedby="nameHelp"/>
                        <small id="nameHelp" class="form-text text-muted">ใส่คำนำหน้าด้วย เช่น นายหรือนางสาว</small>
                </div>

                <div class="form-group">
                <label for="surname">นามสกุล</label>
                    <input class="form-control" id="surname"/>
                    <small id='checkID' class="form-text text-muted"></small>
                </div>

                <div class="form-group">
                        <label for="Email">Email</label>
                        <input class="form-control" id="Email"/>
                </div>
                <div class="form-group">
                        <label for="School">โรงเรียน</label>
                        <input class="form-control" id="School"/>
                </div>
                <div class="form-group">
                        <label for="Grade">ชั้นปี</label>
                        <input class="form-control" id="Grade"/>
                </div>
                    
                    
                    
                    <button type="submit" id='nextButton' class="btn btn-outline-green" onClick={this.back}>ย้อนกลับ</button>
                    <button type="submit" class="btn btn-outline-green" onClick={this.continue}>ต่อไป</button>

            </form>
                        
                    </div>
            
        )
    }
}
export default Register2;