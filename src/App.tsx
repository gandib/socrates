import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex justify-center">
      <div className="bg-[#242424] w-[1440px] h-[900px] rounded-[32px] p-4 gap-3 flex justify-between">
        {/* sidebar */}
        <div>
          <Sidebar />
        </div>

        {/* content */}
        <div className="bg-[#2B2B2B] w-[1116px] rounded-[16px] pt-10 px-5 pb-5 gap-20 h-[868px] border-2">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
