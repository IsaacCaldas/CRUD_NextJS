import React from 'react';
import Client from '../core/Client';
import { editIcon, trashIcon } from './Icons';

interface TableProps{
  clients: Client[];
  selectedClient?: (client: Client) => void;
  excludedClient?: (client: Client) => void;
}

export default function Table(props){

  const showActions = props.excludedClient || props.selectedClient;

  function renderHeader(){
    return (
      <tr>
        <th className='text-left px-4 py-1'>Code</th>
        <th className='text-left px-4 py-1'>Name</th>
        <th className='text-left px-4 py-1'>Age</th>
        {showActions ? <th className='px-4 py-1'>Actions</th> : false}
      </tr> 
    );
  }
  
  function renderData(){
    return props.clients?.map((client, i) => { 
      return (
        <tr key={client.id} className='bg-gray-700 even:bg-gray-800 hover:bg-gray-900'>
          <td className='text-left px-4 py-2'>{client.id}</td>
          <td className='text-left px-4 py-2'>{client.name}</td>
          <td className='text-left px-4 py-2'>{client.age}</td>
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  function renderActions(client: Client){
    return (
      <td className='text-center px-4 py-2'>
        {props.selectedClient ? (
          <button onClick={() => props.selectedClient?.(client)} className='text-green-600 mr-1 rounded-full hover:bg-gray-800 p-1'>{editIcon}</button>
        ) : false}
        
        {props.excludedClient ? (
          <button onClick={() => props.excludedClient?.(client)} className='text-red-600 ml-1 rounded-full hover:bg-gray-800 p-1'>{trashIcon}</button>
        ) : false}
      </td>
    );
  }

  return (

    <table className='w-full rounded-xl overflow-hidden text-gray-300'>
      <thead className={`
        bg-gradient-to-r from-indigo-500 to-indigo-800 text-gray-200 
        
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}      
      </tbody>
    </table>

  );

}