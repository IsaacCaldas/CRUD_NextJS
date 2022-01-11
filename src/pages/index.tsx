import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-indigo-500 to-indigo-800 text-white
    `}>
      <Layout title="Simple Registration">
        <span>Content</span>
      </Layout>
    </div>
  )
}
