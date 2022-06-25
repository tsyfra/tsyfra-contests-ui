import { FC, ReactNode } from 'react'
import Meta from '../components/Meta'
import Header from '../components/Header'

interface Props {
  children: ReactNode;
}


const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Meta />
      <Header />
      {children}
    </div>
  )
}

export default Layout
