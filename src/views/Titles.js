import Titles from '../templates/partials/Titles.hbs'
import Cards from '../collections/Cards.js';

function showView(view) {
    view.render();
}

export default Backbone.View.extend({
        el: "#container-bod-article-body",
        template: Titles,
            initialize() {
            this.collection = new Cards();
            },
            render() {
                const self = this;
                var a = []
                var b = []
                self.collection.fetch({

                    success(mod) {
                        self.collection.each((i, e) => {
                            //  console.log(i, e)
                            var c = i.attributes.cruise_line_name
                            a.push(c);
                            var d = i.attributes.sailing_name
                            b.push(d)
                        })
                        self.$el.html(self.template({
                            titles: a,
                            names: b
                        }));

                    }
                })
                return this;
            }

});