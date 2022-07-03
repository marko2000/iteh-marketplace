import { Menu } from "antd";
import { Link } from "react-router-dom";
// import Logo from '../../logo.png'
import Profile from "./Profile";

const HeaderNav = () => {
    return (
        <div className="app-header-wrapper">
            <div className="logo">
                <img src='logo.png' alt="logo" />
            </div>
            <Menu theme="dark" mode="horizontal" style={{ justifyContent: 'right', width: '100%' }}>
                <Menu.Item key="catalog">
                    <Link to="/catalog">Catalog</Link>
                </Menu.Item>
                <Menu.Item key="cart">
                    <Link to="/cart">Cart</Link>
                </Menu.Item>
                <Menu.Item>
                    <Profile />
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default HeaderNav;