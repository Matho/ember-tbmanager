import Ember from "ember";
import ENV from 'tbmanager/config/environment';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const get = Ember.get;
const set = Ember.set;

export default Ember.Route.extend(AuthenticatedRouteMixin,{

  actions: {
    uploadImage: function (file) {
      var that = this;

      var image = this.store.createRecord('image', {
        file_name: get(file, 'name'),
        file_name_orig_path:  ENV.API_HOST +  ENV.API_IMG_PATH + "/" + get(file, 'name'),
        file_name_small_path: ENV.API_HOST +  ENV.API_IMG_THUMB_PATH + "/" + get(file, 'name'),
        dimmensions: get(file, 'size')
      });

      file.read().then(function (url) {
        if (get(image, 'url') == null) {
          set(image, 'url', url);
        }
      });

      file.upload(ENV.API_HOST + '/images/upload').then(function (response) {
        set(image, 'url', response.headers.Location);

        image.save().then(function(data){
          console.log("image.id" + data.id);

          that.transitionTo('admin.images.show', data.id);
          return true;
        });

      }, function () {
        image.rollback();
      });
    }
  }
});
