import ItemsServices from "../../../services/ItemService/ItemsService";

const mockAllItems = {
  author: {
    name: "Lizeth Natalia",
    lastname: "Nuñez Sanchez",
  },
  categories: [
    "Juegos y Juguetes",
    "Fútbol",
    "Libros, Revistas y Comics",
    "Hogar, Muebles y Jardín",
    "Ropa y Accesorios",
    "Antigüedades y Colecciones",
    "Consolas y Videojuegos",
    "Souvenirs, Cotillón y Fiestas",
    "Fútbol Americano",
    "Industrias y Oficinas",
    "Arte, Librería y Mercería",
    "Joyas y Relojes",
    "Bebés",
    "Música, Películas y Series",
    "Celulares y Teléfonos",
    "Alimentos y Bebidas",
    "Salud y Equipamiento Médico",
    "Computación",
    "Rugby",
    "Fitness y Musculación",
    "Accesorios para Vehículos",
    "Camping, Caza y Pesca",
    "Juegos de Salón",
    "Belleza y Cuidado Personal",
    "Herramientas y Construcción",
    "Pilates y Yoga",
    "Suplementos y Shakers",
    "Tenis, Padel y Squash ",
    "Electrónica, Audio y Video",
    "Voley",
    "Animales y Mascotas",
    "Artes Marciales y Boxeo",
    "Básquet",
    "Cámaras y Accesorios",
    "Entradas para Eventos",
    "Esqui y Snowboard",
    "Montañismo y Trekking",
    "Otras categorías",
    "Otros",
  ],
  items: [
    {
      id: "MLA869265149",
      title: "Pelota De Futbol Nº 5 + Calidad 350 Gramos Cámara De Látex ",
      price: {
        currency: "ARS",
        amount: 749,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_647277-MLA42892938048_072020-O.jpg",
      condition: "new",
      free_shipping: false,
    },
    {
      id: "MLA847280006",
      title: "Set 2 En 1 Futbol Y Basquet - Planet Toys ",
      price: {
        currency: "ARS",
        amount: 1590,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_717087-MLA41339139551_042020-I.jpg",
      condition: "new",
      free_shipping: false,
    },
    {
      id: "MLA826416117",
      title: "Pelota Umbro Aw  Neo Trainer Bl/ve/ne Umbro                 ",
      price: {
        currency: "ARS",
        amount: 1499,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_611744-MLA41600331373_042020-O.jpg",
      condition: "new",
      free_shipping: false,
    },
    {
      id: "MLA842198454",
      title: "Camiseta Oficial Seleccion Argentina Mundial Rusia 2018",
      price: {
        currency: "ARS",
        amount: 2389,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_801016-MLA41002663302_032020-O.jpg",
      condition: "new",
      free_shipping: false,
    },
    {
      id: "MLA820418390",
      title: "Red Arco De Papi Futbol 3 X 2 Precio Por Par! Malla 12x12cm",
      price: {
        currency: "ARS",
        amount: 2990,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_937877-MLA31083412085_062019-I.jpg",
      condition: "new",
      free_shipping: true,
    },
    {
      id: "MLA713710465",
      title: "Juego De Mesa El Futbolero De Maldon",
      price: {
        currency: "ARS",
        amount: 2490,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_781389-MLA31019847460_062019-I.jpg",
      condition: "new",
      free_shipping: false,
    },
    {
      id: "MLA850850458",
      title: "Pelota De Futbol Campo Penalty Modelo S11 Torneo X",
      price: {
        currency: "ARS",
        amount: 2821,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_820102-MLA41509175027_042020-O.jpg",
      condition: "new",
      free_shipping: true,
    },
    {
      id: "MLA655862737",
      title: "Pelotas Fútbol Drb Barcelona - Licencia Oficial - Leo Messi",
      price: {
        currency: "ARS",
        amount: 1199,
        decimals: 99,
      },
      picture: "http://http2.mlstatic.com/D_754499-MLA42462860496_072020-O.jpg",
      condition: "new",
      free_shipping: false,
    },
  ],
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

describe("Test ItemsAppService", () => {
  test('should get 4 items minimun in querty "futbol")', async () => {
    jest
      .spyOn(global, "fetch")
      .mockResolvedValue(Promise.resolve({ json: () => mockAllItems }));
    const { items } = await ItemsServices.fetchAllItemsFiltered("futbol");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(items.slice(0, 4).length).toBe(4);
    global.fetch.mockClear();
  });

  test('should get an empty object searched by empty fetchAllItemsFiltered("")', async () => {
    const result = await ItemsServices.fetchAllItemsFiltered("");
    expect(Object.keys(result).length).toBe(0);
  });

  test('should get an empty object withoout parameter "query " fetchAllItemsFiltered()', async () => {
    const result = await ItemsServices.fetchAllItemsFiltered();
    expect(Object.keys(result).length).toBe(0);
  });

  test("should get catch error fetchAllItemsFiltered()", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue({ error: "error" });
    try {
      await ItemsServices.fetchAllItemsFiltered("error");
    } catch (e) {
      expect(e).toEqual({
        error: "error",
      });
    }
    expect(global.fetch).toHaveBeenCalledTimes(1);
    global.fetch.mockClear();
  });

  test('should get objecht with 7 keys in fetchItemById("MLA842198454")', async () => {
    jest
      .spyOn(global, "fetch")
      .mockResolvedValue(Promise.resolve({ json: () => mockItemsDetail }));
    const result = await ItemsServices.fetchItemById("MLA842198454");

    const arrayAuthorReturn = ["author", "item"];

    expect(Object.keys(result)).toEqual(arrayAuthorReturn);

    const arrayItemsReturn = [
      "id",
      "title",
      "price",
      "picture",
      "condition",
      "free_shipping",
      "sold_quantity",
      "description",
    ];
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(Object.keys(result.item)).toEqual(arrayItemsReturn);
    global.fetch.mockClear();
  });

  test('should get an empty object searched by empty fetchItemById("")', async () => {
    const result = await ItemsServices.fetchItemById("");
    expect(Object.keys(result).length).toBe(0);
  });
  test('should get an empty object without parameter "id" in fetchItemById()', async () => {
    const result = await ItemsServices.fetchItemById();
    expect(Object.keys(result).length).toBe(0);
  });

  test("should get catch error fetchItemById()", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue({ error: "error" });
    try {
      await ItemsServices.fetchItemById("error");
    } catch (e) {
      expect(e).toEqual({
        error: "error",
      });
    }
    expect(global.fetch).toHaveBeenCalledTimes(1);
    global.fetch.mockClear();
  });
});
