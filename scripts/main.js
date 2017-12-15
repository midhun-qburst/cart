// class Catalog {
//     constructor(id,company,name, type, size,price,discount) {
//         this.id= 1,
//         this.company= company,
//         this.name= name,
//         this.type= type,
//         this.size= 'Medium',
//         this.price= price,
//         this.discount= discount,
//         this.isSelected= false
//     }
//     get discount(){
//         return element.price*1 - (element.discount*element.price)/100 
//     }

// }

// let productCatalog = new Catalog[];
const productCatalog = [
    {
        id: 1,
        company: 'Kawasaki',
        name: 'Ninja',
        type: 'Bike',
        size: 'Medium',
        price: 10000,
        discount: 20,
        isSelected: false
    },
    {
        id: 2,
        company: 'Hercules',
        name: 'MTB',
        type: 'Bicycle',
        size: 'Large',
        price: 5000,
        discount: 10,
        isSelected: false
    },
    {
        id: 3,
        company: 'Honda',
        name: 'Civic',
        type: 'Car',
        size: 'Small',
        price: 1000,
        discount: 5,
        isSelected: false
    },
    {
        id: 4,
        company: 'Pagani',
        name: 'Zonda',
        type: 'Car',
        size: 'Large',
        price: 30000,
        discount: 30,
        isSelected: false
    },
    {
        id: 5,
        company: 'Bugatti',
        name: 'Chiron',
        type: 'Car',
        size: 'Large',
        price: 67000,
        discount: 10,
        isSelected: false
    },
]


const searchInput = {
    type: 'Car',
    size: 'Large',
}

const gst = {
    Car: 5,
    Bike: 10,
    Bicycle: 3
}

let foundProducts = [];

const filterProducts = () => {
    foundProducts = _.filter(productCatalog, searchInput);
    console.log(typeof Array.from(productCatalog));
    foundProducts.map(item => {
        console.log(item)
    })
    console.log(productCatalog);

    foundProducts = _.forEach(foundProducts, (element) => {
        let s = element;
        let discountedRate = element.price * 1 - (element.discount * element.price) / 100;
        $('#foundList').append('<div class="card-block col-lg-3 book-tile" >' +
            '<div class="test">' +
            '<input type="checkbox" class="' + element.id + '">' +
            
            '<span class="book-title">' + element.name +
            '<input value="1" class="quantity" type="number" min="0" id="' + element.id + '">' +
            '</span>' +
            '<span> Company: ' + element.company + '</span>' +
            '<span> Type: ' + element.type + '</span>' +
            '<span> Size: ' + element.size + '</span>' +
            '<span> Price: ' + element.price + '/-</span>' +
            '<span> Discount: ' + element.discount + '%</span>' +
            '<span> Discounted Price: ' + discountedRate + '/-</span>' +
            '</div>' +
            '</div>'
        );
        //  [...s, {isSelected: false}];
        console.log(s);

    }

    );
    console.log(foundProducts);
}

const addItems = () => {
    let quantityArray = [];
    let idArray = [];
    idArray = foundProducts.map((element) => {
        if ($('.' + element.id).is(":checked")) {
            return element.id;
        }
        return null;
    }
    ).filter((num) => {
        return num != null;
    });

    quantityArray = _.compact(foundProducts.map((element) => {
        if ($('.' + element.id).is(":checked")) {
            return parseInt($('#' + element.id).val());
        }
        return null;
    }
    ))
    console.log(idArray);
    console.log(quantityArray);
    localStorage.setItem('idArray', JSON.stringify(idArray));
    localStorage.setItem('quantityArray', JSON.stringify(quantityArray));
    
    
}

const cartOnload = () => {

    let quantityArray = JSON.parse(localStorage.getItem('quantityArray'));
    let idArray = JSON.parse(localStorage.getItem('idArray'));
    let i = 0;
    
    let totalPrice = 0;
    let MRPTotal = 0;
    idArray.map((num) => {
        let gstOfProduct = 0;
        let quant = quantityArray[i];
        i++;
        let product = _.find(foundProducts, {id:num});
        gstOfProduct = (gst[product.type] * product.price) / 100;
         discountedRate = product.price * 1 - (product.discount * product.price) / 100;
        let finalPrice = discountedRate + gstOfProduct * quant ;
        

        $('#shoppingCart').append('<div class="card-block col-lg-3 book-tile" >' +
            '<div class="test">' +
            '<span class="book-title">' + product.name +
            '</span>' +
            '<span> Company: ' + product.company + '</span>' +
            '<span> Type: ' + product.type + '</span>' +
            '<span> Size: ' + product.size + '</span>' +
            '<span> Price: ' + product.price + '/-</span>' +
            '<span> Discount: ' + product.discount + '%</span>' +
            '<span> Discounted Price: ' + discountedRate + '/-</span>' +
            '<span> Final price (inclusive of GST '+ gst[product.type] +'%) :' + finalPrice + '</span>' +            
            '</div>' +
            '</div>'
        );
        totalPrice = totalPrice + finalPrice*quant;
        MRPTotal = MRPTotal + product.price * quant;
    }
    );
    $('#finalPrice').append( '<div>Grand Total : ' + totalPrice + '</div>'+
                                '<div> You saved Rs.' + (MRPTotal-totalPrice)     )
    
    
}