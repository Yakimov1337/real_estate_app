import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresult from "../assets/images/noresult.svg"

const Search = ({properties}) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                p="2" fontWeight="black"
                fontSize="lg"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <Text>Search Property By Filters</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter}></Icon>
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize="2x1" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent="center" flexDirection="column" marginTop="5" marginBottom="5">
                    <Image alt="no result" src={noresult} />
                    <Text fontSize="2x1" marginTop="3">No Results Found</Text>
                </Flex>
            )}
        </Box>
    )
}

export default Search