import './player.html'

Template.player.onCreated(function(){
  const playerInstance = this.view.parentView.templateInstance();
  this.hidden = playerInstance.hidden;
});

Template.player.events({
  'click button'(event, instance) {
    const hidden = instance.hidden.get();
    instance.hidden.set(!hidden);
    console.log(instance.hidden.get());
  },
});
