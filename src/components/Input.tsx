interface InputProps {
  type?: 'text' | 'number';
  text: string;
  value: any;
  readOnly?: boolean;
  className?: string;
  placeHolder?: string;
  changedValue?: (value: any) => void
}

export default function Input(props: InputProps){

  return(
    <div className={`flex flex-col text-gray-800 ${props.className}`}>
      <label className="mb-1 ml-1  text-xl font-bold">
        {props.text}
      </label>
      <input 
        type={props.type ?? 'text'} 
        value={props.value}
        readOnly={props.readOnly}
        placeholder={props.placeHolder}
        className={`
          border border-indigo-500 rounded-xl focus:outline-none bg-gray-200 ${props.readOnly ? '' : 'focus:bg-gray-100'} px-4 py-2
        `}

        onChange={e => props.changedValue?.(e.target.value)}
      />
    </div>
  )

}