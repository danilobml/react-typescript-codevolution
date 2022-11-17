
interface InputProps {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({value, handleChange}: InputProps):JSX.Element {
  return (
    <div>
        <input type="text" onChange={handleChange} value={value} />
    </div>
  )
}

export default Input