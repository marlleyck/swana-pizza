import { SetStateAction, useEffect, useState } from 'react'

import { PizzaItem } from '../../types/PizzaItem';
import { PizzaJson } from '../../types/PizzaJson';

type ButtonProps = {
    name: string;
    setModalIsOpen: (value: boolean) => void;
    setTitleModal: React.Dispatch<SetStateAction<string>>;
    setPizzaImage: React.Dispatch<SetStateAction<string>>;
    setPizzaDesc: React.Dispatch<SetStateAction<string>>;
} 

export const Button = ({ name, setTitleModal, setModalIsOpen, setPizzaImage, setPizzaDesc }: ButtonProps) => {
    const [pizzas, setPizzas] = useState<PizzaJson>()

    useEffect(() => {
        fetch('../../../pizzas.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => setPizzas(data))
    }, [])

    let targetPizza: string = '';
    
    const showModal = (e: any) => {
        targetPizza = e.target.parentNode.classList[0].split('-')

        pizzas?.data.map((item: PizzaItem) => {
            if (item.id === Number(targetPizza[1])) {
                setTitleModal(item.name)
                setPizzaImage(item.img)
                setPizzaDesc(item.description)
            }
        })

        setModalIsOpen(true)
    }

    return (
        <button className="bg-orange-400 p-3 rounded-2xl hover:brightness-90 duration-200"
            onClick={(e: any) => showModal(e)}>{name}</button>
    )
}