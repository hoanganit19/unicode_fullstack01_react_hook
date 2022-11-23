import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function ContextDemo({ children }) {
  const [data, setData] = useState({
    theme: "light",
  });

  const setTheme = (theme) => {
    const dataUpdate = { ...data };
    dataUpdate.theme = theme;
    setData(dataUpdate);
  };

  return (
    <MyContext.Provider
      value={{
        data: data,
        action: {
          setTheme,
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

/*

state = {
  theme: '',
  posts: []
}

this.setState({
  theme: 'abc'
})

setData({
  theme: 'abc'
})
*/
