import './nav.html'

Template.nav.onCreated(function(){
  const appInstance = this.view.parentView.templateInstance();
  this.navState = appInstance.navState;
});

Template.nav.helpers({
  navState(){
    return Template.instance().navState.get();
  },
});
