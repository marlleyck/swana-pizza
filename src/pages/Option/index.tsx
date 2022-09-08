import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import Pizza1 from '../../img/pizzas/pizza.png'
import Pizza2 from '../../img/pizzas/pizza2.png'
import Pizza3 from '../../img/pizzas/pizza3.png'
import Pizza4 from '../../img/pizzas/pizza4.png'
import Pizza5 from '../../img/pizzas/pizza5.png'
import Pizza6 from '../../img/pizzas/pizza6.png'
import Pizza7 from '../../img/pizzas/pizza7.png'


export const Option = () => {
    
    const { id } = useParams() 

    const showImage = () => {
        if (id === '1') {
            return Pizza1
        } else if (id === '2') {
            return Pizza2
        } else if (id === '3') {
            return Pizza3
        } else if (id === '4') {
            return Pizza4
        } else if (id === '5') {
            return Pizza5
        } else if (id === '6') {
            return Pizza6
        } else if (id === '7') {
            return Pizza7
        }
    }

    return (
        <>
            <Header />

            <main className="w-full h-[calc(100vh_-_4rem)] bg-bg-option bg-center bg-no-repeat bg-cover flex items-center justify-center">
                <div className="w-full h-full grid grid-cols-4 justify-items-center content-center gap-10">
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">
                        <img src={showImage()} alt="" />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}