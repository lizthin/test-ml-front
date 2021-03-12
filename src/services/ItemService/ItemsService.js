import { server, api, endpoint_items }  from "../../config/env";
import urlTemplate from 'url-template'

/**
 * function itemsServices, container funtion service by search and id
 */
const ItemsServices = {

    /**
     * funtion featch fetchAllItemsFiltered, call api search list items
     * called by ShowItems component 
     * @param {string} query input search  
     * @returns promise list items 
     */
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

    /**
     * funtion fetchItemById call details items id
     * called by ShowDetails component 
     * @param {string} id items  
     * @returns promise details items  
     */
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