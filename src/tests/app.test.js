import React from 'react'
import App from "../components/App"
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'


configure({ adapter: new Adapter() })

describe('Тесты для компонента App',()=>{
  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<App />)  
  })

  it('Проверяем отрисовался ли сам компонент', () => {
    expect(wrapper.length).toEqual(1)
  });
    
  it('Проверяем что он содержит блок с классом title-app и чему равно его содержимое', () => {
    expect(wrapper.find('.title-app').text()).toEqual('Таблица')
  });
  
});

