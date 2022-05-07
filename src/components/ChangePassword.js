import React,{useState} from 'react'
import './css/changepasswd.css'
import img1 from '../components/images/changepwd.jpeg'

const ChangePassword = () => {

    const [formData,setFormData]=useState(
        {password1:"",
        password2:"",
    });

    const {password1,password2} =formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

        // Submit Event
        const onSubmit = async(e) => {
            e.preventDefault();
    
            const newUser = {
                password1,
                password2
            }
            // console.log(password1,password2);

                    //You can write API code Here.....


        }


  return (
      
    <div className='form-v6'>
    <div class="page-content">

        <div class="form-v6-content">
            <div class="form-left">
                <img src={img1} className='ml-3 mt-3' style={{height:'100%',width:'550px',objectFit:"cover"}} alt="form"/>
            </div>
            <form class="form-detail" onSubmit={e => onSubmit(e)} action="#" method="post">
                <h2 className=''>CHANGE PASSWORD</h2>
                <div class="form-row">
                    <input type="password" name="password1"  value={password1} onChange={e => onChange(e)} id="password" class="input-text" placeholder="Enter Password Here..." required/>
                </div>
                <div class="form-row">
                    <input type="password" name="password2"  value={password2} onChange={e => onChange(e)} id="password" class="input-text" placeholder="Enter Password Again..." required/>
                </div>
                <div class="form-row-last">
                    <input type="submit" name="register" class="register" value="Change"/>
                </div>
            </form>
        </div>
    </div>
 
  </div>
  )
}

export default ChangePassword;