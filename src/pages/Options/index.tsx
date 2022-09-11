import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Button } from "../../components/Button"
import iconClose from '../../img/close.svg'

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import { PizzaItem } from '../../types/PizzaItem'
import { PizzaJson } from '../../types/PizzaJson'

import Pizza1 from '../../img/pizzas/pizza.png'
import Pizza2 from '../../img/pizzas/pizza2.png'
import Pizza3 from '../../img/pizzas/pizza3.png'
import Pizza4 from '../../img/pizzas/pizza4.png'
import Pizza5 from '../../img/pizzas/pizza5.png'
import Pizza6 from '../../img/pizzas/pizza6.png'
import Pizza7 from '../../img/pizzas/pizza7.png'

import styles from './Modal.module.scss'


Modal.setAppElement('#root')

export const Options = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [titleModal, setTitleModal] = useState('')
    const [pizzaImage, setPizzaImage] = useState('')
    const [pizzaDesc, setPizzaDesc] = useState('')
    const [pricePizza, setPricePizza] = useState('34.00')
    const [quant, setQuant] = useState(0)

    const [pizzas, setPizzas] = useState<PizzaJson>()

    let targetPizza: String = '';

    useEffect(() => {
        fetch('../../../pizzas.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => setPizzas(data))
    }, [])

    const showModal = (e: any) => {
        targetPizza = e.target.attributes.alt.nodeValue.split('-')

        pizzas?.data.map((item: PizzaItem) => {
            if (item.id === Number(targetPizza[1])) {
                setTitleModal(item.name)
                setPizzaImage(item.img)
                setPizzaDesc(item.description)
            }
        })

        setModalIsOpen(true)
    }

    const handleQuantM = () => {
        if (quant > 0) {
            setQuant((state) => state - 1)
        }
    }

    const handleQuantP = () => {
        setQuant((state) => state + 1)
    }


    return (
        <>
            <Header />

            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className={styles.modal}
                overlayClassName={styles.modal_overlay}>
                        <img 
                            className={styles.close} 
                            src={iconClose} alt="close"
                            onClick={() => setModalIsOpen(false)} />

                        <h2 className="absolute top-10">{titleModal}</h2>

                        <div className='flex items-center justify-center flex-col absolute inset-y-1/2 mt-2'>
                            <img
                                src={pizzaImage}
                                className='w-52 mb-5'
                                alt='image-pizza' />
                            <div>
                                <div className='w-full h-full flex items-center justify-center gap-4 font-["Montserrat"] text-2xl mb-5'>
                                    <div className='flex items-center'>
                                        <input type="radio" id='P' name='pizza-choose' className='w-7 h-7 cursor-pointer' />
                                        <label htmlFor="P">P</label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="radio" id='M' name='pizza-choose' className='w-7 h-7 cursor-pointer' />
                                        <label htmlFor="M">M</label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="radio" id="G" name='pizza-choose' className='w-7 h-7 cursor-pointer' defaultChecked/>
                                        <label htmlFor="G">G</label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center flex-col gap-4 font-["Montserrat"]'>
                                <div className='flex items-center'>
                                    <button type='button' className='w-10' onClick={handleQuantM}>-</button>
                                    <div className='flex justify-center w-6'><p>{quant}</p></div>
                                    <button type='button' className='w-10' onClick={handleQuantP}>+</button>
                                </div>
                                <div className='flex justify-center flex-col'>
                                    <p className='text-3xl'>R${pricePizza}</p>
                                    <div className='break-words px-4'>
                                        <p className=' text-center'>{pizzaDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <button type='button' 
                            className='font-["Montserrat"] font-bold text-white bg-orange-400 p-3 rounded-2xl duration-300 absolute bottom-5 text-xl'>
                            Adicionar ao carrinho
                        </button>                
            </Modal>

            <main className="w-full h-[calc(100vh_-_4rem)] bg-bg-option bg-center bg-no-repeat bg-cover flex items-center justify-center">
                <div className="w-full h-full grid grid-cols-4 justify-items-center content-center gap-10">
                    <div className="pizza-1 text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza1} alt="pizza-1"
                            className="w-40 hover:scale-105 mb-4 duration-100"
                            onClick={(e) => showModal(e)} />

                            <p>Portuguesa</p>

                        <Button name='Adicionar' 
                            setModalIsOpen={setModalIsOpen} 
                            setTitleModal={setTitleModal}
                            setPizzaImage={setPizzaImage}
                            setPizzaDesc={setPizzaDesc} />
                    </div>
                    <div className="pizza-2 text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza2} alt="pizza-2" 
                            className="w-40 hover:scale-105 mb-4 duration-100" 
                            onClick={(e) => showModal(e)} />
                        <p>Gorgonzola</p>
                        
                        <Button name='Adicionar' 
                            setModalIsOpen={setModalIsOpen} 
                            setTitleModal={setTitleModal}
                            setPizzaImage={setPizzaImage}
                            setPizzaDesc={setPizzaDesc} />
                    </div>
                    <div className="pizza-3 text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza3} alt="pizza-3" 
                            className="w-40 hover:scale-105 mb-4 duration-100"
                            onClick={(e) => showModal(e)} />
                        <p>Nordestina</p>
                        
                        <Button name='Adicionar' 
                            setModalIsOpen={setModalIsOpen} 
                            setTitleModal={setTitleModal}
                            setPizzaImage={setPizzaImage}
                            setPizzaDesc={setPizzaDesc} />
                    </div>
                    <div className="pizza-4 text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza4} alt="pizza-4" 
                            className="w-40 hover:scale-105 mb-4 duration-100"
                            onClick={(e) => showModal(e)} />
                        <p>Quatro Queijos</p>
                        
                        <Button name='Adicionar' 
                            setModalIsOpen={setModalIsOpen} 
                            setTitleModal={setTitleModal}
                            setPizzaImage={setPizzaImage}
                            setPizzaDesc={setPizzaDesc} />
                    </div>
                    <div className="pizza-5 text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza5} alt="pizza-5" 
                            className="w-40 hover:scale-105 mb-4 duration-100"
                            onClick={(e) => showModal(e)} />
                        <p>Calabresa</p>
                        
                        <Button name='Adicionar' 
                            setModalIsOpen={setModalIsOpen} 
                            setTitleModal={setTitleModal}
                            setPizzaImage={setPizzaImage}
                            setPizzaDesc={setPizzaDesc} />
                    </div>
                    <div className="pizza-6 text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza6} alt="pizza-6" 
                            className="w-40 hover:scale-105 mb-4 duration-100"
                            onClick={(e) => showModal(e)} />
                        <p>Dois Queijos</p>
                        
                        <Button name='Adicionar' 
                            setModalIsOpen={setModalIsOpen} 
                            setTitleModal={setTitleModal}
                            setPizzaImage={setPizzaImage}
                            setPizzaDesc={setPizzaDesc} />
                    </div>
                    <div className="pizza-7 text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                            <img src={Pizza7} alt="pizza-7" 
                            className="w-40 hover:scale-105 mb-4 duration-100"
                            onClick={(e) => showModal(e)} />
                        <p>Chocolate</p>
                        
                        <Button name='Adicionar' 
                            setModalIsOpen={setModalIsOpen} 
                            setTitleModal={setTitleModal}
                            setPizzaImage={setPizzaImage}
                            setPizzaDesc={setPizzaDesc} />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}