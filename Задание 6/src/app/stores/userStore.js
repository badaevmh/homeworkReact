import dispatcher from "../dispatcher";
import {EventEmitter} from 'events';

class userStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];
    this.change = this.change.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }
  
  change() {
    this.emit('change');
  }

  getUsers(users) {
    this.users = users;
    this.change();
  }

  handleActions(action) {
        this.getUsers(action.data);
    }
  }


const store = new userStore();
dispatcher.register(store.handleActions);

export default store;