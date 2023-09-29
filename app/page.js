import Image from "next/image"
import Layout from "./components/organism/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="w-7/12 bg-red-300"></div>
      <div className="w-5/12 bg-gray-600"></div>
    </Layout>
  )
}
