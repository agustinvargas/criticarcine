import axios from 'axios';
import { orderByName } from './sitesList';

export async function fetchDataFromSites(
  siteList,
  keyword = false,
  resultsPerPage = '5'
) {
  try {
    const orderSites = orderByName(siteList);

    const queries = orderSites.map(site => {
      if (!keyword) {
        return `${site.reqDirection}?per_page=${resultsPerPage}&_embed=true`;
      } else {
        return `${site.reqDirection}?per_page=${resultsPerPage}&_embed=true&search=${keyword}`;
      }
    });

    const fetching = await Promise.allSettled(
      queries.map(query => axios.get(query))
    );

    const dataWithSiteRef = fetching.map((value, i) => {
      const addRefData = {
        ...value,
        site: orderSites[i].name,
        id: orderSites[i].id,
        avatar: orderSites[i].avatar,
      };
      return addRefData;
    });

    const filter = dataWithSiteRef.filter(
      data => data.status === 'fulfilled' && data.value.data.length > 0
    );

    const data = filter.map(data => {
      const obj = {
        value: {
          data: data.value.data,
        },
        site: data.site,
        id: data.id,
        avatar: data.avatar,
      };

      return obj;
    });

    return data;
  } catch (err) {
    console.log('OCURRIÓ UN ERROR', error);
  }
}
