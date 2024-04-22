import React from 'react';
import '../styles/UserCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faGift } from '@fortawesome/free-solid-svg-icons';

const UserCard = ({ user, deleteUser, setUpdateUser, setModalMessage, setModalUserName, setShowModal }) => {
  const handleDelete = () => {
    deleteUser('users', user.id);
    setModalMessage(`The user:`);
    setModalUserName(`${user.first_name} ${user.last_name} ¡deleted successfully!`);
    setShowModal(true);
  }

  const handleEdit = () => {
    setUpdateUser(user);
  }

  return (
    <section className='card__info'>
      <div className='user__info'>
        <h2 className='name'>{user.first_name}</h2>
        <h2 className='name'>{user.last_name}</h2>
        <hr/>
        <ul className='card__list'>
          <li className='card__item'>
            <span>Email:</span>
            <div className='title'>{user.email}</div>
          </li>
          <li className='card__item'>
            <span>Birthday:</span>
      <div className='title'><FontAwesomeIcon icon={faGift} className='gift'/> {user.birthday}</div>
          </li>
        </ul>
        <hr/>
      </div>
      <div className='btn__group'>
        <button title='delete' className='btn__delete' onClick={handleDelete}>
          <span><FontAwesomeIcon icon={faTrashAlt}/></span>
        </button>
        <button title='update' className='btn__edit' onClick={handleEdit}>
          <span><FontAwesomeIcon icon={faPencilAlt} /></span>
        </button>
      </div>
    </section>
  );
}

export default UserCard;