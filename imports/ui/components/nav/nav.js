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

Template.nav.events({
  "click #nav"(event, instance){
    const navState = instance.navState.get();
    let newState;
    if (navState !== "maximized") {
      newState = "maximized";
    } else {
      newState = "minimized";
    }
    instance.navState.set(newState);
  }
});
