import { Mongo } from 'meteor/mongo';
 
export const UserList = new Mongo.Collection('users');
UserList.allow({
    insert() { return true; },
});