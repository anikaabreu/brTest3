import Footer from '../templates/partials/Footer.hbs';


export default Backbone.View.extend({
     el: '#footer-wrapper',
     template: Footer,
     render() {
      this.$el.html(this.template());
    }

});