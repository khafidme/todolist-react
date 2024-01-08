const List = ({ data }) => {
    
  return (
    data.map((todo) => todo.done ? (
    <div
      key={todo.title}
      className="flex gap-3 items-center w-full group my-3 p-6 bg-indigo-50 rounded-xl shadow-sm"
    >
      <button className="flex items-center w-6 h-6 overflow-hidden rounded-full border-[3px] border-indigo-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#a5b4fc"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </button>
      <h5 className="text-lg font-semibold text-gray-400 line-through">
        <a href="#">{todo.title}</a>
      </h5>
    </div>
    ) : (
    <div
      key={todo.title}
      className="flex gap-3 items-center w-full group my-3 p-6 bg-white hover:bg-indigo-50 rounded-xl shadow-sm"
    >
      <button className="flex items-center w-6 h-6 overflow-hidden rounded-full border-[3px] group-odd:border-blue-500 group-even:border-fuchsia-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden group-hover:block"
          width="28"
          height="28"
          fill="#818cf8  "
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </button>
      <h5 className="text-lg font-semibold">
        <a href="#">{todo.title}</a>
      </h5>
    </div>
    ) )
  )
}

export default List