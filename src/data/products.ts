export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const products: Product[] = [
    { id: 1, name: 'iPhone 15', price: 32000, image: '/images/Iphone15Black.png', category: 'Смартфоны' },
    { id: 2, name: 'MacBook Air', price: 55000, image: '/macbook.jpg', category: 'Ноутбуки' },
    { id: 3, name: 'AirPods Pro', price: 8000, image: '/airpods.jpg', category: 'Наушники' },
]