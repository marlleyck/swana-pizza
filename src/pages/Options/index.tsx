import { Link } from "react-router-dom"
import { Button } from "../../components/Button"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import Pizza1 from '../../img/pizzas/pizza.png'
import Pizza2 from '../../img/pizzas/pizza2.png'
import Pizza3 from '../../img/pizzas/pizza3.png'
import Pizza4 from '../../img/pizzas/pizza4.png'
import Pizza5 from '../../img/pizzas/pizza5.png'
import Pizza6 from '../../img/pizzas/pizza6.png'
import Pizza7 from '../../img/pizzas/pizza7.png'


export const Options = () => {
    return (
        <>
            <Header />

            <main className="w-full h-[calc(100vh_-_4rem)] bg-bg-option bg-center bg-no-repeat bg-cover flex items-center justify-center">
                <div className="w-full h-full grid grid-cols-4 justify-items-center content-center gap-10">
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                        <Link to='/option/1'>
                            <img src={Pizza1} alt="pizza-1"
                            className="w-40 hover:scale-105 mb-4"/>
                        </Link>
                        <p>Portuguesa</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                        <Link to='/option/2'>
                            <img src={Pizza2} alt="pizza-2" 
                            className="w-40 hover:scale-105 mb-4"/>
                        </Link>
                        <p>Gorgonzola</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                        <Link to='/option/3'>
                            <img src={Pizza3} alt="pizza-3" 
                            className="w-40 hover:scale-105 mb-4" />
                        </Link>
                        <p>Nordestina</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                        <Link to='/option/4'>
                            <img src={Pizza4} alt="pizza-4" 
                            className="w-40 hover:scale-105 mb-4"/>
                        </Link>
                        <p>Quatro Queijos</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                        <Link to='/option/5'>
                            <img src={Pizza5} alt="pizza-5" 
                            className="w-40 hover:scale-105 mb-4"/>
                        </Link>
                        <p>Calabresa</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                        <Link to='/option/6'>
                            <img src={Pizza6} alt="pizza-6" 
                            className="w-40 hover:scale-105 mb-4"/>
                        </Link>
                        <p>Dois Queijos</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                        <Link to='/option/7'>
                            <img src={Pizza7} alt="pizza-7" 
                            className="w-40 hover:scale-105 mb-4"/>
                        </Link>
                        <p>Chocolate</p>
                        
                        <Button name='Adicionar' />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}