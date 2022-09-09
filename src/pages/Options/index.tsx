import { useState } from 'react'
import Modal from 'react-modal'
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

Modal.setAppElement('#root')

export const Options = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [titleModal, setTitleModal] = useState('')
    const [pizzaImage, setPizzaImage] = useState('')

    let targetPizza: string;

    const showModal = (e: any) => {
        targetPizza = e.target.attributes.alt.nodeValue

        if (targetPizza === 'pizza-1') {
            setTitleModal('Portuguesa')
            setPizzaImage(Pizza1)
        } else if (targetPizza === 'pizza-2') {
            setTitleModal('Gorgonzola')
            setPizzaImage(Pizza2)
        } else if (targetPizza === 'pizza-3') {
            setTitleModal('Nordestina')
            setPizzaImage(Pizza3)
        } else if (targetPizza === 'pizza-4') {
            setTitleModal('Quatro Queijos')
            setPizzaImage(Pizza4)
        } else if (targetPizza === 'pizza-5') {
            setTitleModal('Calabresa')
            setPizzaImage(Pizza5)
        } else if (targetPizza === 'pizza-6') {
            setTitleModal('Dois Queijos')
            setPizzaImage(Pizza6)
        } else if (targetPizza === 'pizza-7') {
            setTitleModal('Chocolate')
            setPizzaImage(Pizza7)
        }

        setModalIsOpen(true)
    }

    return (
        <>
            <Header />

            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}>
                    <h2>{titleModal}</h2>
                    <img src={pizzaImage} />
            </Modal>

            <main className="w-full h-[calc(100vh_-_4rem)] bg-bg-option bg-center bg-no-repeat bg-cover flex items-center justify-center">
                <div className="w-full h-full grid grid-cols-4 justify-items-center content-center gap-10">
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza1} alt="pizza-1"
                            className="w-40 hover:scale-105 mb-4"
                            onClick={(e) => showModal(e)}/>
                        <p>Portuguesa</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza2} alt="pizza-2" 
                            className="w-40 hover:scale-105 mb-4" 
                            onClick={(e) => showModal(e)} />
                        <p>Gorgonzola</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza3} alt="pizza-3" 
                            className="w-40 hover:scale-105 mb-4"
                            onClick={(e) => showModal(e)} />
                        <p>Nordestina</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza4} alt="pizza-4" 
                            className="w-40 hover:scale-105 mb-4"
                            onClick={(e) => showModal(e)} />
                        <p>Quatro Queijos</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza5} alt="pizza-5" 
                            className="w-40 hover:scale-105 mb-4"
                            onClick={(e) => showModal(e)} />
                        <p>Calabresa</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza6} alt="pizza-6" 
                            className="w-40 hover:scale-105 mb-4"
                            onClick={(e) => showModal(e)} />
                        <p>Dois Queijos</p>
                        
                        <Button name='Adicionar' />
                    </div>
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza7} alt="pizza-7" 
                            className="w-40 hover:scale-105 mb-4"
                            onClick={(e) => showModal(e)} />
                        <p>Chocolate</p>
                        
                        <Button name='Adicionar' />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}