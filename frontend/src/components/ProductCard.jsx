import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "@/store/product";
import { Toaster, toaster } from "@/components/ui/toaster";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("white", "gray.800");

  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        closable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        closable: true,
      });
    }
  };

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bgColor}
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

        <Text fontWeight={"bold"} fontSize={"xl"} mb={4} color={textColor}>
          ${product.price}
        </Text>

        <HStack gap={2}>
          <IconButton colorPalette={"blue"} aria-label="Edit product">
            <MdEdit />
          </IconButton>
          <IconButton
            colorPalette={"red"}
            onClick={() => handleDeleteProduct(product._id)}
            aria-label="Delete product"
          >
            <MdDelete />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
