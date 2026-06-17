export type Laptop = {
    id: number;
    name: string;
    price: number;
    image: string;
    discount: number;
    href: string;
    stars: number;
}

export const laptops: Laptop[] = [
    {
        id: 1,
        name: 'Ноутбук Acer TravelMate P2 TMP216-15 (NX.BTW...',
        price: 20999,
        image: '/images/Acer.png',
        discount: 10,
        href: '/laptops/acer',
        stars: 5.0
    },
    {
        id: 2,
        name: 'Ноутбук игровой Lenovo LOQ 15ARP9...',
        price: 70999,
        image: '/images/8105512827045639-removebg-preview 1.png',
        discount: 12,
        href: '/laptops/lenovo-loq-15arp9',
        stars: 5.0
    },
    {
        id: 3,
        name: 'Ноутбук HP Laptop 15-fc0257ua...',
        price: 37999,
        image: '/images/1_hp_15-fd1088ua_ba5e3ea_diamond_white-removebg-preview 1.png',
        discount: 15,
        href: '/laptops/hp-laptop-15',
        stars: 4.7
    },
    {
        id: 4,
        name: 'Ноутбук Apple MacBook Neo A18...',
        price: 25599,
        image: '/images/macbook_13-in_a18_pro_blush_pdp_image_position_1__ce-ww_1_-removebg-preview 1.png',
        discount: 8,
        href: '/laptops/apple-macbook-neo',
        stars: 4.9
    },
    {
        id: 5,
        name: 'Ноутбук Asus Vivobook Go 15...',
        price: 11699,
        image: '/images/vivobook-go-15-e1504f-e1504g-cool-silver_1_-removebg-preview 1.png',
        discount: 5,
        href: '/laptops/asus-vivobook-go-15',
        stars: 4.7
    },
    {
        id: 6,
        name: 'Ноутбук игровой Acer Nitro V 15...',
        price: 13999,
        image: '/images/nitro_-_anv15-52_rtx_5050-removebg-preview 1.png',
        discount: 20,
        href: '/laptops/acer-nitro-v-15',
        stars: 4.8
    },
    {
        id: 7,
        name: 'Ноутбук Lenovo IdeaPad Slim 3...',
        price: 35999,
        image: '/images/83k700adra-removebg-preview 1.png',
        discount: 10,
        href: '/laptops/lenovo-ideapad-slim-3',
        stars: 4.8
    },
    {
        id: 8,
        name: 'Ноутбук Acer TravelMate P2 TMP216-51...',
        price: 66999,
        image: '/images/re.png',
        discount: 15,
        href: '/laptops/acer-travelmate-p2-51',
        stars: 4.6
    }
]