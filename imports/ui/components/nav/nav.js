import './nav.html'

Template.nav.onCreated(function(){
  const appInstance = this.view.parentView.templateInstance();
  this.hidden = appInstance.hidden;
});

Template.nav.helpers({
  hidden(){
    return Template.instance().hidden.get();
  },
});
