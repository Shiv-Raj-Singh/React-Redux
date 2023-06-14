import { useDispatch, useSelector } from 'react-redux';
import './user.css'

// Using Redux Actions
import { onRegister, onUpdate } from '../Actions';
import { onChangeField , onLogin } from '../Slices/userSlice';



const User = () => {

    const dispatch = useDispatch()
    const user = useSelector(s=>s.user)

    const onHandleChange = (e)=>{
        
        // dispatch(onUpdate(e.target.name , e.target.value))
        dispatch(onChangeField({field : e.target.name , value : e.target.value}))
    }
    const onSubmitForm = (e)=>{    
        e.preventDefault()
        dispatch(onRegister(user))
    }
    console.log('user is ' ,   user);

    return (
        <>
            <h1>Enter Your Details </h1>
            <form className="userForm"  onSubmit={onSubmitForm}  >
                <input type="text" className="field"  required  value={user.name}  name='name'  placeholder="Enter Name !" onChange={onHandleChange} />   <br />
                <input type="email" className="field" required value={user.email} name='email' placeholder="Enter Email !"  onChange={onHandleChange} /> <br />
                <input type="tel" className="field" required  value={user.phone}  name='phone' placeholder="Enter Phone !" onChange={onHandleChange} />  <br />
                <input type="tel" className="field" required value={user.age} name='age'  placeholder="Enter age !" onChange={onHandleChange} />  <br />

                <button className='btn'> Submit </button>
            </form>
        {/* {
            user.pending ? <h1>Loading ....</h1> : <ul>
                    <li>Name : {user.name} </li>
                    <li>age : {user.age} </li>
                    <li>email : {user.email} </li>
                    <li>phone : {user.phone} </li>
            </ul>
        } */}

    {
        user.pending && <h2>Loading ....</h2>
    }
        </>
    );
}

export default User;