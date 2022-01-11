import Title from "./Title";

// interface: typescript resource 
interface LayoutProps {
  title: string
  children: any
}

export default function Layout(props: LayoutProps){

  return (
    <div className={`
      flex flex-col w-3/5 bg-gray-900 text-gray-100 rounded-xl
    `}>
      <Title>{props.title}</Title>
      <div className="p-5">
        {props.children}
      </div>
    </div>
  );

}