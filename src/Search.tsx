import React, { useCallback, useState } from "react";

import useAbort from "./useAbort";

function Search() {
  const [keyword, setKeyword] = useState("");
  const { data } = useAbort(keyword);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  }, []);

  return (
    <div className="App">
      <form>
        <input type="text" onChange={handleChange} value={keyword} />
      </form>
      <ul>
        {data?.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;

/*



*/
