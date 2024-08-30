import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [myData, setMyData] = useState();
  const [dataToShow, setDataToShow] = useState();
  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    if (data) {
      data.json().then((res) => {
        setMyData(res);
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   if (!myData) return;
  //   let i = 0;
  //   const newArr = [];
  //   while (i < 3) {
  //     newArr.push(myData.products[i]);
  //   }
  //   setDataToShow(newArr);
  // }, [myData]);

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        My Header
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        {myData &&
          myData.products.map((each, index) => {
            if (index < 3) {
              return (
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "min-content",
                    backgroundColor: "burlywood",
                    minWidth: 300,
                    padding: 10,
                    margin: 5,
                    borderRadius: 10,
                    position: "relative",
                  }}
                  key={index}
                >
                  <img
                    style={{
                      width: `${each.dimensions.width}em`,
                      height: `${each.dimensions.height}em`,
                    }}
                    src={each.images[0]}
                  />
                  <p style={{ margin: "20px 0px" }}>{each.description}</p>
                  <p
                    style={{
                      fontSize: 19,
                      fontWeight: 500,
                      position: "absolute",
                      bottom: -19,
                      backgroundColor: "wheat",
                      zIndex: 100,
                      color: "gray",
                      width: "100%",
                      height: 44,
                      margin: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {each.title}
                  </p>
                </div>
              );
            }
          })}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 60,
          backgroundColor: "blue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Header
      </div>
    </div>
  );
}

export default App;
