// import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increace } from "./../store.js";
function Cart() {
  let dispatch = useDispatch();
  let cart = useSelector((state) => {
    return state.cart;
  });
  let user = useSelector((state) => {
    return state.user;
  });
  return (
    <>
      {cart.map((cart) => {
        return (
          <Table>
            <thead>
              <tr>
                <th>{user.age}</th>
                <th>{cart.name}</th>
                <th>{cart.count}</th>
                <th>변경하기</th>
                <button
                  onClick={() => {
                    dispatch(increace(10));
                  }}
                >
                  버튼임
                </button>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>안녕</td>
                <td>안녕</td>
                <td>안녕</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </>
  );
}

export default Cart;
