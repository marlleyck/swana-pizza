import { Link } from "react-router-dom"

export const Header = () => {
    const url = String(window.location.href)

    return (
        <header className="w-full h-16 flex items-center justify-center bg-preto font-['Montserrat'] text-lg">
            <div className="w-4/5 flex items-center justify-between">
                <h2 className="text-slate-300">imagem-logo</h2>
                <ul className="flex items-center justify-center gap-5 text-slate-300">
                    <Link to='/'>
                        <li 
                            className="text-orange-300 cursor-pointer">
                            Home
                        </li>
                    </Link>

                    <Link to='/options'>
                        <li 
                            className="hover:text-white duration-100 cursor-pointer"
                            style={url.includes('/options') ? {fontWeight: 'bold', color: 'white'} : {}}>
                            Pizzas
                        </li>
                    </Link>

                    <Link to='/cart'>
                        <li 
                            className="hover:text-white duration-100 cursor-pointer"
                            style={url.includes('/cart') ? {fontWeight: 'bold', color: 'white'} : {}}>
                            Carrinho
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}