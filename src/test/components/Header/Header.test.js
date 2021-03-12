import React from "react";
import { mount } from "enzyme";
import Header from "../../../components/Header/Header";

describe("should create header whit input", () => {

  const mockProperties = {
    location: {
      hash: "",
      key: "6ti0yy",
      pathname: "/items",
      search: "",
    },
    push: jest.fn()
  };

  test("should create header", () => {
    const wrapper = mount(<Header parentHistory={mockProperties} />);
    expect(wrapper).toMatchSnapshot()
  });

  test("should create header with serach parameter queryString", () => {
    mockProperties.location.search = "?search=furtbol";
    const wrapper = mount(<Header parentHistory={mockProperties} />);
    expect(wrapper).toMatchSnapshot()
  });

  test('should handleSubmitSearch and param search', () => {
    mockProperties.location.search = "?search=trajes";
    const wrapper = mount(<Header parentHistory={mockProperties} />);
    wrapper.find('form').simulate('submit', { preventDefault() { } })
    expect(wrapper).toMatchSnapshot();
  })

  test('should submit with param search empty', () => {
    mockProperties.location.search = "?search=";
    const wrapper = mount(<Header parentHistory={mockProperties} />);
    wrapper.find('form').simulate('submit', { preventDefault() { } })
    expect(wrapper).toMatchSnapshot();
  })

  test('should input set param', () => {
    mockProperties.location.search = "?search=arbol";
    const wrapper = mount(<Header parentHistory={mockProperties} />);
    wrapper.find('.nav-input').simulate('change');
    expect(wrapper).toMatchSnapshot();
  })

});