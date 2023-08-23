import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
function Cart() {
  let shoes = useSelector((state) => {
    return state.user;
  });
  return (
    <>
      {shoes.map((shoe) => {
        return (
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>{shoe.name}</th>
                <th>{shoe.count}</th>
                <th>변경하기</th>
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
