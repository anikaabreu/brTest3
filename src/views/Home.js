import Page from './Page';
import Home from '../templates/Home.hbs';
import Cards from '../collections/Cards.js';


export default Page.extend({

    template: Home,
     initialize() {
         this.collection = new Cards();
     },

    render: function () {
    const self = this;
    self.collection.fetch({
        success(){

    var images = []
    var price = []
    var day = []
    var sailingTitle = []
    var cruiseName = []
    var cruiseShip = []
    var minP = []

     self.collection.each((i, e) => {
         console.log(i)
         var img = i.attributes.sailing_main_image;
         var sT = i.attributes.sailing_name;
         var cS = i.attributes.cruise_ship_name;
         var cN = i.attributes.cruise_line_name;
         var mP = i.attributes;
         var opts = i.attributes.sailing_options


         for (var y = 0; y < opts.length; y++) {
             var pr = opts[y].sailing_price
             var dy = opts[y].sailing_date

             day.push(dy)
             price.push(pr)

         }
         images.push(img)
        //  price.push(pr)
         sailingTitle.push(sT)
         cruiseName.push(cN)
         cruiseShip.push(cS)
        
     })
     console.log(cruiseName.length)

     self.$el.html(self.template({
        line: cruiseName,
        img: images,
        day: day,
        price: price,

     }));



        }
        
    })
    // console.log(self.collection)

    return this;

    }

});