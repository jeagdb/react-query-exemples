import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Panda from '../../src/components/pages/Panda'
import Infinite from '../../src/components/pages/Infinite'
import ListPandas from '../../src/components/pages/ListPandas'
import Pagination from '../../src/components/pages/Pagination'

const Page = styled.div`
`

const AppRouter = () => (
  <Router>
    <Page>
      <Routes>
        <Route path='/' element={<ListPandas />} />
        <Route path='/:id' element={<Panda />} />
        <Route path='/infinite' element={<Infinite />} />
        <Route path='/pagination' element={<Pagination />} />
      </Routes>
    </Page>
  </Router>
)

export default AppRouter
