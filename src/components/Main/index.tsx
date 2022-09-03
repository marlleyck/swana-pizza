export const Main = () => {
    return (
        <>
            <div className="bg-bg-main bg-no-repeat bg-center bg-cover w-screen h-[calc(100vh_-_4rem)] opacity-50 z-0 relative"></div>
            <main className="font-['Montserrat'] w-full h-[calc(100vh_-_4rem)] flex items-center justify-center flex-col z-1 absolute bottom-0">
                <h1 className="text-white text-3xl uppercase font-bold z-2 text-center">Nós iremos fazer a melhor <br /> pizza da sua <span className="text-orange-300 z-2">vida!</span></h1>
                <p className="text-white mt-2.5 text-xl text-center">Escolha seu sabor preferido e nossos cozinheiros irão fazer uma pizza <br /> como você nunca viu.</p>
            </main>
        </>
    )
}