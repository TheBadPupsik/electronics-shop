export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    discount: number;
    href: string;
    stars: number;
}

export const products: Product[] = [
    { id: 1, name: 'Холодильник Whirlpool WHK 26363 XBR5E', price: 32000, image: '/images/649850540.webp', discount: 35, href: '/', stars: 4.8 },
    { id: 2, name: 'Ноутбук Acer TravelMate P2 TMP216-15 (NX.BTW...', price: 55000, image: '/images/acerlaptop.png', discount: 35, href: '/laptops', stars: 4.9 },
    { id: 3, name: 'Мульпіч Bosch MAF462B0', price: 8000, image: '/images/pech.png', discount: 35, href: '', stars: 4.7 },
    { id: 4, name: 'Кондиціонер спліт Vestfrost VFE08AF24', price: 32000, image: '/images/vfe08af24_11_.png', discount: 35, href: '/phones', stars: 4.5 },
    { id: 5, name: 'Apple iPhone 15 Pro Max 256GB Blue', price: 55000, image: '/images/Iphone15Black.png', discount: 35, href: '/laptops', stars: 4.6 },
    { id: 6, name: 'Apple iPhone 15 Pink', price: 8000, image: '/images/iphonepink.png', discount: 35, href: '/phones/iphone_pink', stars: 4.4 },
    { id: 7, name: 'Смартфон Samsung Galaxy S26 Ultra 12/51...', price: 32000, image: '/images/Iphone15Black.png', discount: 35, href: '/phones', stars: 4.7 },
    { id: 8, name: 'Ноутбук ігровий Lenovo LOQ 15ARP9 (83JC00K6...', price: 55000, image: '/images/loq_15arp9_3050_white_1.png', discount: 35, href: '/laptops', stars: 4.8 },
    { id: 9, name: 'Кавоварка капсульна Krups KP340810', price: 8000, image: '/images/w_1440.avif', discount: 35, href: '/earphones', stars: 4.3 },
    { id: 10, name: 'Телевізор Samsung UE43U7000FUXUA', price: 32000, image: '/images/TVhd.png', discount: 35, href: '/phones', stars: 4.9 },
    { id: 11, name: 'Батерея мобільна Xipin T197LF 20000mAh PD20...', price: 55000, image: '/images/battery.png', discount: 35, href: '/laptops', stars: 4.7 },
    { id: 12, name: 'AirPods 4 Pro', price: 8000, image: '/images/airpods.png', discount: 35, href: '/earphones', stars: 4.5 },
]