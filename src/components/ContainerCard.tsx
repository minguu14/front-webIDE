const ContainerCard = () => {
  return (
    <>
      <div className="border w-[300px] h-[233px] rounded-md bg-white">
        <div className="w-[260px] m-auto">
          <div className="flex justify-between w-full pt-3">
            <div className="flex">
              <div>●</div>
              <div>firstContainer</div>
            </div>
            <button>삭제</button>
          </div>

          <div className="flex text-xs pt-2">
            <div className="border-r pr-1">HTML/CSS/JS</div>
            <div className="border-r pr-1 pl-1">0.5vCPU</div>
            <div className="pl-1">5GB</div>
          </div>

          <div className="mt-20 text-xs">방금 전에 수정됨</div>

          <button className="border rounded-md w-full mt-6 p-1">실행</button>
        </div>
      </div>
    </>
  );
};

export default ContainerCard;
