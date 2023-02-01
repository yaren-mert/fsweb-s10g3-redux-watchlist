import { useDispatch } from "react-redux";
import { favDelete } from "../actions/action";

export default function FavMovie({ title, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(favDelete(id));
  };
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group transition duration-150 ease-in-out hover:bg-gray-200">
      <div className="pr-4 flex-1 font-bold text-lg text-gray-700">{title}</div>
      <button
        onClick={handleDelete}
        className="px-3 py-2 block text-sm rounded bg-red-500 text-white hover:bg-red-600 transition duration-150 ease-in-out"
      >
        Çıkar
      </button>
    </div>
  );
}
