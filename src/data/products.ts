export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    describe: string;
    discount: number;
    href: string;
}

export const products: Product[] = [
    { id: 1, name: 'iPhone 15', price: 32000, image: '/images/Iphone15Black.png', describe: 'Смартфоны', discount: 35 , href: '/phones'},
    { id: 2, name: 'MacBook Air', price: 55000, image: '/macbook.jpg', describe: 'Ноутбуки', discount: 35, href: '' },
    { id: 3, name: 'AirPods Pro', price: 8000, image: '/airpods.jpg', describe: 'Наушники', discount: 35, href: '' },
    { id: 4, name: 'iPhone 15', price: 32000, image: '/images/Iphone15Black.png', describe: 'Смартфоны', discount: 35, href: '' },
    { id: 5, name: 'MacBook Air', price: 55000, image: '/macbook.jpg', describe: 'Ноутбуки', discount: 35, href: '' },
    { id: 6, name: 'AirPods Pro', price: 8000, image: '/airpods.jpg', describe: 'Наушники', discount: 35, href: '' },
    { id: 7, name: 'iPhone 15', price: 32000, image: '/images/Iphone15Black.png', describe: 'Смартфоны', discount: 35, href: '' },
    { id: 8, name: 'MacBook Air', price: 55000, image: '/macbook.jpg', describe: 'Ноутбуки', discount: 35, href: '' },
    { id: 9, name: 'AirPods Pro', price: 8000, image: '/airpods.jpg', describe: 'Наушники', discount: 35, href: '' },
    { id: 10, name: 'iPhone 15', price: 32000, image: '/images/Iphone15Black.png', describe: 'Смартфоны', discount: 35 , href: ''},
    { id: 11, name: 'MacBook Air', price: 55000, image: '/macbook.jpg', describe: 'Ноутбуки', discount: 35, href: '' },
    { id: 12, name: 'AirPods Pro', price: 8000, image: '/airpods.jpg', describe: 'Наушники', discount: 35, href: '' },
]