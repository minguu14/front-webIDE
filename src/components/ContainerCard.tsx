import deleteIcon from "../img/containerPage/icon_delete.png";

const ContainerCard = () => {
  return (
    <>
      <div className="border w-[300px] h-[233px] rounded-md bg-white">
        <div className="w-[260px] m-auto">
          <div className="flex justify-between w-full pt-3">
            <div className="flex">
              <div>firstContainer</div>
            </div>
            <button>
              <img src={deleteIcon} alt="delete" />
            </button>
          </div>

          <div className="flex text-xs pt-2 text-sky-500">
            <div className="border-r pr-1">HTML/CSS/JS</div>
            <div className="border-r pr-1 pl-1">0.5vCPU</div>
            <div className="pl-1">5GB</div>
          </div>

          <div className="mt-20 text-xs text-gray-300">방금 전에 수정됨</div>

          <button className="border rounded-md w-full mt-6 p-1 bg-blue-950 text-white">실행</button>
        </div>
      </div>
    </>
  );
};

export default ContainerCard;
