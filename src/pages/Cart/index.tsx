import { Header } from "../../components/Header"

import Pizza1 from '../../img/pizzas/pizza.png'

export const Cart = () => {
    return (
        <>
            <Header />

            <div className="font-['Montserrat'] bg-white w-full h-[calc(100vh_-_4rem)] flex items-center justify-center">
                
                <div className="w-4/5 h-4/5 shadow-xl rounded-2xl">

                    <div className="flex items-center justify-between">
                        <h1 className="">Carrinho</h1>
                        <p>Remover Tudo</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div>
                            <img src={Pizza1} alt="pizza" className="w-16" />
                        </div>
                        <div className="flex items-center gap-2">
                            <h2>Portuguesa</h2>
                            <div className="flex items-center justify-center gap-4">
                                <button type="button">-</button>
                                <div><p>0</p></div>
                                <button type="button">+</button>
                            </div>
                        </div>
                        <div>
                            <h2>R$25.00</h2>
                            <p>Remover</p>
                        </div>
                    </div>

                </div>
            </div>
        </>        
    )
}