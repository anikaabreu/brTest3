import Page from './Page';
import Home from '../templates/Home.hbs';
import Cards from '../collections/Cards.js';
import Handlebars from 'handlebars/runtime'
import $ from 'jquery'
Handlebars.registerHelper('minP', function(price, index) {
    var opts = price['sailing_options']
    var arr = []
    $(opts).each((i, e) => {
        var pr = e["sailing_price"]
        arr.push(pr)
    })

    arr = arr.sort()[0]

    return arr;
});

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
                self.$el.html(self.template({ f2, f4, f5 }));
            }

        })

        return this;

    }

});