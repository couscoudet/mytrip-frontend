import {ReactNode} from 'react'
import Header from '../../components/Header'

type Props = {
  children: ReactNode 
}

function MainLayout({children}: Props) {
  return (
    <div className='container'>
        <Header />
        {children}
    </div>
  )
}

export default MainLayout