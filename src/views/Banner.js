import Banner from '../templates/partials/Image_banner.hbs'
import Cards from '../collections/Cards.js';

export default Backbone.View.extend({
    el: '#cruise-banner-img',
    template: Banner,
    render() {
        this.$el.html(this.template());
    }

});