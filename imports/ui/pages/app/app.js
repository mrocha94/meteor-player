import './app.html';

import '../../components/player/player.js';
import '../../components/nav/nav.js';

Template.App_app.onCreated(function(){
  this.hidden = new ReactiveVar(true);
});
