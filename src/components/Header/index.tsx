import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart, Links, LinkItem } from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Max Template Logo" />
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={cart} alt="Carrinho de compras" />
    </LinkCart>
  </HeaderBar>
)

export default Header
