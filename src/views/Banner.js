import Banner from '../templates/partials/Image_banner.hbs'

export default Backbone.View.extend({
    el: '#cruise-banner-img',
    template: Banner,

    render() {
        this.$el.html(this.template());
        return this;
    }

});