const users = []

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate the data
  if(!username || !room) {
    return {
      error: 'Username and room are required'
    }
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })

  // Validate username
  if (existingUser) {
    return {
      error: 'Username is in use!'
      }
    }

  // Store the user
  const user = { id, username, room }
  users.push(user)
  return { user }
  }

  const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
      return users.splice(index,1)[0]
    }
  }

  const getUser = (id) => {
    return users.find((user) => user.id === id)
  }

  const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
  }


  module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
  }
      // Checking addUser functionality
      // addUser({
      //   id: 33,
      //   username: 'JB      ',
      //   room: 'science'
      // })

      // console.log(users)

      // const res = addUser({
      //   id: 37,
      //   username: 'JB',
      //   room: 'science'
      // })
      // console.log(res)
  
      // Checking removeUser
      // addUser({
      //     id: 33,
      //     username: 'JB      ',
      //     room: 'science'
      //   })
      // console.log(users);
      // const removedUser = removeUser(33)
      // console.log(removedUser);
      // console.log(users);

      //  addUser({
      //     id: 33,
      //     username: 'jorge',
      //     room: 'Madrid'
      //   })

      //   addUser({
      //     id: 37,
      //     username: 'jb',
      //     room: 'superacion'
      //   })

      //   addUser({
      //     id: 48,
      //     username: 'esencial',
      //     room: 'superacion'
      //   })

      //   const user = getUser(331)
      //   console.log(user);

      //   const userList = getUsersInRoom('M')
      //   console.log(userList);