import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['media-streams'],
  openTalk: Ember.inject.service(),
  classNameBindings: ['isReady:visible:hidden'],

  didInsertElement(){
    this.connect();
  },

  connect(){
    this.get('openTalk.session').on("streamCreated", event=> {
       this.get('openTalk.session').subscribe(event.stream, this.$('.other-video-streams')[0], {insertMode: 'append', width: 200, height: 150});
    });

    this.get('openTalk.session').connect(this.get('openTalk.token'), err=>{
      if (err) {
        console.log(error.message);
      } else {
        this.set('isReady', true);

        this.get('openTalk.session').publish(this.$('.my-video-stream')[0], {width: 200, height: 150});
      }
    });
  }
});
