import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteAnswers } from "@/app/AppState/Features/admin/adminSlice";

function Pill({ cellLabel, movie }) {
  const dispatch = useDispatch();

  return (
    <div className="Pill">
      {movie}{" "}
      <RxCross2
        onClick={() =>
          dispatch(deleteAnswers({ cellLabel, movieToDelete: movie }))
        }
        className="Pill-cross-icon"
      />
    </div>
  );
}

export default Pill;
