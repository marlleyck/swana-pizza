type ButtonProps = {
    name: string;
} 

export const Button = ({name}: ButtonProps) => {
    return (
        <button className="bg-orange-400 p-3 rounded-2xl hover:brightness-90 duration-200">{name}</button>
    )
}