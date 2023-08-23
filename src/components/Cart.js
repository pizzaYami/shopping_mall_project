import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./../store.js";
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
                <th>{user}</th>
                <th>{cart.name}</th>
                <th>{cart.count}</th>
                <th>변경하기</th>
                <button
                  onClick={() => {
                    dispatch(changeName());
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
