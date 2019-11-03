import React,{useState} from 'react';
import axios from 'axios';
import {loginUser} from '../actions/authActions';

export default function LoginForm() {
    const [IDNum ,setIDNum] = useState("");
    const [phone,setPhone] = useState("");
    
    
    return (
        <div>
            <form id='loginForm'>
                <div class="form-group">
                    <label for="exampleInputEmail1">รหัสบัตรประชาชน</label>
                    <input class="form-control" id="inputIDNum" aria-describedby="emailHelp" placeholder="รหัส 13 หลัก" onChange={(e) => {setIDNum(e.target.value);
                    console.log(IDNum);}
                    }/>
                        <small id="emailHelp" class="form-text text-muted">กรอกรหัสบัตรประชาชน 13 หลักเพื่อใช้ login</small>
                </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">เบอร์โทรศัพท์มือถือ</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => {
                            setPhone(e.target.value);
                            console.log(phone);
                        }} />
                </div>
                            <button type="submit" class="btn btn-greenFill" onClick={
                                (e) => {
                                    
                                    const data = {
                                        'IDNum' : IDNum,
                                        'phone' : phone
                                    }
                                    loginUser(data);
                                }
                            }>Login</button>
            </form>
                    </div>
                    )
}