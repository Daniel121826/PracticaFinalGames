
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: Props) => {
  return <input type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Buscar juego..." />;
};

