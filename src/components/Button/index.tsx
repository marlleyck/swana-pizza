type ButtonProps = {
    name: string;
} 

export const Button = ({name}: ButtonProps) => {
    return (
        <button className="bg-orange-300 p-3 rounded-2xl">{name}</button>
    )
}