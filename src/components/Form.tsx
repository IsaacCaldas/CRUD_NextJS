import React, { useState } from 'react';
import Input from './Input';
import Client from '../core/Client';
import Button from './Button';

interface FormProps {
  client: Client;
  changedClient?: (client: Client) => void;
  canceled?: () => void;
}

export default function Form(props: FormProps){
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? 0);

  return(
    <div>
      {id ? (
        <Input 
          text='Code' value={id}
          readOnly
          className='mb-3'
        />
      ) : false }

      <Input 
        text='Name' value={name} 
        changedValue={setName}
        className='mb-4'
        placeHolder='Digite um nome.'
      />

      <Input 
        text='Age' value={age} type='number' 
        changedValue={setAge}
      />

      <div className="flex justify-end mt-5"> 
        <Button 
          className="mr-2 green"
          onClick={() => props.changedClient?.(new Client(name, +age, id))}
        >
          {id ? 'Change' : 'Save'}
        </Button>
        <Button 
          className="red"
          onClick={props.canceled}
        >
          Cancel
        </Button>
      </div>
    </div>
  )

}