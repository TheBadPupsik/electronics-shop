export type Category = {
    id: number;
    name: string;
    image: string;
    href: string;
};

export const categories: Category[] = [
    { id: 1, name: 'Смартфони та телефони', image: '/images/phones.png', href: '/phones' },
    { id: 2, name: 'Техніка для кухні', image: '/images/fridge.png', href: '/' },
    { id: 3, name: 'Техніка для дому', image: '/images/stiralka.png', href: '/' },
    { id: 4, name: 'Телевізори та мультимедіа', image: '/images/tv.png', href: '/' },
    { id: 5, name: 'Ігрові консолі та геймінг', image: '/images/ps5.webp', href: '/' },
    { id: 6, name: "Ноутбуки, планшети та комп'ютерна техніка", image: '/images/laptops.png', href: '/' },
    { id: 7, name: 'Смарт-годинники та гаджети', image: '/images/watch1.png', href: '/' },
    { id: 8, name: 'Аудіо, фото та відео', image: '/images/camera.png', href: '/' },
];