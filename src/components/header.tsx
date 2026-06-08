export default function Header() {
    return (
        <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Cursor</h1>
            <nav className="flex gap-6">
                <a href="/">Главная</a>
                <a href="/products">Каталог</a>
                <a href="/cart">Корзина</a>
            </nav>
        </header>
    );
}