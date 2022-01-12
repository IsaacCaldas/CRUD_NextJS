import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';
import Button from '../components/Button';
import Form from '../components/Form';

export default function Home() {

  const clients = [
    new Client('Isaac', 18, '1'),
    new Client('Ana', 34, '2'),
    new Client('Jorge', 66, '3'),
    new Client('Josivaldo', 54, '4'),
    new Client('Tereza', 45, '5'),
  ]

  function selectedClient(client: Client){
    console.log(client.name);
    
  }
  function excludedClient(client: Client){
    console.log(`Cliente excluído: ${client.name}`);
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-indigo-500 to-indigo-800 text-white
    `}>
      <Layout title="Simple Registration">
        <div className='flex justify-end'>
          <Button className='mb-3 indigo'>New Client</Button>
        </div>
        <Table 
          clients={clients} 
          selectedClient={selectedClient} 
          excludedClient={excludedClient}
        >
        </Table>
        <Form client={clients[2]}></Form>
      </Layout>
    </div>
  )
}
