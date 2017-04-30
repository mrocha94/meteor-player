import './player.html'

Template.player.onCreated(function(){
  const appInstance = this.view.parentView.templateInstance();
  this.navState = appInstance.navState;
});

Template.player.events({
  'click button'(event, instance) {
    const navState = instance.navState.get();
    let newState;
    if (navState !== "hidden") {
      newState = "hidden";
    } else {
      newState = "minimized";
    }
    instance.navState.set(newState);
  },
  'click video'(event, instance) {
    const hidden = instance.hidden.get();
    instance.hidden.set(!hidden);
  },
});
