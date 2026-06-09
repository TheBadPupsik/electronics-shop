export type Category = {
    id: number;
    name: string;
    image: string;
};

export const categories: Category[] = [
    { id: 1, name: 'Смартфони та телефони', image: '/categories/phones.jpg' },
    { id: 2, name: 'Техніка для кухні', image: '/categories/kitchen.jpg' },
    { id: 3, name: 'Техніка для дому', image: '/categories/home.jpg' },
    { id: 4, name: 'Телевізори та мультимедіа', image: '/categories/tv.jpg' },
    { id: 5, name: 'Ігрові консолі та геймінг', image: '/categories/gaming.jpg' },
    { id: 6, name: "Ноутбуки, планшети та комп'ютерна техніка", image: '/categories/laptops.jpg' },
    { id: 7, name: 'Смарт-годинники та гаджети', image: '/categories/smartwatch.jpg' },
    { id: 8, name: 'Аудіо, фото та відео', image: '/categories/audio.jpg' },
];