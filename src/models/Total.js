import Backbone from 'backbone';

export default Backbone.Model.extend({

    defaults: {
        total: 0
    },
    validate: function(attrs, options) {
        if (attrs.end < attrs.start) {
            return "Can't end before it starts"
        }
    },


});