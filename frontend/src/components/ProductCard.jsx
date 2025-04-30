import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Heading,
  HStack,
  IconButton,
  Image,
  Portal,
  Text,
} from "@chakra-ui/react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "@/store/product";
import { toaster } from "@/components/ui/toaster";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("white", "gray.800");

  const { deleteProduct } = useProductStore();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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
          <IconButton
            colorPalette={"blue"}
            aria-label="Edit product"
            onClick={() => setEditDialogOpen(true)}
          >
            <MdEdit />
          </IconButton>

          <IconButton
            colorPalette={"red"}
            aria-label="Delete product"
            onClick={() => setDeleteDialogOpen(true)}
          >
            <MdDelete />
          </IconButton>
        </HStack>
      </Box>

      <Dialog.Root
        role="alertdialog"
        lazyMount
        open={deleteDialogOpen}
        onOpenChange={(e) => setDeleteDialogOpen(e.open)}
      >
        <Portal>
          <Dialog.Backdrop>
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Delete product?</Dialog.Title>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size={"sm"} />
                  </Dialog.CloseTrigger>
                </Dialog.Header>

                <Dialog.Body>
                  <Text>
                    Are you sure you want to delete{" "}
                    <strong>{product.name}</strong>? This cannot be undone.
                  </Text>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant={"outline"}>Cancel</Button>
                  </Dialog.ActionTrigger>
                  <Button
                    colorPalette={"red"}
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Dialog.Backdrop>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};

export default ProductCard;
