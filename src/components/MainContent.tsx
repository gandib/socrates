import cloud from "../assets/cloud.svg";
import mask1 from "../assets/mask1.svg";
import mask2 from "../assets/mask2.svg";
import mask3 from "../assets/mask3.svg";
import mask4 from "../assets/mask4.svg";
import file from "../assets/file.svg";
import file2 from "../assets/file2.svg";
import tooltip2 from "../assets/tooltip2.svg";
import starts from "../assets/starts.svg";
import cursor from "../assets/cursor.svg";
import Button from "./Button";
import Files from "./reusable/Files";
import DocPdf from "./reusable/DocPdf";

const MainContent = () => {
  return (
    <div className="gap-20 flex flex-col">
      {/* alert */}
      <div className="flex justify-center">
        <div
          className="bg-[#242424]  rounded-[100px] pr-3 pl-4 py-2 shadow-md gap-3 w-[664px] flex items-center"
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

      {/* Files Section  */}
      <div className="gap-[60px] flex flex-col">
        <div className="gap-6 flex flex-col ">
          {/* Heading  */}
          <h1 className="mx-[59px] text-[54px] h-[54px] text-white text-center font-medium flex justify-center">
            Add Files to{" "}
            <span className="w-[62px] h-[62px] rounded-[16px] bg-[#1E1E1E]  inset-0 rotate-[-8deg] border border-transparent border-gradient-to-r from-[#34343466] via-[#34343466] to-[#373737] flex justify-center mx-4">
              <img className="w-11" src={cloud} alt="" />
            </span>{" "}
            Cloud Chat
          </h1>

          <div className="text-sm font-normal h-[18px] text-center">
            <p className="text-[#B7B7B7]">
              Your files will not be stored on our servers and no AI models will
              be trained.
            </p>
            <p className="text-[#F37F0C]">
              Supported File Types: .docx, .pdf, .epub, and many text filetypes
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="gap-5 flex flex-col">
          <div className="gap-2 grid grid-cols-2 w-[820px] mx-32">
            <Files
              icon={mask1}
              title="Drag & drop local files here, or click to select"
            />

            <Files icon={mask2} title="Enter in a public URL:" input="input" />

            <Files icon={mask3} title="Add files from Dropbox" />

            <Files icon={mask4} title="Add files from Google Drive" />
          </div>

          <div className="h-[62px] w-[820px] bg-[#242424] rounded-[34px] p-4 gap-1.5 flex  justify-center mx-32">
            <div className=" gap-2 flex">
              {/* pdf section  */}
              <DocPdf icon={file} title="Report_file.pdf" style="w-[309px]" />

              {/* doc section  */}
              <DocPdf icon={file2} title="Article.docs" style="w-[290px]" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-[528px] gap-4 flex justify-center items-center mx-[274px]">
          <div>
            <Button
              title="Start"
              style="w-[240px] h-[60px] px-8 gap-[10px] border border-[#FB9937]"
            />
          </div>
          <div className="text-base font-semibold h-[22px] text-white">or</div>
          <div className="">
            <Button
              title="Start with Deep Dive"
              icon={starts}
              style="text-base font-semibold w-[240px] h-[60px] text-white bg-gradient-to-r from-[#FFBF00] to-[#FB9937]"
            />
          </div>
        </div>

        {/* Section 4  */}
        <div className="w-[235px] h-[120px] absolute top-[745px] right-[112px]">
          <div className="mb-2 ml-[-4px]">
            <img className="w-6 h-6 text-white" src={tooltip2} alt="" />
            <img className="w-6 h-6 ml-[10px] mt-[-24px]" src={cursor} alt="" />
          </div>
          <div className="w-[226px] h-[94px]">
            <p className=" text-xs font-normal bg-[#1E1E1E] text-white rounded-[20px] p-3 gap-2">
              Deep Dive processes documents section by section for "unlimited"
              context, enabling complete answers. Run once per chat to unlock
              Table AI and Prompt Loops
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
