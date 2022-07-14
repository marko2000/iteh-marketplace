import HeaderNav from "../components/HeaderNav";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";
import { Table, TableCell, TableRow, Card } from "@mui/material";
import { useEffect, useState } from "react";

const {Header, Content} = Layout;

const Cart = () => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cartItems"))
    )
    const [submit, setSubmit] = useState(0)

    const removeItem = productId => {
        let cartItems1 = JSON.parse(localStorage.getItem("cartItems"))
        cartItems1 = cartItems1.filter(product => product.id !== productId)
        localStorage.setItem("cartItems", JSON.stringify(cartItems1))
        setCartItems(cartItems1)
    }

    const handleSubmit = () => {
      localStorage.clear()
      setSubmit(1)
    }

    useEffect(() => {}, [cartItems])

    return (
        <Layout style={{ height: '100%' }}>
      <Header>
        <HeaderNav />
      </Header>
      {submit === 0 ? (
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
              <Button style={{margin: '5%'}} onClick={handleSubmit} size="large">Checkout</Button>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: '3rem' }}>Cart is empty</h1>
            <Link to="/catalog">
              <Button size="large">Back to catalog</Button>
            </Link>
          </>
        )}
      </Content> ) : (
        <Content>
        <Card
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '10%',
            backgroundColor: '#18ce00'
          }}
        >
          <span style={{ marginTop: '5%', fontSize: '2rem', color: '#000' }}>
            Items successfully ordered!
          </span>
          <Link to="/catalog">
            <Button
              size="large"
              color="secondary"
              style={{ margin: '4% 2%', fontSize: '1.1rem' }}
            >
              Back to catalog
            </Button>
          </Link>
        </Card>
      </Content>
      )}
    </Layout>
    )
}

export default Cart;