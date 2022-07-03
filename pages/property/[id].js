import { baseUrl, fetchApi } from '../../utils/fetchApi';
import PropertyDetails from '../../components/PropertyDetails';

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    }
}

export default PropertyDetails