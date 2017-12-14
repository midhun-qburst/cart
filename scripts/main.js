var _ = require('lodash');

const productCatalog = [
    {
        id: 1,
        company: 'Kawasaki',
        name: 'Ninja',
        type: 'Bike',
        size: 'medium',
        price: 10000,
        discount: 20
    },
    {
        id: 2,
        company: 'Hercules',
        name: 'MTB',
        type: 'Bicycle',
        size: 'large',
        price: 5000,
        discount: 10
    },
    {
        id: 3,
        company: 'Honda',
        name: 'Civic',
        type: 'Car',
        size: 'small',
        price: 1000,
        discount: 5
    },
    {
        id: 4,
        company: 'Pagani',
        name: 'Zonda',
        type: 'Car',
        size: 'large',
        price: 30000,
        discount: 30
    },
    {
        id: 5,
        company: 'Bugatti',
        name: 'Chiron',
        type: 'Car',
        size: 'large',
        price: 67000,
        discount: 10
    },
]

const searchInput = {
    type: 'car',
    size: 'large',
}

const gst = {
    Car: 5,
    Bike: 10,
    Bicycle: 3
}

