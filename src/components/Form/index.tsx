import React from "react";
import { Box, Flex, Grid, FormLabel, Input, Button } from "@chakra-ui/react";

function index({
  handleCreate
}: {
  handleCreate: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <Box mx={5} p={3} borderRadius="lg" background="#F4F0FF6c" boxShadow="base">
      <form onSubmit={handleCreate}>
        <Grid templateColumns="1fr 1fr" columnGap="20px" mb="10px">
          <Flex direction="column">
            <FormLabel fontWeight="700" color="#8F9FC7">
              Title
            </FormLabel>
            <Input
              size="sm"
              borderRadius="md"
              name="title"
              placeholder="Playlist Title ..."
            />
          </Flex>
          <Flex direction="column">
            <FormLabel fontWeight="700" color="#8F9FC7">
              Description
            </FormLabel>
            <Input
              size="sm"
              borderRadius="md"
              name="description"
              placeholder="Description Playlist ..."
            />
          </Flex>
        </Grid>
        <Button size="xs" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default index;
