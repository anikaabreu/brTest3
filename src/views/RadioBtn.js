import Page from './Page';
import Cards from '../collections/Cards.js';
import Btns from '../templates/partials/Radiobtn.hbs'

export default Backbone.View.extend({
    template: Btns,
    initialize() {

    },
    render() {
        const self = this;
        self.$el.html(self.template());
        return this;
    }

});