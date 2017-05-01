import './app.html';

import '../../components/player/player.js';
import '../../components/nav/nav.js';

Template.App_app.onCreated(function(){
  this.navState = new ReactiveVar("minimized");
});

Template.App_app.helpers({
  dark(){
    return (Template.instance().navState.get() === "maximized");
  },
});