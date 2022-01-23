
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 35 },
      { id: 2, message: 'It is my first post', likesCount: 42 },
      { id: 3, message: 'dadada', likesCount: 12 },
      { id: 4, message: 'hihihi', likesCount: 29 },
    ],

  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'Yo' },
      { id: 3, message: 'How are you?' },
      { id: 4, message: 'Hello, my friend' },
      { id: 5, message: 'YO' },
      { id: 6, message: 'Good evening' },
    ],
    dialogs: [
      { id: 1, name: 'Olya' },
      { id: 2, name: 'Boris' },
      { id: 3, name: 'Alina' },
      { id: 4, name: 'Elena' },
      { id: 5, name: 'Ivan' },
      { id: 6, name: 'Vladimir' },
    ],
  }
}

export let addPost = (postMessage) => {

  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
}
export default state;
