import "./App.css";

function App() {
  const todos = [
    { id: 1, title: "Daily meeting with team", done: false },
    { id: 2, title: "Pay for rent", done: false },
    { id: 3, title: "Check emails", done: true },
    { id: 4, title: "Lunch with Emma", done: false },
    { id: 5, title: "Meditation", done: false },
  ];
  return (
    <div className="flex">
      <aside className="hidden lg:block w-64 h-screen p-8 bg-blue-950 text-blue-100">
        <div className="flex">
          <div className="my-6">
            <img
              className="rounded-full border-2 border-blue-900 outline-2 outline-blue-200"
              src="https://www.khafid.web.id/_next/image?url=%2Fimages%2Fkhafid.jpg&w=256&q=75"
              alt="khafid"
              width={75}
              height={75}
            />
            <h2 className="mt-6 text-3xl font-semibold text-white">
              Joy Mitchell
            </h2>
          </div>
          <div className="lg:hidden">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM146.83,90.83,109.66,128l37.17,37.17a4,4,0,0,1-5.66,5.66l-40-40a4,4,0,0,1,0-5.66l40-40a4,4,0,1,1,5.66,5.66Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <nav>
          <ul>
            <li className="my-4">
              <a className="flex gap-3" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                </svg>{" "}
                Home
              </a>
            </li>
            <li className="my-4">
              <a className="flex gap-3" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
                </svg>{" "}
                Categories
              </a>
            </li>
            <li className="my-4">
              <a className="flex gap-3" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path>
                </svg>{" "}
                Analytics
              </a>
            </li>
            <li className="my-4">
              <a className="flex gap-3" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                </svg>{" "}
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <footer className="absolute bottom-0 my-4">@2023</footer>
      </aside>
      <main className="main container">
        <header className="flex justify-between p-8 shadow-md text-gray-700">
          <div className="flex gap-5">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </button>
            <h2 className="text-xl font-semibold">Today Tasks</h2>
          </div>
          <div className="flex gap-5">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </button>
          </div>
        </header>
        <div className="p-8">
          <section className="py-4">
            <div className="py-8">
              <h1 className="text-4xl font-bold text-gray-700">
                Whats up, Joy!
              </h1>
            </div>
            <div>
              <div className="py-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  Categories
                </h3>
              </div>
              <div className="flex gap-5 my-2">
                <div className="w-56 p-6 bg-white rounded-xl shadow-sm">
                  <span className="font-medium text-gray-400">40 tasks</span>
                  <h4 className="mb-5 text-2xl font-semibold">Business</h4>
                  <hr className="border-[3px] border-fuchsia-500" />
                </div>
                <div className="w-56 p-6 bg-white rounded-xl shadow-sm">
                  <span className="font-medium text-gray-400">18 tasks</span>
                  <h4 className="mb-5 text-2xl font-semibold">Personal</h4>
                  <hr className="border-[3px] border-blue-500" />
                </div>
              </div>
            </div>
          </section>
          <section className="py-4">
            <div>
              <div className="py-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  Todays Tasks
                </h3>
              </div>
              <div className="my-2 text-gray-700">
                {todos.map((todo) =>
                  todo.done ? (
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
                  )
                )}
              </div>
            </div>
          </section>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
