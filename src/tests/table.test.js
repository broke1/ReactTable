import React from 'react'
import Table from "../components/Table"
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import  store  from '../store/store'

configure({ adapter: new Adapter() })

describe('Тесты для компонента Таблица',()=>{
  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<Table />)  
  })

  it('Проверяем отрисовался ли сам компонент', () => {
    expect(wrapper.length).toEqual(1)
  });
    
  it('Проверяем что таблица сгенерировала случайные данные', () => {
    store.prepareTable()   
    expect(store.dataTableOrigin.length).toEqual(70)
  });
  
});

