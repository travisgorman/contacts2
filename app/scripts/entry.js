import Backbone from 'backbone'
import settings from './settings'
import session from './models/session'

$(document).ajaxSend((evt, xhrAjax, jqueryAjax) => {
  if(session.authtoken){
    xhrAjax.setRequestHeader('Authorization ' +  session.authtoken)
  } else {
    xhrAjax.setRequestHeader('Basic ' + session.authtoken)
  }
});

Backbone.history.start();
