import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/UserForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const UserForm = ({ createUser, updateUser, editUser, setIsOpen, isOpen, setModalMessage, setModalUserName, setShowModal, setUpdateUser }) => {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if(updateUser) {
      reset(updateUser);
      setIsOpen(true);
    }
  }, [updateUser, setIsOpen, reset]);

  const submit = data => {
    if (updateUser) {
      editUser('users', data , updateUser.id);
      setUpdateUser();
      setModalMessage('The user:');
      setModalUserName(`${data.first_name} ${data.last_name} ¡updated successfully!`);
    } else {
      createUser('users', data);
      setModalMessage('The User:');
      setModalUserName(`${data.first_name} ${data.last_name} ¡created successfully!`);
    }
    setShowModal(true);
    setIsOpen(false);
    reset({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: ''
    });
  }

  const handleClose = () => {
    setIsOpen(false);
    setUpdateUser();
    reset({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: ''
    });
  }

  return (
    <div className={`form__back ${isOpen && 'active'}`}>
      <form className='form' onSubmit={handleSubmit(submit)}>
        <button title='close' onClick={handleClose} type='button' className='form__close'><FontAwesomeIcon icon={faTimes} /></button>
        <h2 className='form__title'>{updateUser ? 'Edit User' : 'New User'}</h2>
        <div className='form__item'>
          <label htmlFor="first_name">First name</label>
          <input {...register('first_name')} id='first_name' type="text" placeholder='Please type your first name here'/>
        </div>
        <div className='form__item'>
          <label htmlFor="last_name">Last name</label>
          <input {...register('last_name')} id='last_name' type="text" placeholder='Please type your last name here'/>
        </div>
        <div className='form__item'>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" placeholder='Please type your email here' />
        </div>
        <div className='form__item'>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="password" placeholder='Please type your password here' />
        </div>
        <div className='form__item'>
          <label htmlFor="birthday">Birthday</label>
          <input {...register('birthday')} id='birthday' type="date" />
        </div>
        <button title='submit' className='form__btn'>Submit</button>
      </form>
    </div>
  )
}

export default UserForm;


// import React, { useEffect } from 'react'
// import { useForm } from 'react-hook-form'
// import './styles/UserForm.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons'



// const UserForm = ({ createUser, updateUser, editUser, setIsOpen, isOpen, setUpdateUser}) => {

//   const { handleSubmit, register, reset } = useForm()

//   useEffect(() => {
//     if(updateUser) {
//     reset(updateUser);
//     setIsOpen(true)
//   }
//  }, [updateUser])
  

//   const submit = data => {
//     if (updateUser) {
//       editUser('users', data , updateUser.id)
//       setUpdateUser()
//     }else {
//     createUser('users', data)
//     }
//     setIsOpen(false)
//     reset({
//       first_name: '',
//       last_name: '',
//       email: '',
//       password: '',
//       birthday: ''
//     })
//   }

//   const handleClose = () => {
//       setIsOpen(false);
//       setUpdateUser();
//       reset({
//         first_name: '',
//         last_name: '',
//         email: '',
//         password: '',
//         birthday: ''
//       })
//   }


//   return (
//     <div className={`form__back ${isOpen && 'active'}`}>
//       <form className='form' onSubmit={handleSubmit(submit)}>
//         <button onClick={handleClose} type='button' className='form__close'><FontAwesomeIcon icon={faXmark} /></button>
//       <h2 className='form__title'>New User</h2>
//         <div  className='form__item'>
//           <label htmlFor="first_name">First name</label>
//           <input {...register('first_name')} id='first_name' type="text" placeholder='Please type your first name here'/>
//         </div>
//         <div className='form__item'>
//           <label htmlFor="last_name">Last name</label>
//           <input {...register('last_name')} id='last_name' type="text" placeholder='Please type your last name here'/>
//         </div>
//         <div className='form__item'>
//           <label htmlFor="email">Email</label>
//           <input {...register('email')} id='email' type="email" placeholder='Please type your email here' />
//         </div>
//         <div className='form__item'>
//           <label htmlFor="password">Password</label>
//           <input {...register('password')} id='password' type="password" placeholder='Please type your password here' />
//         </div>
//         <div className='form__item'>
//           <label htmlFor="birthday">Birthday</label>
//           <input {...register('birthday')} id='birthday' type="date" />
//         </div>
//         <button className='form__btn'>Submit</button>
//       </form>
//     </div>
//   )
// }
// export default UserForm