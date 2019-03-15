import Backbone from 'backbone';
import Home from './views/home';
import Titles from './views/Titles';
import RadioBtn from './views/RadioBtn';
import Footer from './views/Footer';

function showView(view) {
    view.render();
}

export default Backbone.Router.extend({

    routes: {
        '': 'home'
    },

    home() {
        showView(new Home());
        showView(new Titles());
        showView(new RadioBtn());
    },


});