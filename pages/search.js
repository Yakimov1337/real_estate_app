import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

const Search = () => {
    const [searchFilters, setSearchFitlers] = useState(false);
    const router = useRouter();

    retrun(
        <Box>
            <Flex cursor="pointer" bg="gray.100">
                <Text>Search Property By Filters</Text>
            </Flex>
        </Box>
    )
}

export default Search