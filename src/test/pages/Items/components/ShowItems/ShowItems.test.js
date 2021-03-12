import React from "react";
import { shallow, mount } from "enzyme";
import ShowItems from "../../../../../pages/Items/components/ShowItems/ShowItems";
import { act } from "@testing-library/react";
import ItemsServices from "../../../../../services/ItemService/ItemsService";

describe("should show items list with querty", () => {
  const mockProperties = {
    location: {
      hash: "",
      key: "6ti0yy",
      pathname: "/items",
      search: "?search=futbol",
    },
    push: jest.fn()
  };

  const mockItems = [{
    id: "MLA863083993",
    title: "Peluche Chimuelo / Furia Luminosa 30 Cm Hermosos",
    price: {
      currency: "ARS",
      amount: 2190,
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_843845-MLA42260331923_062020-I.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 25,
    description:
      "LEER PRECIO X CADA UNO \n\nHermoso chimuelo - furia luminosa de entrenando a tu dragón 30 cm hermosos \nPRECIO X CADA UNO\n-Entregamos a una cuadra de SAN JUAN Y BOEDO\n\n-HACEMOS ENVIOS en caba (Se realiza por motomensajería, si realiza la compra antes de las 12 m de lunes a viernes en días hábiles la entrega se realiza en el día, si realiza la compra después de las 12 am la entrega se realiza el primer día hábil luego de realizada la compra, si necesita que realicemos la entrega en una franja horaria al finalizar la compra escríbanos su preferencia por mensajería de Mercadolibre para tenerlo en cuenta.\n\n-Servicio de Mensajería en CABA , consulte el costo, los días de lluvia el servicio tiene un recargo del 50%\n\n-ENVIOS A TODO EL PAIS (Realizamos envíos hasta su domicilio dentro de la República Argentina por el servicio de MercadoEnvíos. El valor del mismo lo obtendrá ingresando su código postal en el calculador.\n\n-SU PREGUNTA NO MOLESTA",
  }];

  const mockCategories = ['peluches'];

  test("should component with item.free_shipping true", () => {
    const wrapper = shallow(<ShowItems history={mockProperties} dataItems={mockItems}/>);
    wrapper.find('.card-items').simulate('click')
    expect(wrapper).toMatchSnapshot()
  });

  test("should component with item.free_shipping false", () => {
    mockItems[0].free_shipping = false;
    const wrapper = shallow(<ShowItems history={mockProperties} dataItems={mockItems}/>);
    wrapper.find('.card-items').simulate('click')
    expect(wrapper).toMatchSnapshot()
  });

  test("should do useEffect with service ItemsServices result", async () => {
    await act(async () => {
      jest.spyOn(ItemsServices, 'fetchAllItemsFiltered').mockResolvedValue({ items: mockItems, categories: mockCategories });

      const wrapper = mount(<ShowItems history={mockProperties} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  test("should useEffect with service ItemsServices error", async () => {
    await act(async () => {
      jest.spyOn(ItemsServices, 'fetchAllItemsFiltered').mockResolvedValue(undefined);
      const wrapper = mount(<ShowItems history={mockProperties} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  test("should useEffect with service and mockProperties.location.search empty", async () => {
    await act(async () => {
      jest.spyOn(ItemsServices, 'fetchAllItemsFiltered').mockResolvedValue(undefined);
      mockProperties.location.search = '';
      const wrapper = mount(<ShowItems history={mockProperties} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

});