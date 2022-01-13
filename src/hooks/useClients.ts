import Client from '../core/Client';
import { useState, useEffect } from 'react';
import ClientCollection from '../backend/db/ClientCollection';
import RepositoryClient from '../core/RepositoryClient';
import useShow from './useShow'

export default function useClients(){

  const repo: RepositoryClient = new ClientCollection();
  
  const { tableVisible, showTable, showForm} = useShow();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);
  
  function getAll(){
    repo.getAll().then(clients => {
      setClients(clients);
      showTable();
    });
  }

  function selectedClient(client: Client){
    setClient(client);
    showForm();
  }
  async function excludedClient(client: Client){
    await repo.delete(client);
    getAll();
  }

  function newClient(){
    setClient(Client.empty());
    showForm();
  }

  async function saveClient(client: Client){
    await repo.save(client);
    getAll();
  }

  return {
    client,
    clients,
    newClient,
    saveClient,
    excludedClient,
    selectedClient,
    getAll,
    tableVisible,
    showTable,
  }

}