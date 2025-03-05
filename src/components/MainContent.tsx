const MainContent = () => {
  return (
    <div>
      {/* alert */}
      <div className="flex justify-center">
        <div
          className="bg-[#242424]  rounded-[100px] text-teal-900 pr-3 pl-4 py-2 shadow-md gap-3 w-[664px] flex items-center"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-5 w-5 text-[#FB9937] mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-normal text-sm h-[19px] text-center text-white">
                The web version does not display local chats. To access all
                features, please{" "}
                <span className="text-[#FB9937] text-sm font-semibold h-4">
                  install the app.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
