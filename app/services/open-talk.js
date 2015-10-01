import Ember from 'ember';

export default Ember.Service.extend({

  createSession(roomName){
    return new Ember.RSVP.Promise((resolve, reject)=>{

      Ember.$.ajax({
        
        url: "http://bobcat.lingo.development.c66.me/sessions",
        method: "POST",
        headers: {
          'Accept': 'application/json; charset=utf-8'
        },
        data: {
          room_name: roomName
        }
      })
      .done(response=>{
        let session = OT.initSession(response.api_key, response.session_id);

        this.set('token', response.token);
        this.set('session', session);
        this.set('sessionID', response.session_id);

        resolve(this.get('session'));
      })
      .fail(error=>reject(error))

    });

  }

});
