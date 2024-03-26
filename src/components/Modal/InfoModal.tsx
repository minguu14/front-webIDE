import settingIcon from "../../img/containerPage/icon_settings.png";
import logoutIcon from "../../img/containerPage/icon_logout.png";
import cancelIcon from "../../img/containerPage/icon_cancel.png";
import { Link, Route, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { OpenInfoModal } from "../../store/modalSlice/modalSlice";
import { access } from "fs";
import { logout } from "../../store/reducers/userSlice";

export default function InfoModal() {
  const dispatch = useAppDispatch();
  const closeInfoModal = () => {
    dispatch(OpenInfoModal(false));
  };
  const route = useNavigate();
  //로그인 유저 정보
  const user = useAppSelector((state) => state.persist.user);
  const name = user.map((data: any) => data.name);
  const email = user.map((data: any) => data.email);
  const removeToken = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("persist:root");
    dispatch(logout());
    route("/");
  };

  return (
    <div className="border-2 w-60 h-60 rounded absolute right-0 bg-white">
      <div className="border-b-2 h-36 px-3">
        <div className="flex justify-between pt-3 items-center">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
              alt="info"
              className="rounded-full border-2 w-10 mr-1 cursor-pointer"
            />
            <p>{name}</p>
          </div>
          <button onClick={closeInfoModal}>
            <img src={cancelIcon} alt="cancel" className="w-5" />
          </button>
        </div>
        <div className="text-sm ml-1 pt-2">{email}</div>
        <div className="flex items-center mt-5">
          <img src={settingIcon} alt="setting" className="w-6 mr-1" />
          <Link to={"/mypage"}>마이페이지</Link>
        </div>
      </div>
      <button
        className="flex items-center p-3 mt-5"
        onClick={() => removeToken()}
      >
        <img src={logoutIcon} alt="logout" className="mr-1" />
        로그아웃
      </button>
    </div>
  );
}
