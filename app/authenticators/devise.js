import Devise from 'ember-simple-auth/authenticators/devise';
import ENV from 'tbmanager/config/environment';

export default Devise.extend({
  serverTokenEndpoint: ENV.API_HOST + '/users/sign_in'
});
