export type Category = {
    id: number;
    name: string;
    image: string;
}

export const categories: Category[] = [
    { id: 1, name: 'Смартфони та телефони', image: '/categories/phones.jpg' },
    { id: 2, name: 'Техніка для кухні', image: '/categories/kitchen.jpg' },
    { id: 3, name: 'Телевізори та мультимедіа', image: '/categories/tv.jpg' },
    { id: 4, name: 'Аудіо, фото та відео', image: '/categories/audio.jpg' },
    { id: 5, name: 'Краса і здоров\'я', image: '/categories/beauty.jpg' },
    { id: 6, name: 'Побутова хімія', image: '/categories/chemistry.jpg' },
    { id: 7, name: 'Дитячі товари', image: '/categories/kids.jpg' },
    { id: 8, name: 'Ноутбуки, планшети та комп\'ютерна техніка', image: '/categories/laptops.jpg' },
    { id: 9, name: 'Техніка для дому', image: '/categories/home.jpg' },
    { id: 10, name: 'Смарт-годинники та гаджети', image: '/categories/smartwatch.jpg' },
    { id: 11, name: 'Ігрові консолі та геймінг', image: '/categories/gaming.jpg' },
    { id: 12, name: 'Посуд', image: '/categories/dishes.jpg' },
    { id: 13, name: 'Дім, відпочинок та зоотовари', image: '/categories/home-rest.jpg' },
    { id: 14, name: 'Інструменти і автотовари', image: '/categories/tools.jpg' },
]