import deleteIcon from "../img/containerPage/icon_delete.png";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/hook";
import { clickedContainer, deleteContainer } from "../store/containerSlice/containerSlice";

interface ContainerCardProps {
  id: string;
  title: string;
  stack: string;
  performance: string;
}

export default function ContainerCard({id, title, stack, performance}:ContainerCardProps){
  const dispatch = useAppDispatch();

  const deleteContainers = (id: string) => {
    dispatch(deleteContainer(id));
  }

  return (
      <div className="border w-[300px] h-[233px] rounded-md bg-white">
        <div className="w-[260px] m-auto">
          <div className="flex justify-between w-full pt-3">
            <div className="flex">
              <div>{title}</div>
            </div>
            <button onClick={() => deleteContainers(id)}>
              <img src={deleteIcon} alt="delete" />
            </button>
          </div>

          <div className="flex text-xs pt-2 text-sky-500">
            <div className="pr-1">{stack}</div>
            <div className="pr-1">{performance}</div>
          </div>

          <div className="mt-20 text-xs text-gray-300">방금 전에 수정됨</div>
          <Link to={"/editor"}>
          <button 
          className="border rounded-md w-full mt-6 p-1 bg-blue-950 text-white"
          onClick={() => dispatch(clickedContainer({id, title, stack, performance}))}
          >실행</button>
          </Link>
        </div>
      </div>
  );
};

