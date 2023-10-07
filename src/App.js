import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './app.css'
import {Container} from './componenet/index';
import {Header,Footer } from './Sections/index';
import {Home,Profile} from './pages/index'



const app=() => {
  return (
    <>
       <BrowserRouter >
       <Header />
      <Container>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />

         </Routes>
       </Container>
       <Footer />
       </BrowserRouter>

    </>
  )
}
export default app;
