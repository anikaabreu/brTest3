import Footer from '../templates/partials/Footer.hbs';
import Total from '../models/Total';

export default Backbone.View.extend({
    el: '#footer-wrapper',
    template: Footer,
    model: Total,
    initialize() {
        this.listenTo(this.model, 'reset change', this.render);
    },
    render() {
        console.log(this.model.attributes)
        var total = JSON.stringify(this.model.attributes.total)
        this.$el.html(this.template(total));
    },

});