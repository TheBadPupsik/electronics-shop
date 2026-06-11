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
    { 
        id: 1, 
        name: 'Apple iPhone 17 Pro Max 256Gb Pink', 
        price: 58000, 
        image: '/images/iphone17-promax-pink.png', 
        describe: 'Смартфони', 
        discount: 10,
        href: '/products/iphone-17-pro-max-pink'
    },
    { 
        id: 2, 
        name: 'Apple iPhone 17 Pro 256Gb Black Titanium', 
        price: 52000, 
        image: '/images/iphone17-pro-black.png', 
        describe: 'Смартфони', 
        discount: 15,
        href: '/products/iphone-17-pro-black'
    },
    { 
        id: 3, 
        name: 'Apple iPhone 16 128Gb Ultramarine', 
        price: 36000, 
        image: '/images/iphone16-blue.png', 
        describe: 'Смартфони', 
        discount: 20,
        href: '/products/iphone-16-blue'
    },
    { 
        id: 4, 
        name: 'Samsung Galaxy S26 Ultra 12/512Gb Gray', 
        price: 56000, 
        image: '/images/samsung-s26-ultra.png', 
        describe: 'Смартфони', 
        discount: 12,
        href: '/products/samsung-s26-ultra'
    },
    { 
        id: 5, 
        name: 'Samsung Galaxy S26+ 12/256Gb Silver', 
        price: 44000, 
        image: '/images/samsung-s26-plus.png', 
        describe: 'Смартфони', 
        discount: 8,
        href: '/products/samsung-s26-plus'
    },
    { 
        id: 6, 
        name: 'Xiaomi 17 Ultra 16/512Gb Black', 
        price: 48000, 
        image: '/images/xiaomi-17-ultra.png', 
        describe: 'Смартфони', 
        discount: 25,
        href: '/products/xiaomi-17-ultra'
    },
    { 
        id: 7, 
        name: 'Xiaomi 17T Pro 12/256Gb Blue', 
        price: 29000, 
        image: '/images/xiaomi-17t-pro.png', 
        describe: 'Смартфони', 
        discount: 30,
        href: '/products/xiaomi-17t-pro'
    },
    { 
        id: 8, 
        name: 'Google Pixel 10 Pro 256Gb Obsidian', 
        price: 42000, 
        image: '/images/pixel-10-pro.png', 
        describe: 'Смартфони', 
        discount: 15,
        href: '/products/google-pixel-10-pro'
    },
    { 
        id: 9, 
        name: 'Motorola Edge 60 Ultra 12/512Gb Forest Green', 
        price: 31000, 
        image: '/images/motorola-edge-60.png', 
        describe: 'Смартфони', 
        discount: 35,
        href: '/products/motorola-edge-60-ultra'
    },
    { 
        id: 10, 
        name: 'OnePlus 14 Pro 16/256Gb Green', 
        price: 34000, 
        image: '/images/oneplus-14.png', 
        describe: 'Смартфони', 
        discount: 18,
        href: '/products/oneplus-14-pro'
    },
    { 
        id: 11, 
        name: 'Nothing Phone (3) 12/256Gb Dark Gray', 
        price: 26000, 
        image: '/images/nothing-phone-3.png', 
        describe: 'Смартфони', 
        discount: 10,
        href: '/products/nothing-phone-3'
    },
    { 
        id: 12, 
        name: 'POCO F7 Pro 12/512Gb Yellow', 
        price: 19500, 
        image: '/images/poco-f7.png', 
        describe: 'Смартфони', 
        discount: 40,
        href: '/products/poco-f7-pro'
    },
]