import cancelIcon from "../../img/containerPage/icon_cancel.png";

interface CreateModalProps {
    setIsCreateModal: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CreateModal({setIsCreateModal}: CreateModalProps) {
    const closeCreateModal = () => {
        setIsCreateModal(false);
    }
  return (
    <div className="absolute inset-0 z-20 w-full bg-black/60 flex justify-center items-center">
        <div className="border-2 bg-white w-[600px] h-[600px]">
            <div className="flex justify-between p-5">
                <div>컨테이너 생성하기</div>
                <button onClick={closeCreateModal}>
                    <img src={cancelIcon} alt="cancel" className="w-4"/>
                </button>
            </div>
        </div>
    </div>
  )
}
