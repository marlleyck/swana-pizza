import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer className='w-full flex items-center justify-center p-4 gap-4'>
            <h1>fotter</h1>
            <FaInstagram color='white' size={30} className='cursor-pointer'/>
            <FaFacebook color='white' size={30}  className='cursor-pointer'/>
        </footer>
    )
}