
import ContainerCard from "../components/ContainerCard";
import addIcon from "../img/containerPage/icon_add.png";
import ADHD from "../img/logo/ADHD Aspire, Dream, Honor, Discover.png";
import InfoModal from "../components/Modal/InfoModal";
import { useState } from "react";
import CreateModal from "../components/Modal/CreateModal";
import { useAppSelector } from "../store/hook";


export default function ContainerPage(){
    const [isInfoModal, setIsInfoModal] = useState(false);
    const [isCreateModal, setIsCreateModal] = useState(false);
    const containerLists = useAppSelector((state) => state.container.containerLists);
    const openInfoModal = () => {
        setIsInfoModal(true);
    }

    const openCreateModal = () => {
        setIsCreateModal(true);
    }
  return (
    <div className="w-screen h-scree">
        {isCreateModal && <CreateModal 
        setIsCreateModal={setIsCreateModal}
        />}
      <main className="w-full flex-1 bg-main-bg">
        <div className="p-10 h-screen">
          <section>
            <div className="flex justify-between">
              <div>
                <img src={ADHD}
                alt="logo"
                className="w-32 h-full"
                />
              </div>
              <div className="flex items-center">
                <img
                  src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                  alt="logo"
                  className="rounded-full border-2 w-10 mr-1 cursor-pointer"
                  onClick={openInfoModal}
                />
                <div className="relative">
                <p>test</p>
                {isInfoModal && <InfoModal setIsInfoModal={setIsInfoModal}/>}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="border-gray-600 w-full rounded-md p-5 mt-5 mb-8 bg-gray-200">
              <button className="rounded w-36 p-2 bg-blue-950 flex items-center" onClick={openCreateModal}>
                <img src={addIcon} alt="add"/>
                <p className="text-white">새 컨테이너</p>
              </button>
            </div>
          </section>

          <section className="flex flex-wrap gap-10">
            {containerLists.map((list) => (
              <ContainerCard
              key={list.id}
              id={list.id}
              title={list.title}
              stack={list.stack}
              performance={list.performance}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};
