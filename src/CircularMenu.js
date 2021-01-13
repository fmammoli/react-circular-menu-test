import "./App.css";
import React, { useState, useEffect } from "react";

function SubMenuItem({
  id,
  position,
  title,
  rotation,
  move,
  rootIsActive,
  parentIsActive,
}) {
  function handleClick(e) {
    e.preventDefault();
    console.log(title, " click");
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
              <div className="menu-item-label sub-menu-item-label">{title}</div>
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
  setActive,
  hasSubItems,
  children,
}) {
  const [isRootActive, setIsRootActive] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    console.log(title, " clicked");
    //setIsRootActive((v) => !v);
    if (hasSubItems) {
      setActive((v) => !v);
    }
  }

  return (
    <div
      className="grid-container menu-item"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className="center-grid circular-item"
        style={isActive ? { transform: `translate(${move}px,0px)` } : null}
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
            {title}
          </div>
        </div>
      </div>
      <div className="center-grid">
        <div
          className="line"
          style={isActive ? { transform: `scaleX(${move / 100})` } : null}
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
        <div className="ball background-container">
          <p className="menu-item-label">{props.title}</p>
        </div>
      </div>
    </div>
  );
}

function CircularMenu(props) {
  function handleClick(event) {
    event.preventDefault();
    console.log("clicked");
    props.setRootItem();
  }

  console.log(props.children);

  let state = {
    actives: [],
  };

  return (
    <nav className="menu-nav float-animation">
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

export { CircularMenu, CircularMenuItem, CircularMenuRootItem, SubMenuItem };
