import logo from "../assets/logo.svg";
import sidebarLeft from "../assets/sidebar-left.svg";
import search from "../assets/search.svg";
import add from "../assets/add.svg";
import flow from "../assets/flow.svg";
import settings from "../assets/settings.svg";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="w-[280px] p-3 rounded-[24px] h-[868px] ">
      {/* Upper sidebar  */}

      <div className="gap-8 flex flex-col h-[164px] w-[256px]">
        <div className="flex justify-between h-10">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div className="flex gap-3 h-6 py-2">
            <img className="w-6 h-6" src={search} alt="search icon" />
            <img
              className="w-6 h-6"
              src={sidebarLeft}
              alt="sideber-left icon"
            />
          </div>
        </div>

        <div className="gap-3 flex flex-col">
          <Button
            icon={add}
            title="Add folder"
            style="border border-white/15 gap-1"
          />

          <Button icon={add} title="Create chat" style="bg-white/15 gap-1" />
        </div>
      </div>

      {/* Lower sidebar */}
      <div className="h-[224px] w-[256px] mt-[456px] gap-3 flex flex-col">
        <div className="bg-[#363636] rounded-[12px] w-[256px] h-[120px] p-4 gap-3 flex flex-col">
          <div className="gap-1 flex flex-col">
            <h4 className="text-lg font-semibold h-[18px] text-white">
              Upgrade to Premium
            </h4>
            <p className="text-sm font-normal h-[14px] text-[#868686]">
              Make the most of all features!
            </p>
          </div>
          <div>
            <Button
              title="Upgrade plan"
              style="w-[224px] border border-[#F37F0C] bg-white/15 gap-[10px]"
            />
          </div>
        </div>

        <div className="h-10 py-[2px] gap-2 flex items-center">
          <img className="w-5 m-2" src={flow} alt="" />
          <p className="text-sm text-white font-medium">Flow AI Templates</p>
        </div>

        <div className="flex ">
          <div className="w-[232px] py-0.5 gap-2 flex items-center">
            <img
              className="w-9 rounded-[40px]"
              src="https://s3-alpha-sig.figma.com/img/8e56/5f7d/045ef25eb7ea059c5099acaaa43f219a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j38X7gVzxkKW1jnyomUir-uj7irtCZueb~3Gas0blqRjWDxtqbHwJD-3ZPH~6npmuHx5d66-~Ic-RKNy~gmvAleCIBoujrO2O4w5sP-a2K0bGd7JJrYRUWPPtIdOCqxa24je0POHBDDTNl2PLwOJi-iguGvko4c0xX7059kT6zEZATxtqlXhoorc7ZIa024NUm~Ttv~om2SQEfpdnu5owilBFy8ynun5nzPpcMNODdI3l9zvU4dKsOBaUK~~PKObf-TqBnFqj1RxgrWIT57oKU5WIbNjNgJZUnhlO~Dd32gRSHTDOv2P6DpG7dJalGvL0SGcFOjnBkB9brXGo5WkeQ__"
              alt=""
            />
            <p className="text-sm h-[18px] font-medium text-center text-white">
              Jessica Mills
            </p>
          </div>
          <div className="w-6 flex justify-center items-center">
            <img className="" src={settings} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
