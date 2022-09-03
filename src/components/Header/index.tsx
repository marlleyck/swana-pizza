export const Header = () => {
    return (
        <header className="w-screen h-16 flex items-center justify-center bg-preto font-['Montserrat'] text-lg">
            <div className="w-4/5 flex items-center justify-between">
                <h2 className="text-slate-300">imagem-logo</h2>
                <ul className="flex items-center justify-center gap-2 text-slate-300">
                    <li className="text-orange-300 cursor-pointer">Home</li>
                    <li className="hover:text-orange-300 duration-200 cursor-pointer">Products</li>
                    <li className="hover:text-orange-300 duration-200 cursor-pointer">Cart</li>
                </ul>
            </div>
        </header>
    )
}