export default {
    function(price) {
        var minN = Infinity;
        if (price < minN) minN = price;
        console.log('HELPERPRICE', price)
        return price;
    }
}