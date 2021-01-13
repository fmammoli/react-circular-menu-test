import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  CircularMenu,
  CircularMenuItem,
  CircularMenuRootItem,
  SubMenuItem,
} from "./CircularMenu";
function App() {
  const [rootItem, setRootItem] = useState(false);

  const [subMenuRoot, setSubMenuRoot] = useState(false);
  const itemData = {
    rotation: 20,
    move: 150,
  };

  const [subMenuThreeRoot, setSubMenuThreeRoot] = useState(false);
  const itemThreeData = {
    rotation: 180,
    move: 200,
  };

  useEffect(() => {
    console.log(subMenuThreeRoot);
  }, [subMenuThreeRoot]);

  function handleRootClick() {
    console.log("sub-menu", subMenuRoot);
    console.log("root-menu", rootItem);

    if (subMenuThreeRoot) {
      setSubMenuThreeRoot((v) => !v);
    }
    if (subMenuRoot) {
      setSubMenuRoot((v) => !v);
    }
    if (subMenuRoot || subMenuThreeRoot) {
      setTimeout(() => {
        setRootItem((v) => !v);
      }, 800);
    } else {
      setRootItem((v) => !v);
    }
  }

  return (
    <div style={{ height: "100%" }}>
      <header className="title">
        <h1>Circular Menu Test</h1>
      </header>
      <CircularMenu setRootItem={handleRootClick}>
        <SubMenuItem
          isSubItem
          position={itemData}
          id="one-three"
          title="One-three"
          rotation={0}
          move={itemData.move}
          rootIsActive={rootItem}
          parentIsActive={subMenuRoot}
        ></SubMenuItem>
        <SubMenuItem
          isSubItem
          position={itemData}
          id="one-two"
          title="One-two"
          rotation={90}
          move={itemData.move}
          rootIsActive={rootItem}
          parentIsActive={subMenuRoot}
        ></SubMenuItem>
        <SubMenuItem
          isSubItem
          position={itemData}
          id="one-one"
          title="One-one"
          rotation={270}
          move={itemData.move}
          rootIsActive={rootItem}
          parentIsActive={subMenuRoot}
        ></SubMenuItem>
        <CircularMenuItem
          hasSubItems
          id="one"
          title="One"
          rotation={itemData.rotation}
          move={itemData.move}
          isActive={rootItem}
          setActive={setSubMenuRoot}
        ></CircularMenuItem>

        <CircularMenuItem
          id="two"
          title="Two"
          rotation={90}
          move={itemData.move}
          isActive={rootItem}
        ></CircularMenuItem>

        <SubMenuItem
          isSubItem
          position={itemThreeData}
          id="three-one"
          title="Three-one"
          rotation={40}
          move={itemThreeData.move - 50}
          rootIsActive={rootItem}
          parentIsActive={subMenuThreeRoot}
        ></SubMenuItem>

        <SubMenuItem
          isSubItem
          position={itemThreeData}
          id="three-two"
          title="Three-two"
          rotation={350}
          move={itemThreeData.move - 50}
          rootIsActive={rootItem}
          parentIsActive={subMenuThreeRoot}
        ></SubMenuItem>

        <CircularMenuItem
          hasSubItems
          id="three"
          title="Three"
          rotation={180}
          move={itemThreeData.move}
          isActive={rootItem}
          setActive={setSubMenuThreeRoot}
        ></CircularMenuItem>

        <CircularMenuItem
          id="four"
          title="Four"
          rotation={270}
          move={itemData.move}
          isActive={rootItem}
        ></CircularMenuItem>
      </CircularMenu>
    </div>
  );
}

export default App;
