import HeaderNav from '../components/HeaderNav';
import ProductCard from '../components/ProductCard';
import { Layout, Row, Col, Select } from 'antd';
import { useState } from 'react';
import data from '../data.json'

const {Content, Header} = Layout;
const { Option } = Select;

const Catalog = () => {
    const [itemsCount, setItemsCount] = useState(
        JSON.parse(localStorage.getItem('cartItems')) === null
        ? 0
        : JSON.parse(localStorage.getItem('cartItems')).length
    );
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('all-categories');

    let cartItems = []
    const onAdd = product => {
        if(localStorage.getItem('cartItems')) {
            cartItems = JSON.parse(localStorage.getItem('cartItems'))
        }
        cartItems.push(product)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        setItemsCount(JSON.parse(localStorage.getItem('cartItems')).length)
    }

    const handleChangeCategory = e => {
        switch (e) {
            case 'all-categories':
                setSort('All categories')
                setFilter(e)
                console.log(e)
                break
            case 'laptops':
                setSort('Laptops')
                setFilter(e)
                break
            case 'phones':
                setSort('Phones')
                setFilter(e)
                break
            default:
                setSort('All categories')
                setFilter(e)
        }
    }

    return (
        <Layout>
          <Header>
            <HeaderNav />
          </Header>
          <Layout style={{ height: '100%' }}>
            <Layout>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  margin: '1% 0'
                }}
              >
                <Select
                  size="medium"
                  placeholder="Category"
                  defaultValue="all-categories"
                  value={sort}
                  style={{
                    width: '200px',
                    fontSize: '1rem',
                    margin: '1%'
                  }}
                  onChange={handleChangeCategory}
                >
                  <Option value="all-categories">All categories</Option>
                  <Option value="laptops">Laptops</Option>
                  <Option value="phones">Phones</Option>
                </Select>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  Cart items: {itemsCount}
                </span>
              </div>
              <Content
                style={{
                  padding: '16px',
                  paddingTop: '0',
                  height: '100%',
                  display: 'flex',
                  margin: 'auto',
                  flexWrap: 'wrap'
                }}
              >
                <Row
                  gutter={[16, 16]}
                  style={{
                    display: 'flex',
                    margin: 'auto',
                    flexWrap: 'wrap'
                  }}
                >
                  {data ? (
                    data
                      .filter(product =>
                        filter !== 'all-categories'
                          ? product.category === filter
                          : true
                      )
                      .map(product => (
                        <Col span={8}>
                          <ProductCard
                            product={product}
                            onAdd={onAdd}
                          />
                        </Col>
                      ))
                  ) : (
                    <span>No products</span>
                  )}
                </Row>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      )
}

export default Catalog;