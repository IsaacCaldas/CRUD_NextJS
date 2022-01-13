import Layout from '../components/Layout';
import Table from '../components/Table';
import Form from '../components/Form';
import Button from '../components/Button';
import useClients from '../hooks/useClients';

export default function Home() {

  const {
    client,
    clients,
    newClient,
    saveClient,
    excludedClient,
    selectedClient,
    tableVisible,
    showTable,
  } = useClients();

  return (

    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-rfrom-indigo-500 to-indigo-800 text-white
    `}>
      <Layout title="Simple Registration">
        {tableVisible ? (
          <>
            <div className='flex justify-end'>
              <Button 
                className='mb-3 indigo'
                onClick={newClient}
              >
                New Client
              </Button>
            </div>
            <Table 
              clients={clients} 
              selectedClient={selectedClient} 
              excludedClient={excludedClient}
            >
            </Table>
          </>
        ) : (
          <Form
            client={client} 
            changedClient={saveClient}
            canceled={showTable}
          >
          </Form>
        ) }
      </Layout>
    </div>
  )
}
