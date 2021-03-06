import React from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { shallow } from "enzyme";

describe("should create a breadcrumb whit categories", () => {
  const mockProperties = {
    category:"Ropa y Calzado",
    handleRedirectUrl:jest.fn(),
    index:5,
    lengthCatgories:5,
  };

  test("should create component Breadcrumb", () => {
    const wrapper = shallow(<Breadcrumb properties={mockProperties} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handleRedirectUrl', () => {
    const wrapper = shallow(<Breadcrumb properties={mockProperties} />);
    wrapper.find('.p-categories').at(0).simulate('click');
    const newp = wrapper.find('p').at(0).text();
    expect(newp).toBe('Ropa y Calzado')
    
  })
  
  test('should not create a breadcrumb', () => {
    const mockPropertiesCategory = {
      category:"Ropa y Calzado",
      handleRedirectUrl:jest.fn(),
      index:3,
      lengthCatgories:5,
    };
    const wrapper = shallow(<Breadcrumb properties={mockPropertiesCategory} />);
    expect(wrapper).toMatchSnapshot();

  })
  
});
