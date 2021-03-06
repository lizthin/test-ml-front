import React from "react";
import { shallow, mount } from "enzyme";
import ShowItems from "../../../../../pages/Items/components/ShowItems/ShowItems";

describe("should show items list whit querty", () => {
  const mockProperties = {
    location: {
      hash: "",
      key: "6ti0yy",
      pathname: "/items",
      search: "?search=futbol",
    },
  };

  let wrapper = shallow(<ShowItems history={mockProperties} />);
  beforeEach(() => {
    wrapper = shallow(<ShowItems history={mockProperties} />);
  });
  test("should create list items", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should useEffect", () => {
    const wrapper = mount(<ShowItems history={mockProperties} />);  
     expect(wrapper).toMatchSnapshot()
    });
    test('should call handleRedirectUrlDetail', () => {
      // wrapper.find('.card-items').simulate('click')(1)
      
    })
    
});
