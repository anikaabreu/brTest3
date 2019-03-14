import Backbone from 'backbone';
import $ from 'jquery';


export default Backbone.Collection.extend({

    url: 'https://api.myjson.com/bins/2gr36',
    parse: function(response) {
        var self = this;
        var loop = response.cruise_lines

        $(loop).each((i, e) => {
            console.log('fireCards')
            var cruise = new self.model()
            var attrs = Object.assign(e, response.sailings[i]);
            cruise.set('id', "cruise" + i);
            cruise.set(attrs);
            self.add(cruise);

        });
        return self.models;
    }
});