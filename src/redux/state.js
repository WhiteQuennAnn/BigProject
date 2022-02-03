let store = {
  _state : {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 35 },
        { id: 2, message: 'It is my first post', likesCount: 42 },
        { id: 3, message: 'dadada', likesCount: 12 },
        { id: 4, message: 'hihihi', likesCount: 29 },
      ],
       newPostText: 'Annushka',
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
  
  
      message: 'White Queen',
    }
  },
  getstate() {
    return this._state;
  },
  _callSubscriber () {
    console.log ('State changed');
  },
  addPost () {

    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 231
    };
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
 updateNewPostText (newText) {
  
  this._state.profilePage.newPostText = newText;
  this._callSubscriber(this._state);
},
subcribe (observer) {
  this._callSubscriber = observer;
  }
}
export default store;
window.store = store;
