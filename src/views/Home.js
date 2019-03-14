import Cards from '../collections/Cards';
import Page from './Page';
import Home from '../templates/Home.hbs';

export default Page.extend({
    el: '#app',
    template: Home,

    initialize() {

        if (!this.collection) {
            this.collection = new Cards();
        }
        this.listenTo(this.collection, 'reset change', this.render);
    },

    render: function() {
        const self = this;
        self.collection.fetch({
            success(mod) {
                self.collection.each((i, e) => {
                    self.$el.html(self.template({

                    }));
                    console.log(i, e)
                })
            }
        })


        return this;
    }

});