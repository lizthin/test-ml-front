import React from "react";
import { shallow, mount } from "enzyme";
import ItemsServices from "../../../../../services/ItemService/ItemsService";
import { act } from "@testing-library/react";
import ShowDetail from "../../../../../pages/Items/components/ShowDetail/ShowDetail";

describe("should show details items", () => {
  const mockProperties = {
    location: {
      pathname: "/items/MLA869265149",
      search: "",
      hash: "",
      state: undefined,
      key: "cc6sp1",
      data: {
        categories: [],
      },
    },
  };
  const mockItemsDetail = {
    author: {
      name: "Lizeth Natalia",
      lastname: "Nuñez Sanchez",
    },
    item: {
      id: "MLA863083993",
      title: "Peluche Chimuelo / Furia Luminosa 30 Cm Hermosos",
      price: {
        currency: "ARS",
        amount: 2190,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_843845-MLA42260331923_062020-I.jpg",
      condition: "new",
      free_shipping: false,
      sold_quantity: 25,
      description:
        "LEER PRECIO X CADA UNO \n\nHermoso chimuelo - furia luminosa de entrenando a tu dragón 30 cm hermosos \nPRECIO X CADA UNO\n-Entregamos a una cuadra de SAN JUAN Y BOEDO\n\n-HACEMOS ENVIOS en caba (Se realiza por motomensajería, si realiza la compra antes de las 12 m de lunes a viernes en días hábiles la entrega se realiza en el día, si realiza la compra después de las 12 am la entrega se realiza el primer día hábil luego de realizada la compra, si necesita que realicemos la entrega en una franja horaria al finalizar la compra escríbanos su preferencia por mensajería de Mercadolibre para tenerlo en cuenta.\n\n-Servicio de Mensajería en CABA , consulte el costo, los días de lluvia el servicio tiene un recargo del 50%\n\n-ENVIOS A TODO EL PAIS (Realizamos envíos hasta su domicilio dentro de la República Argentina por el servicio de MercadoEnvíos. El valor del mismo lo obtendrá ingresando su código postal en el calculador.\n\n-SU PREGUNTA NO MOLESTA",
    },
  };
  test("should create component details", () => {
    const wrapper = shallow(<ShowDetail history={mockProperties} />);
    expect(wrapper).toMatchSnapshot();
  });

  // test("should useEffect", () => {
  //     jest.spyOn(ItemsServices, 'fetchItemById').mockResolvedValue(mockItemsDetail);

  //     // act(()=> {

  //     // })

  //     const wrapper = mount(<ShowDetail history={mockProperties} />);
  //     expect(wrapper.state('openIndex')).toBe(0)
  //     wrapper.instance().setOpenIndex(1)
  //     expect(wrapper.state('openIndex')).toBe(1)

  //   });
});
