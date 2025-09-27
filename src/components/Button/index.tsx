type ButtonProps = {
  button?: string;
}

const Button: React.FC<ButtonProps> = ({button}) => {
  return (
    <button className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-[200px]">
      {button}
    </button>
  );
};

export default Button;
