import React from 'react'
import { Spin } from 'antd'
import PropTypes from 'prop-types'
import { LoadingOutlined } from '@ant-design/icons'

const Icon = <LoadingOutlined style={{ fontSize: 35 }} spin />

const Loading = ({ align, cover }) => {
  return (
    <div
      data-testid="loading-spinner"
      className={`loading text-${align} cover-${cover}`}
    >
      <Spin indicator={Icon} />
    </div>
  )
}

Loading.propTypes = {
  size: PropTypes.string,
  cover: PropTypes.string
}

Loading.defaultProps = {
  align: 'center',
  cover: 'inline'
}

export default Loading
