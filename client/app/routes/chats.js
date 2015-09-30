import Ember from 'ember';

export default Ember.Route.extend({

  openTalk: Ember.inject.service(),

  model(params){
    return this.get('openTalk').createSession(params.room_name);
  }

});
