import Page from './Page';
import Banner from '../templates/partials/Image_banner.hbs'

export default Page.extend({

    template: Banner,
    render() {
        this.$el.html(this.template());
    }

});