import { Input } from "antd";
import { useState } from "react";

const InputSearch = ({onSubmitSearch}) => {
  const [searchinput, setSearchinput] = useState("");
  return (
    <div>
      <form onSubmit={(e)=>onSubmitSearch(e,searchinput)} >
        <Input value={searchinput} onChange={(e)=>setSearchinput(e.target.value)} size="large" placeholder="Author name" />
      </form>
    </div>
  );
};

export default InputSearch;
