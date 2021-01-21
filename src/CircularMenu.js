import React, { useEffect } from "react";
import "./CircularMenu.css";

function SubSubMenuItem({
  id,
  title,
  move,
  rotation,
  rootIsActive,
  firstPosition,
  middleIsActive,
  parentIsActive,
  secondPosition,
  children,
}) {
  function handleClick(e) {
    e.preventDefault();
    console.log(title, " click");
  }

  return (
    <div
      className="menu-item rotation-container"
      style={{ transform: `rotate(${firstPosition.rotation}deg)` }}
    >
      <div
        className="menu-item position-container"
        style={
          rootIsActive
            ? {
                transform: `translateX(${firstPosition.move}px) `,
              }
            : null
        }
      >
        <div
          className="menu-item rotation-container rotation-container2"
          style={
            true
              ? {
                  transform: `rotate(${secondPosition.rotation}deg)`,
                }
              : null
          }
        >
          <div
            className="menu-item position-container position-container2"
            style={
              middleIsActive
                ? {
                    transform: `translateX(${secondPosition.move}px)`,
                  }
                : null
            }
          >
            <div
              className="grid-container menu-item sub-menu-item"
              style={
                true
                  ? {
                      transform: `rotate(${rotation}deg)`,
                    }
                  : null
              }
            >
              <div
                id={`item-${id}`}
                className="center-grid ball tiny-ball circular-item sub-menu-item"
                style={
                  parentIsActive
                    ? { transform: `translate(${move}px,0px)` }
                    : null
                }
                onClick={handleClick}
              >
                <div
                  className="ball tiny-ball background-container sub-sub-item-background"
                  style={{
                    transform: `rotate(-${
                      firstPosition.rotation +
                      secondPosition.rotation +
                      rotation
                    }deg)`,
                  }}
                >
                  <div className="menu-item-label sub-menu-item-label">
                    {children}
                  </div>
                </div>
              </div>
              <div className="center-grid line-rotation-container">
                <div
                  className="line tiny-line"
                  style={
                    parentIsActive
                      ? { transform: `scaleX(${move / 50})` }
                      : null
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubMenuItem({
  id,
  position,
  title,
  rotation,
  move,
  rootIsActive,
  parentIsActive,
  isActive,
  setActive,
  hasSubItems,
  openedThirdMenus,
  setOpenedThirdMenus,
  children,
}) {
  useEffect(() => {
    if (isActive && parentIsActive === false) {
      setActive(false);
    }
  }, [parentIsActive, isActive, setActive]);

  useEffect(() => {
    if (isActive && openedThirdMenus.length === 0) {
      setActive(false);
    }
  }, [openedThirdMenus, isActive, title, setActive]);

  function handleClick(e) {
    e.preventDefault();
    if (hasSubItems) {
      setActive((v) => !v);
      setOpenedThirdMenus((items) => {
        if (items.includes(id)) {
          return items.filter((item) => item !== id);
        }
        return [...items, id];
      });
    }
  }

  return (
    <div
      className="menu-item rotation-container"
      style={{ transform: `rotate(${position.rotation}deg)` }}
    >
      <div
        className="menu-item position-container"
        style={
          rootIsActive
            ? {
                transform: `translateX(${position.move}px) `,
              }
            : null
        }
      >
        <div
          className="grid-container menu-item sub-menu-item"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            id={`item-${id}`}
            className="center-grid ball smaller-ball circular-item sub-menu-item"
            style={
              parentIsActive ? { transform: `translate(${move}px,0px)` } : null
            }
            onClick={handleClick}
          >
            <div
              className="ball smaller-ball background-container sub-item-background"
              style={{
                transform: `rotate(-${position.rotation + rotation}deg)`,
              }}
            >
              <div className="menu-item-label sub-menu-item-label">
                {children}
              </div>
            </div>
          </div>
          <div className="center-grid line-rotation-container">
            <div
              className="line smaller-line"
              style={
                parentIsActive ? { transform: `scaleX(${move / 80})` } : null
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CircularMenuItem({
  title,
  id,
  rotation = 0,
  move = 200,
  isActive,
  rootIsActive,
  setActive,
  hasSubItems,
  hasSubSubItems,
  setOpenedSecondMenus,
  openedSecondMenus,
  link,
  children,
}) {
  useEffect(() => {
    if (!openedSecondMenus.length) {
      setActive(false);
    }
  }, [openedSecondMenus, setActive]);

  function handleClick(event) {
    event.preventDefault();
    console.log(title, " clicked");
    if (hasSubItems) {
      setActive((v) => !v);
      setOpenedSecondMenus((items) => {
        if (items.includes(id)) {
          return items.filter((item) => item !== id);
        }
        return [...items, id];
      });
    }
  }

  return (
    <div
      className="grid-container menu-item"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className="center-grid circular-item"
        style={rootIsActive ? { transform: `translate(${move}px,0px)` } : null}
        onClick={handleClick}
      >
        <div
          id={`item-${id}`}
          className="background-container ball"
          style={{ transform: `rotate(-${rotation}deg)` }}
        >
          <div
            className="menu-item-label"
            // style={{ transform: `rotate(-${rotation}deg)` }}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="center-grid">
        <div
          className="line"
          style={rootIsActive ? { transform: `scaleX(${move / 100})` } : null}
        ></div>
      </div>
    </div>
  );
}

function CircularMenuRootItem(props) {
  return (
    <div className="grid-container menu-item root-item">
      <div
        id="root-item"
        onClick={props.handleClick}
        className="center-grid circular-item"
      >
        <div className="ball background-container root-item-background">
          <p className="menu-item-label">{props.title}</p>
        </div>
      </div>
    </div>
  );
}

function CircularMenu(props) {
  function handleClick(event) {
    event.preventDefault();
    props.setRootItem();
  }

  return (
    <nav className="menu-nav ">
      <div className="menu">
        {props.children}
        <CircularMenuRootItem
          handleClick={handleClick}
          title="Root"
        ></CircularMenuRootItem>
      </div>
    </nav>
  );
}

export {
  CircularMenu,
  CircularMenuItem,
  CircularMenuRootItem,
  SubMenuItem,
  SubSubMenuItem,
};
