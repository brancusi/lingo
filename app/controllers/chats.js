import Ember from 'ember';

export default Ember.Controller.extend({
  openTalk: Ember.inject.service(),

  init(){
    this._super();
    this.connect();
  },

  connect(){
    this.get('openTalk.session').on("streamCreated", event=> {
      console.log(event);
       this.get('openTalk.session').subscribe(event.stream, 'theirVideo', {insertMode: 'append'});
    });

    this.get('openTalk.session').connect(this.get('openTalk.token'), err=>{
      if (err) {
        console.log(error.message);
      } else {
        this.get('openTalk.session').publish('myVideo', {width: 320, height: 240});
      }
    });
  }

});
