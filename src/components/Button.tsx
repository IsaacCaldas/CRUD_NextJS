interface ButtonProps{
  color?: 'green' | 'blue' | 'gray';
  children: any;
}

export default function Button(props: ButtonProps){

  return (
    
    <button>
      {props.children}
    </button>

  );

}