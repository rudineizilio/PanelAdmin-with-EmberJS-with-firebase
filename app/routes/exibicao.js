import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logout: function() {
      this.get('session').close().then(function() {
          this.transitionTo('login');
      }.bind(this));
    }
  },
  
  beforeModel: function(){
      console.log(this.get('session'));
      if(!this.get('session.isAuthenticated')){
        this.transitionTo('login');
      }
  }

});
