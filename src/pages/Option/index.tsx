import { useParams } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const Option = () => {
    const { id } = useParams() 
    

    return (
        <>
            <Header />

            <main className="w-full h-[calc(100vh_-_4rem)] bg-bg-option bg-center bg-no-repeat bg-cover flex items-center justify-center">
                <div className="w-full h-full grid grid-cols-4 justify-items-center content-center gap-10">
                    <div className="text-center text-white font-bold text-lg cursor-pointer font-['Montserrat']">

                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}