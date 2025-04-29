import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdDelete, MdEdit } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>
          ${product.price}
        </Text>

        <HStack spaceX={2}>
          <IconButton colorPalette={"blue"} aria-label="Edit product">
            <MdEdit />
          </IconButton>
          <IconButton colorPalette={"red"} aria-label="Delete product">
            <MdDelete />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
