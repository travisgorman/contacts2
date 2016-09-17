import Backbone from 'backbone'
import $ from 'jquery'
import signup from 'signup'
import login from 'login'
import contacts from 'contacts'

export default Backbone.Router.extend({
  routes : {
    signup: signUp,
    login: login,
    contacts: showContacts
  },
  appendSignup: function(){
    $('#page').empty().append(signup())
  },
  appendLogin: function() {
    $('#page').empty().append(login())
  },
  appendContacts: function() {
    $('#page').empty().append(contacts())
  }
});
