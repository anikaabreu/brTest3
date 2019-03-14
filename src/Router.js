import Backbone from 'backbone';
import Home from './views/home';

function showView(view) {
    view.render();
}

export default Backbone.Router.extend({

    routes: {
        '': 'home',

    },

    home() {
        showView(new Home());
    },


});