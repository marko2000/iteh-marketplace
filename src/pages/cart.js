import HeaderNav from "../components/HeaderNav";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";
import { Table, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

const {Header, Content} = Layout;

const Cart = () => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cartItems"))
    )

    const removeItem = productId => {
        let cartItems1 = JSON.parse(localStorage.getItem("cartItems"))
        cartItems1 = cartItems1.filter(product => product.id !== productId)
        localStorage.setItem("cartItems", JSON.stringify(cartItems1))
        setCartItems(cartItems1)
    }

    useEffect(() => {}, [cartItems])

    return (
        <Layout style={{ height: '100%' }}>
      <Header>
        <HeaderNav />
      </Header>
      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {cartItems && cartItems.length !== 0 ? (
          <>
            <Table
              columns={[
                {
                  cellContent: 'SKU',
                  id: 'productId'
                },
                {
                  cellContent: 'Name',
                  id: 'productName'
                },
                {
                  cellContent: 'Category',
                  id: 'category'
                },
                {
                  cellContent: 'Remove',
                  id: 'remove'
                }
              ]}
              style={{
                width: '50%'
              }}
            >
              {cartItems.map(product => (
                <TableRow>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Button
                      size="medium"
                      style={{ backgroundColor: '#ff0000' }}
                      onClick={() => removeItem(product.id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: '3rem' }}>Cart is empty</h1>
            <Link to="/catalog">
              <Button size="large">Back to catalog</Button>
            </Link>
          </>
        )}
      </Content>
    </Layout>
    )
}

export default Cart;