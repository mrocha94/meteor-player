import './nav.html'

Template.nav.onCreated(function(){
  const playerInstance = this.view.parentView.templateInstance();
  this.hidden = playerInstance.hidden;
});

Template.nav.helpers({
  hidden(){
    return Template.instance().hidden.get();
  },
});
