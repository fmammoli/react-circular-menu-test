import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import {
  CircularMenu,
  CircularMenuItem,
  SubMenuItem,
  SubSubMenuItem,
} from "./CircularMenu";

function CustomMenu() {
  const defaultMove = 120;
  let menu = useMemo(() => {
    // let itemOneOneSubItems = [];

    // let itemOneSubItems = [];

    let firstMenu = {
      root: { id: "root" },
      items: [
        {
          id: "one",
          title: "Pdf",
          rotation: 0,
          move: defaultMove,
          hasSubItems: true,
          rootIsActive: false, //To set as the state of the Root Item
          setActive: false, //A setter to its own state
          isActive: false, //Its own state
          link: "/pdf",
          items: [
            {
              id: "one-one",
              title: "One One",
              rotation: 0,
              move: defaultMove,
              isSubItem: true,
              hasSubItems: true,
              hasSubSubItems: true,
              rootIsActive: false, //To set the state of the rootItem
              position: { rotation: false, move: false }, // To be set as the rotation and move of the parent
              setActive: false, //The setter of its own state
              isActive: false, //Its own state
              parentIsActive: false, // To be set as the state of the parent, in this case the Item One.
              items: [
                {
                  id: "one-one-one",
                  title: "One one one",
                  rotation: 0,
                  move: defaultMove,
                  rootIsActive: false, //To be set as the state of the Root Item
                  firstPosition: { rotation: false, move: false }, //To be set as the same as the grandparent rotation and move
                  middleIsActive: false, //To be set as the Grandparent State
                  secondPosition: { rotation: false, move: false }, //To be set as the rotation and
                  parentIsActive: false, //To be set as the State of the Parent Item, in this case item One-one
                  link: "/pdf",
                },
              ],
            },
            {
              id: "one-two",
              title: "One two",
              rotation: 90,
              move: defaultMove,
              isSubItem: true,
              hasSubItems: false,
              hasSubSubItems: false,
              rootIsActive: false, //To set the state of the rootItem
              position: { rotation: false, move: false }, // To be set as the rotation and move of the parent
              setActive: false, //The setter of its own state
              isActive: false, //Its own state
              parentIsActive: false, // To be set as the state of the parent, in this case the Item One.
            },
            {
              id: "one-three",
              title: "One three",
              rotation: 180,
              move: defaultMove,
              isSubItem: true,
              hasSubItems: false,
              hasSubSubItems: false,
              rootIsActive: false, //To set the state of the rootItem
              position: { rotation: false, move: false }, // To be set as the rotation and move of the parent
              setActive: false, //The setter of its own state
              isActive: false, //Its own state
              parentIsActive: false, // To be set as the state of the parent, in this case the Item One.
            },
            {
              id: "one-four",
              title: "One four",
              rotation: 270,
              move: defaultMove,
              isSubItem: true,
              hasSubItems: false,
              hasSubSubItems: false,
              rootIsActive: false, //To set the state of the rootItem
              position: { rotation: false, move: false }, // To be set as the rotation and move of the parent
              setActive: false, //The setter of its own state
              isActive: false, //Its own state
              parentIsActive: false, // To be set as the state of the parent, in this case the Item One.
            },
          ],
        },
        {
          id: "two",
          title: "Two",
          rotation: 90,
          move: defaultMove,
          hasSubItems: false,
          rootIsActive: false,
          setActive: false,
          isActive: false,
        },
        {
          id: "three",
          title: "Three",
          rotation: 180,
          move: defaultMove,
          hasSubItems: true,
          rootIsActive: false,
          setActive: false,
          isActive: false,
          items: [
            {
              id: "three-one",
              title: "Three One",
              rotation: -45,
              move: defaultMove,
              isSubItem: true,
              hasSubItems: false,
              hasSubSubItems: false,
              rootIsActive: false, //To set the state of the rootItem
              position: { rotation: false, move: false }, // To be set as the rotation and move of the parent
              setActive: false, //The setter of its own state
              isActive: false, //Its own state
              parentIsActive: false, // To be set as the state of the parent, in this case the Item One.
            },
            {
              id: "three-two",
              title: "Three two",
              rotation: 45,
              move: defaultMove,
              isSubItem: true,
              hasSubItems: true,
              hasSubSubItems: false,
              rootIsActive: false, //To set the state of the rootItem
              position: { rotation: false, move: false }, // To be set as the rotation and move of the parent
              setActive: false, //The setter of its own state
              isActive: false, //Its own state
              parentIsActive: false, // To be set as the state of the parent, in this case the Item One.
              items: [
                {
                  id: "three-two-one",
                  title: "Three two one",
                  rotation: 0,
                  move: defaultMove,
                  rootIsActive: false, //To be set as the state of the Root Item
                  firstPosition: { rotation: false, move: false }, //To be set as the same as the grandparent rotation and move
                  middleIsActive: false, //To be set as the Grandparent State
                  secondPosition: { rotation: false, move: false }, //To be set as the rotation and
                  parentIsActive: false, //To be set as the State of the Parent Item, in this case item One-one
                },
                {
                  id: "three-two-two",
                  title: "three two two",
                  rotation: 270,
                  move: defaultMove,
                  rootIsActive: false, //To be set as the state of the Root Item
                  firstPosition: { rotation: false, move: false }, //To be set as the same as the grandparent rotation and move
                  middleIsActive: false, //To be set as the Grandparent State
                  secondPosition: { rotation: false, move: false }, //To be set as the rotation and
                  parentIsActive: false, //To be set as the State of the Parent Item, in this case item One-one
                },
                {
                  id: "three-two-three",
                  title: "three two three",
                  rotation: 90,
                  move: defaultMove,
                  rootIsActive: false, //To be set as the state of the Root Item
                  firstPosition: { rotation: false, move: false }, //To be set as the same as the grandparent rotation and move
                  middleIsActive: false, //To be set as the Grandparent State
                  secondPosition: { rotation: false, move: false }, //To be set as the rotation and
                  parentIsActive: false, //To be set as the State of the Parent Item, in this case item One-one
                },
              ],
            },
          ],
        },
        {
          id: "four",
          title: "Four",
          rotation: 270,
          move: defaultMove,
          hasSubItems: true,
          rootIsActive: false,
          setActive: false,
          isActive: false,
          items: [
            {
              id: "four-one",
              title: "Four one",
              rotation: 45,
              move: defaultMove,
              isSubItem: true,
              hasSubItems: true,
              hasSubSubItems: false,
              rootIsActive: false, //To set the state of the rootItem
              position: { rotation: false, move: false }, // To be set as the rotation and move of the parent
              setActive: false, //The setter of its own state
              isActive: false, //Its own state
              parentIsActive: false, // To be set as the state of the parent, in this case the Item One.
              items: [
                {
                  id: "four-one-one",
                  title: "four one one",
                  rotation: 0,
                  move: defaultMove,
                  rootIsActive: false, //To be set as the state of the Root Item
                  firstPosition: { rotation: false, move: false }, //To be set as the same as the grandparent rotation and move
                  middleIsActive: false, //To be set as the Grandparent State
                  secondPosition: { rotation: false, move: false }, //To be set as the rotation and
                  parentIsActive: false, //To be set as the State of the Parent Item, in this case item One-one
                },
                {
                  id: "four-one-two",
                  title: "four one one",
                  rotation: 45,
                  move: defaultMove,
                  rootIsActive: false, //To be set as the state of the Root Item
                  firstPosition: { rotation: false, move: false }, //To be set as the same as the grandparent rotation and move
                  middleIsActive: false, //To be set as the Grandparent State
                  secondPosition: { rotation: false, move: false }, //To be set as the rotation and
                  parentIsActive: false, //To be set as the State of the Parent Item, in this case item One-one
                },
              ],
            },
          ],
        },
      ],
    };
    return firstMenu;
  }, []);
  //Creating the data structure

  let menuState = useMemo(() => {
    let menuIds = [];
    menu.items.forEach((item) => {
      menuIds.push(item.id);
      if (item.hasSubItems) {
        item.items.forEach((subItem) => {
          menuIds.push(subItem.id);
          if (subItem.hasSubItems) {
            subItem.items.forEach((subSubItem) => {
              menuIds.push(subSubItem.id);
            });
          }
        });
      }
    });
    let menuState = {};
    menuIds.forEach((item) => {
      menuState[item] = [];
    });
    return menuState;
  }, [menu]);
  //Creating the States for each item
  //Root State
  const [rootItemState, setRooItemState] = useState(false);

  //First Level Menu Items
  [menuState["one"][0], menuState["one"][1]] = useState(false);
  [menuState["two"][0], menuState["two"][1]] = useState(false);
  [menuState["three"][0], menuState["three"][1]] = useState(false);
  [menuState["four"][0], menuState["four"][1]] = useState(false);

  //Second Level Menu Items
  //Item One sub Items
  [menuState["one-one"][0], menuState["one-one"][1]] = useState(false);
  [menuState["one-two"][0], menuState["one-two"][1]] = useState(false);
  [menuState["one-three"][0], menuState["one-three"][1]] = useState(false);
  [menuState["one-four"][0], menuState["one-four"][1]] = useState(false);

  //Item Two sub Items (in case it is needed)
  //[menuState["two-one"][0], menuState["two-one"][1]] = useState(false);

  //Item Three sub Items (in case it is needed)
  [menuState["three-one"][0], menuState["three-one"][1]] = useState(false);
  [menuState["three-two"][0], menuState["three-two"][1]] = useState(false);

  //Item Four sub Items (in case it is needed)
  [menuState["four-one"][0], menuState["four-one"][1]] = useState(false);
  //[menuState["four-two"][0], menuState["four-two"][1]] = useState(false);
  //[menuState["four-three"][0], menuState["four-three"][1]] = useState(false);
  //[menuState["four-four"][0], menuState["four-four"][1]] = useState(false);

  //Third Level Items
  //Item One-One sub Items (I dont think I need the third level State)
  [menuState["one-one-one"][0], menuState["one-one-one"][1]] = useState(false);
  //[menuState["one-one-two"][0], menuState["one-one-two"][1]] = useState(false);

  [menuState["three-two-one"][0], menuState["three-two-one"][1]] = useState(
    false
  );
  [menuState["three-two-two"][0], menuState["three-two-two"][1]] = useState(
    false
  );
  [menuState["three-two-three"][0], menuState["three-two-three"][1]] = useState(
    false
  );

  [menuState["four-one-one"][0], menuState["four-one-one"][1]] = useState(
    false
  );
  [menuState["four-one-two"][0], menuState["four-one-two"][1]] = useState(
    false
  );

  function calculateMenu(menu) {
    //console.log("Calculating menu and assigning state variables");
    menu.items.forEach((item) => {
      //Setting the root state
      item.rootIsActive = rootItemState;

      //Setting particular state
      item.isActive = menuState[item.id][0];
      item.setActive = menuState[item.id][1];
      if (item.hasSubItems) {
        item.items.forEach((subItem) => {
          subItem.parentId = item.id;
          //Setting root state
          subItem.rootIsActive = rootItemState;

          //Set particular state
          subItem.parentIsActive = item.isActive;
          subItem.isActive = menuState[subItem.id][0];
          subItem.setActive = menuState[subItem.id][1];
          //Setting positions
          subItem.position.rotation = item.rotation;
          subItem.position.move = item.move;
          if (subItem.hasSubItems) {
            subItem.items.forEach((subSubItem) => {
              subSubItem.parentId = subItem.id;
              //Setting root state
              subSubItem.rootIsActive = rootItemState;

              //Setting relation to parent state
              subSubItem.middleIsActive = item.isActive;
              subSubItem.parentIsActive = subItem.isActive;
              //Setting positioning
              subSubItem.firstPosition = subItem.position;
              subSubItem.secondPosition.rotation = subItem.rotation;
              subSubItem.secondPosition.move = subItem.move;
            });
          }
        });
      }
    });
    return menu;
  }

  const calculatedMenu = calculateMenu(menu);

  //Make a flat list from the menu object

  function makeFlatMenus(menu) {
    let flatFirstMenu = [];
    let flatSecondMenu = [];
    let flatThirdMenu = [];
    let flatMenu = [];
    menu.items.forEach((a) => {
      flatFirstMenu.push(a);
      if (a.hasSubItems) {
        a.items.forEach((b) => {
          flatSecondMenu.push(b);
          if (b.hasSubItems) {
            b.items.forEach((c) => {
              flatThirdMenu.push(c);
              flatMenu.push(c);
            });
          }
          flatMenu.push(b);
        });
      }
      flatMenu.push(a);
    });
    return {
      flatMenu: flatMenu,
      firstMenu: flatFirstMenu,
      secondMenu: flatSecondMenu,
      thirdMenu: flatThirdMenu,
    };
  }
  const flatMenus = useMemo(() => makeFlatMenus(calculatedMenu), [
    calculatedMenu,
  ]);

  //[openedFirstMenus, setOpenedFirstMenus] = useState([]);
  const [openedSecondMenus, setOpenedSecondMenus] = useState([]);
  const [openedThirdMenus, setOpenedThirdMenus] = useState([]);

  function handleRootClick() {
    console.log("root-click");
    if (rootItemState === false) {
      setRooItemState(true);
    } else {
      if (openedSecondMenus.length > 0 && openedThirdMenus.length > 0) {
        setOpenedThirdMenus([]);
        setTimeout(() => {
          setOpenedSecondMenus([]);
          setTimeout(() => {
            setRooItemState(false);
          }, 700);
        }, 700);
      } else {
        if (openedSecondMenus.length > 0) {
          setOpenedSecondMenus([]);
          setTimeout(() => {
            setRooItemState(false);
          }, 700);
        } else {
          setRooItemState(false);
        }
      }
    }
  }

  return (
    <div style={{ height: "100%" }}>
      <header className="title">
        <h1>Circular Menu Test</h1>
      </header>
      <CircularMenu setRootItem={handleRootClick} menuData={menu}>
        {flatMenus.thirdMenu.map((item) => (
          <SubSubMenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            rotation={item.rotation}
            move={item.move}
            rootIsActive={item.rootIsActive}
            firstPosition={item.firstPosition}
            middleIsActive={item.middleIsActive}
            parentIsActive={item.parentIsActive}
            secondPosition={item.secondPosition}
          >
            <Link to={item.link}>{item.title}</Link>
          </SubSubMenuItem>
        ))}
        {flatMenus.secondMenu.map((item) => (
          <SubMenuItem
            key={item.id}
            isSubItem={true}
            hasSubItems={item.hasSubItems}
            position={item.position}
            id={item.id}
            title={item.title}
            rotation={item.rotation}
            move={item.move}
            rootIsActive={item.rootIsActive}
            parentIsActive={item.parentIsActive}
            parentId={item.parentId}
            isActive={item.isActive}
            setActive={item.setActive}
            setOpenedThirdMenus={setOpenedThirdMenus}
            openedThirdMenus={openedThirdMenus}
          >
            <Link to={item.link}>{item.title}</Link>
          </SubMenuItem>
        ))}
        {flatMenus.firstMenu.map((item) => (
          <CircularMenuItem
            key={item.id}
            hasSubItems={item.hasSubItems}
            id={item.id}
            title={item.title}
            rotation={item.rotation}
            move={item.move}
            rootIsActive={item.rootIsActive}
            isActive={item.isActive}
            setActive={item.setActive}
            setOpenedSecondMenus={setOpenedSecondMenus}
            openedSecondMenus={openedSecondMenus}
          >
            <Link to={item.link}>{item.title}</Link>
          </CircularMenuItem>
        ))}
      </CircularMenu>
    </div>
  );
}

export default CustomMenu;
