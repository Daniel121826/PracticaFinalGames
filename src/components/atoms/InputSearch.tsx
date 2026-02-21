
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: Props) => {
  return <input type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Buscar juego..."
        className="w-full max-w-md px-4 py-7 rounded-xl bg-light-black text-white placeholder:text-2xl text-2xl"
         />;
};

