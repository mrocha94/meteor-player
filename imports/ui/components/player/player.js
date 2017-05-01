import './player.html'

Template.player.onCreated(function(){
  const appInstance = this.view.parentView.templateInstance();
  this.navState = appInstance.navState;
  this.playPause = ReactiveVar("play");
});

Template.player.helpers({
  playPause() {
    return Template.instance().playPause.get();
  },
});

Template.player.events({
  'click video'(event, instance) {
    const hidden = instance.hidden.get();
    instance.hidden.set(!hidden);
  },
  'click #play-pause-button'(event, instance) {
    const playPause = instance.playPause;
    const navState = instance.navState;
    const video = $("#video-player")[0];
    if (playPause.get() === "play") {
      playPause.set("pause");
      navState.set("hidden");
      video.play();
    } else {
      playPause.set("play");
      navState.set("minimized");
      video.pause();
    }
  },
});
