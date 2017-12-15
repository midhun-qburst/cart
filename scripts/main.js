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
        let discountedRate = element.price*1 - (element.discount*element.price)/100;
        $('#foundList').append('<div class="card-block col-lg-3 book-tile" >' +
            '<div class="test">' +
            '<span class="book-title">' + element.name +
            '<input type="checkbox" class="' + element.id + '">' +
            '<input placeholder="Quantity" class="quantity" type="text" id="' + element.id + '">' +            
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
    const idArray = foundProducts.map((element) => {
        if ($('.' + element.id).is(":checked")) {
            return element.id;
        }
        return null;
    }
    ).filter((num) => {
        return num != null;
    });

    const quantityArray = foundProducts.map((element) => {
        if ($('.' + element.id).is(":checked")) {
            return $('#' + element.id).val();
        }
        return null;
    }
    ).filter((num) => {
        return num != null;
    });
    console.log(idArray);
    console.log(quantityArray);

    
    


}