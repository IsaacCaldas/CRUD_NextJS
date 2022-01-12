interface ButtonProps{
  color?: 'green' | 'indigo' | 'red' | 'gray';
  className?: string;
  children: any;
}

export default function Button(props: ButtonProps){

  return (
    
    <button className={`text-gray-200 
      px-4 py-2 rounded-md font-bold
      transition linear duration-300
      ${props.className}
    `}>
      {props.children}
    </button>

  );

}