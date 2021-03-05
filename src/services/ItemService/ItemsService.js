import { server, api, endpoint_items }  from "../../config/env";
import urlTemplate from 'url-template'

const ItemsServices = {
    fetchAllItemsFiltered: async (query) => {
        try {
            if (query) {
                const url = urlTemplate.parse(`${server}${api}${endpoint_items}?q=${query}`).expand({});
                const result = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'aplication/json',
                        'Content-Type': 'application/json'
                    }
                })
                return result.json();
            } else {
                return {}
            }
        } catch (error) {
            throw  await error
        }
    },
    fetchItemById: async (id) => {
        try {
            if (id) {
                const url = urlTemplate.parse(`${server}${api}${endpoint_items}/${id}`).expand({});
                const result = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'aplication/json',
                        'Content-Type': 'application/json'
                    }
                })

                return result.json();
            } else {
                return {}
            }
        }
        catch (error) {
            throw  await error
        }
    }
};

export default ItemsServices;