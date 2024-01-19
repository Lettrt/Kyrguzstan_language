import React, { FC } from 'react'
import './App.css'
import 'animate.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useAppSelector } from './store/hooks/hooks'
import PreviewsHeader from './components/PreviewsHeader/PreviewsHeader'

const App: FC = () => {

  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

  
  
  
  
  
  
  
  
  
  
  
	const { token } = useAppSelector(state => state.user)
	return (
		<div>
			{
				token ? <PreviewsHeader /> : <Header />
			}
			<Main />
			<Footer />
		</div>
	)
}


export default App
