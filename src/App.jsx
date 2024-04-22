import React, { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'
import Modal from './components/Modal'

function App () {
  const urlBase = 'https://users-crud.academlo.tech/'

  const [isOpen, setIsOpen] = useState(false)
  const [updateUser, setUpdateUser] = useState()
  const [users, getUsers, createUser, deleteUser, editUser] = useCrud(urlBase)
  const [modalMessage, setModalMessage] = useState('')
  const [modalUserName, setModalUserName] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const path = 'users'
    getUsers(path)
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setModalMessage('')
    setModalUserName('')
  }

  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button title='create user' onClick={handleOpen}>Create User</button>
      </header>
      <UserForm
        createUser={createUser}
        updateUser={updateUser}
        editUser={editUser}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setUpdateUser={setUpdateUser}
        setModalMessage={setModalMessage}
        setModalUserName={setModalUserName}
        setShowModal={setShowModal}
      />
      <Modal
        isOpen={showModal}
        message={modalMessage}
        userName={modalUserName}
        onClose={handleCloseModal}
      />
      <div className='app__container'>
        {
          users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdateUser={setUpdateUser}
              setModalMessage={setModalMessage}
              setModalUserName={setModalUserName}
              setShowModal={setShowModal}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App


// import { useEffect, useState } from 'react'
// import './App.css'
// import useCrud from './hooks/useCrud'
// import UserForm from './components/UserForm'
// import UserCard from './components/UserCard'

// function App () {
//   const urlBase = 'https://users-crud.academlo.tech/'

//   const [isOpen, setIsOpen] = useState(false)
//   const [updateUser, setUpdateUser] = useState()
//   const [users, getUsers, createUser, deleteUser, editUser] = useCrud(urlBase)


//   useEffect(() => {
//     const path = 'users'
//     getUsers(path)
//   }, [])

//   const handleOpen = () => {
//     setIsOpen(true)
//   }


//   return (
//     <div className='app'>
//       <header className='app__header'>
//         <h1 className='app__title'>Users</h1>
//         <button onClick={handleOpen}>Create User</button>
//       </header>
//       <UserForm
//         createUser={createUser} //este  es el metodo que se encarga de crear un usuario en la BD
//         updateUser={updateUser} //este  es el usuario que se va a editar, se coloca para quesemuestre en el form los datos
//         editUser={editUser} //este  metodo lo recibe del padre y lo manda al hijo para editar un usuario
//         setIsOpen={setIsOpen}
//         isOpen={isOpen}
//         setUpdateUser={setUpdateUser}
//       />
//       <div className='app__container'>
//         {
//           users?.map((user) => (
//             <UserCard
//               key={user.id} //este  es un truco para que el map no de error si hay o no hay usuario en la lista
//               user={user} //este  es el dato que se le pasa al componente hijo para mostrar en pantalla
//               deleteUser={deleteUser} //este  es un callback que se le pasa al componente hijo para eliminar el usuario
//               setUpdateUser={setUpdateUser} //este  es el que se encarga de mandar a llamar al hijo para editar un usuario
//             />
//           ))
//         }
//       </div>
//     </div>
//   )

// }

// export default App
