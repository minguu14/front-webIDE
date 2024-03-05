import { Link } from "react-router-dom"
import ContainerCard from "../components/ContainerCard"

const ContainerPage = () => {
  return (
    <div className="w-screen h-screen flex">
        {/* NavBar */}
        <nav className="border-2 p-2 w-80 h-full flex flex-col justify-between">
            <div className="text-6xl text-center">
                LOGO
            </div>
            <div className="flex items-center justify-around">
                <div className="flex items-center">
                    <img 
                    src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                    alt="logo"
                    className="rounded-full border-2 w-10 mr-1"
                    />
                    <p className="font-medium">닉네임</p>
                </div>
                <Link to={"/"} className="font-medium">
                    로그아웃
                </Link>
            </div>
        </nav>
        {/* Main */}
        <main className="w-full flex-1 bg-main-bg ml">
            <section className="ml-8">
                <div>
                @@님의 컨테이너
                </div>
            </section>

            <section className="ml-8 mb-32">
                <div className="border-gray-600 w-full rounded-md p-5 mt-5 bg-gray-200">
                  <button className="rounded w-36 p-2 bg-blue-600">
                    <p className="text-white">★ 새 컨테이너</p>
                  </button> 
                </div>
            </section>

            <section className="ml-8 flex flex-wrap gap-3">
                <ContainerCard/>
            </section>
        </main>
    </div>
  )
}

export default ContainerPage