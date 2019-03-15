import Titles from '../templates/partials/Titles.hbs'
import Cards from '../collections/Cards.js';

export default Backbone.View.extend({
    el: "#container-bod-article-body",
    template: Titles,
    render() {
        this.$el.html(this.template());
        return this;
    }

});