export default function Title(props){
  
  return(
    <div className="flex flex-col justify-center">
      {/* px = padding axis x, py = padding axis y*/}
      <h1 className="px-5 py-2 text-2xl">{props.children}</h1>
      <hr className="border-2 border-indigo-500" />
    </div>
  );

}