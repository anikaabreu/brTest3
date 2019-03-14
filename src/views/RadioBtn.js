import Page from './Page';
import Cards from '../collections/Cards.js';
import Btns from '../templates/partials/Radiobtn.hbs'

function showView(view) {
    view.render();
}

export default Backbone.View.extend({
        //  el: '#radioBtn-wrapper',
         template: Btns,
         initialize() {
            //  this.collection = new Cards();
           
         },
         render() {
             const self = this;
             var a = []
             var b = []
              self.$el.html(self.template());
             return this;
         }

});