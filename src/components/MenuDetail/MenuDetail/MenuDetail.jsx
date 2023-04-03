import React, { useState } from "react";
import "./MenuDetail.scss";
import test from "../image/test.jpg";
import minus from "../image/minus-sign.png";
import plus from "../image/plus.png";
import { Menuslidetab } from "../tabs/menuslide-tab/menuslide_tab";
import Feature from "../tabs/feature";
import { myarr } from "../tabs/index.js";
// import store from "../store/store";
// import { useSelector, useDispatch } from "react-redux";

export const MenuDetail = () => {
  // const count = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  // const handleIncrement = () => {
  //   dispatch({ type: "INCREMENT" });
  // };

  // const handleDecrement = () => {
  //   dispatch({ type: "DECREMENT" });
  // };
  const [list, setList] = useState(false);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(20);
  const [total, setTotal] = useState(price);
  const increase = (count) => {
    setCount(count);
    setPrice(count * 20);
  };
  const decrease = (count) => {
    if (count > 0) {
      setCount(count);
      setPrice(count * 20);
    } else {
      setCount(0);
      setPrice(0);
    }
  };
  const updateprice = (total) => {
    setTotal((pretotal) => ({
      ...pretotal,
      [total]: pretotal[total] + 1,
    }));
  };
  return (
    // <div className="body">
    <div>
      <div className="mybody">
        <div className="pagetitle">Detail page</div>
        <div className="back">
          <span>&#8610;</span> <div>Back</div>
        </div>
        <div className="detail_page">
          <div className="left">
            <div className="image">
              <img src={test} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="info">
              <div className="title">My Title</div>
              <hr />
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  quasi esse ab commodi nisi, at ipsum aliquam eveniet. Qui
                  autem deleniti corrupti optio repudiandae aspernatur ab fugit
                  consectetur quis possimus.
                </p>
              </div>
              <hr />
              {list && (
                <div className="additional_list">
                  <div className="list_title">list</div>
                  <div className="list"></div>
                </div>
              )}
              <div className="detailbill">
                <div className="editquantity">
                  <button
                    onClick={() => {
                      decrease(count - 1);
                    }}
                    // onClick={handleIncrement}
                  >
                    <img src={minus} alt="" />
                  </button>
                  <h3>{count}</h3>
                  <button
                    // onClick={handleDecrement}
                    onClick={() => {
                      increase(count + 1);
                    }}
                  >
                    <img src={plus} alt="" />
                  </button>
                </div>
                <div className="price">Price : {price}$</div>
              </div>
              <div>Total: {total}$</div>
            </div>
          </div>
        </div>
        <Menuslidetab />
        <Feature price={price} onChange={updateprice} />
        <div className="fragment">
          {myarr.map((arr) => (
            <div className={arr.key}>
              <div>{arr.key}</div>
              <div>{arr.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
