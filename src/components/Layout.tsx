import Title from "./Title";

// interface: typescript resource 
interface LayoutProps {
  title: string
  children: any
}

export default function Layout(props: LayoutProps){

  return (
    <div className={`
      flex flex-col w-3/5 bg-white text-gray-800 rounded-md
    `}>
      <Title>{props.title}</Title>
      <div className="px-5 py-3">
        {props.children}
      </div>
    </div>
  );

}