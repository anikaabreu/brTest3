import Page from './Page';
import Home from '../templates/Home.hbs';
import Cards from '../collections/Cards.js';


export default Page.extend({

    template: Home,
    initialize() {
        this.collection = new Cards();
    },

    render: function() {
        const self = this;
        self.collection.fetch({
                success() {

                    var f2 = self.collection.get("cruise0").attributes
                    var f4 = self.collection.get("cruise1").attributes
                    var f5 = self.collection.get("cruise2").attributes
                        // console.log(f2, f4, f5)
                    self.$el.html(self.template({ f2, f4, f5 }));
                }

            })
            // console.log(self.collection)

        return this;

    }

});