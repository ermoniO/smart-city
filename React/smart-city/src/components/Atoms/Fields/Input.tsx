
interface FormProps {
   field: string;
   backgroundColor?: string;
}



export const Input = (
    {
    field, 
    backgroundColor
}: FormProps) => {

    return (
        <div className="mb-3 pt-0">
            <input type={field} 
            placeholder="Placeholder" 
            className="rounded-full border-4 border-stone-900 px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white text-sm  shadow outline-none focus:outline-none focus:ring w-full"
            style={{backgroundColor}}/>
        </div>
    )
}