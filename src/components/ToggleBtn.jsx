const ToggleBtn = ({ toggleHandler, toggle }) => {
  return (
    <>
      <label
        htmlFor="Toggle3"
        className="inline-flex text-white w-full items-center justify-end  px-2 rounded-md cursor-pointer font-medium"
      >
        <input
          onChange={toggleHandler}
          id="Toggle3"
          type="checkbox"
          className="hidden peer"
          checked={toggle}
        />
        <span className="px-10 py-3 border rounded-tl-3xl shadow-inner  bg-[#555555] peer-checked:bg-[#25d4a0]">
          ONE-TIME
        </span>
        <span className="px-10 py-3 border rounded-tr-3xl shadow-inner bg-[#25d4a0] peer-checked:bg-[#555555]">
          MONTHLY
        </span>
      </label>
    </>
  );
};

export default ToggleBtn;
