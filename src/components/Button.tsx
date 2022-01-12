interface ButtonProps{
  color?: 'green' | 'indigo' | 'gray';
  className?: string;
  children: any;
}

export default function Button(props: ButtonProps){

  return (
    
    <button className={`
      bg-indigo-600 text-gray-200 
      px-4 py-2 rounded-xl hover:bg-indigo-800
      transition linear duration-300
      ${props.className}
    `}>
      {props.children}
    </button>

  );

}