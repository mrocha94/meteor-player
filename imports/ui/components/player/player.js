import './player.html'

Template.player.onCreated(function(){
  const appInstance = this.view.parentView.templateInstance();
  this.hidden = appInstance.hidden;
});

Template.player.events({
  'click button'(event, instance) {
    const hidden = instance.hidden.get();
    instance.hidden.set(!hidden);
  },
});
