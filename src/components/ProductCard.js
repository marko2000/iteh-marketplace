import PropTypes from 'prop-types'
import { Card, Button } from 'antd'
import { ShoppingCart } from '@mui/icons-material'

const { Meta } = Card

const ProductCard = ({ product, onAdd }) => {
  return (
    <Card>
      <div style={{ cursor: 'pointer' }}>
        <img
            src={product.image}
            alt={`product${product.id}`}
            style={{ height: '200px' }}
        />
        <Meta title={product.name} style={{ margin: '5%' }}></Meta>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        startIcon={<ShoppingCart />}
        onClick={() => onAdd(product)}
      >
        Add to cart
      </Button>
    </Card>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string
}

export default ProductCard
