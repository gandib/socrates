import Button from "../Button";

const Files = ({
  icon,
  title,
  input,
}: {
  icon: string;
  title: string;
  input?: string;
}) => {
  return (
    <div className="h-[120px] w-[406px] rounded-[20px] p-6 gap-1.5 bg-[#242424] flex   items-center">
      <div className="h-[66px] w-[66px] p-[15px] flex justify-center items-center">
        <img src={icon} alt="" />
      </div>
      <div className="gap-2 flex flex-col">
        <p className="text-white text-lg font-semibold h-[23px] flex  items-center">
          {title}
        </p>
        {input && (
          <div className="flex ">
            <input
              className="h-10 w-[286px] rounded-[100px] py-1 pr-0.5 pl-5 bg-[#353535] text-sm font-normal "
              type="text"
              placeholder="https://example.com/file.pdf"
            />
            <div className="ml-[-62px] flex justify-center items-center">
              <Button
                title="Add"
                style="h-9 w-[60px] rounded-[20px] px-4 gap-[10px] bg-white/15"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Files;
