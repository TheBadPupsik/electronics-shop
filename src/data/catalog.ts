export type Category = {
    id: number;
    name: string;
    image: string;
};

export const categories: Category[] = [
    { id: 1, name: 'Смартфони та телефони', image: '/images/phones.png' },
    { id: 2, name: 'Техніка для кухні', image: '/images/fridge.png' },
    { id: 3, name: 'Техніка для дому', image: '/images/stiralka.png' },
    { id: 4, name: 'Телевізори та мультимедіа', image: '/images/tv.png' },
    { id: 5, name: 'Ігрові консолі та геймінг', image: '/images/ps5.webp' },
    { id: 6, name: "Ноутбуки, планшети та комп'ютерна техніка", image: '/images/laptops.png' },
    { id: 7, name: 'Смарт-годинники та гаджети', image: '/images/watch1.png' },
    { id: 8, name: 'Аудіо, фото та відео', image: '/images/camera.png' },
];