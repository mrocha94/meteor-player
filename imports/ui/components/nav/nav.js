import './nav.html'

Template.nav.onCreated(function(){
  const appInstance = this.view.parentView.templateInstance();
  this.navState = appInstance.navState;
});

Template.nav.helpers({
  navState(){
    return Template.instance().navState.get();
  },
  navLinks(){
    return [{icon: "L", text: "Login"}, {icon: "P", text: "Playlist"}];
  },
  isMaximized(){
    return (Template.instance().navState.get() === "maximized")
  }
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
