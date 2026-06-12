export type Phone = {
    id: number;
    name: string;
    price: number;
    image: string;
    discount: number;
    href: string;
    stars: number;
}

export const phones: Phone[] = [
    {
        id: 1,
        name: 'Смартфон Apple iPhone 15 256Gb Pink',
        price: 35999,
        image: '/images/iphonepink.png',
        discount: 10,
        href: '/phones/iphone-15-pink',
        stars: 4.8
    },
    {
        id: 2,
        name: 'Смартфон Samsung Galaxy S26 Ultra 12/512Gb Black',
        price: 70999,
        image: '/images/sm-s948_galaxys26ultra_front_black_251120_1_.jpg-removebg-preview 1.png',
        discount: 12,
        href: '/phones/samsung-galaxy-s26-ultra',
        stars: 5.0
    },
    {
        id: 3,
        name: 'Смартфон Xiaomi 17T Pro 12/512Gb Black',
        price: 37999,
        image: '/images/sm-s948_galaxys26ultra_front_black_251120_1_.jpg-removebg-preview 1-1.png',
        discount: 15,
        href: '/phones/xiaomi-17t-pro-black',
        stars: 4.7
    },
    {
        id: 4,
        name: 'Смартфон Samsung Galaxy A57 8/256Gb Awesome...',
        price: 25599,
        image: '/images/sm-s948_galaxys26ultra_front_black_251120_1_.jpg-removebg-preview 1-2.png',
        discount: 8,
        href: '/phones/samsung-galaxy-a57',
        stars: 4.9
    },
    {
        id: 5,
        name: 'Смартфон Samsung Galaxy A26 5G 8/256 Gb Black',
        price: 11699,
        image: '/images/sm-s948_galaxys26ultra_front_black_251120_1_.jpg-removebg-preview 1-3.png',
        discount: 5,
        href: '/phones/samsung-galaxy-a26-black',
        stars: 4.7
    },
    {
        id: 6,
        name: 'Смартфон Xiaomi Redmi Note 15 Pro 8/256 Gb Bla...',
        price: 13999,
        image: '/images/sm-s948_galaxys26ultra_front_black_251120_1_.jpg-removebg-preview 1-4.png',
        discount: 20,
        href: '/phones/xiaomi-redmi-note-15-pro',
        stars: 4.8
    },
    {
        id: 7,
        name: 'Смартфон Apple iPhone 17 Pro Max 256Gb Cosmic O...',
        price: 66999,
        image: '/images/iphone_17_pro_max_cosmic_orange_pdp_image_position_1__ce-ww_1-removebg-preview 1.png',
        discount: 10,
        href: '/phones/iphone-17-pro-max-cosmic',
        stars: 4.6
    },
    {
        id: 8,
        name: 'Смартфон Samsung Galaxy S25FE 8/256Gb...',
        price: 29199,
        image: '/images/sm-s948_galaxys26ultra_front_black_251120_1_.jpg-removebg-preview 1-6.png',
        discount: 15,
        href: '/phones/samsung-galaxy-s25fe',
        stars: 4.4
    }
]