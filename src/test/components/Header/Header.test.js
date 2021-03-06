import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../../../components/Header/Header";
import { act } from "react-dom/test-utils";

describe("should create header whit input", () => {
  
  const mockProperties = {
    location: {
      hash: "",
      key: "6ti0yy",
      pathname: "/items",
      search: "?search=futbol",
    },
  };

  test("should create header", () => {
    const wrapper = shallow(<Header parentHistory={mockProperties} />);
    expect(wrapper).toMatchSnapshot()
  });

  // test('should useEffect', () => {
  //   const event = { 
  //     defaultPrevented: true,
  //     preventDefault: () => {} };
  //   jest.spyOn(event, 'preventDefault');
    
  //   const wrapper = mount(<Header parentHistory={mockProperties} />);
  //     wrapper.find('.nav-form').simulate('submit')(event);

  //   expect(wrapper).toMatchSnapshot();
    
  // })
  
});
