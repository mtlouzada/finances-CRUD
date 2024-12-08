import React, { useState, useEffect } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";

const CryptoPrice: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        setPrice(response.data.ethereum.usd);
      } catch (error) {
        console.error("Error fetching price:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
  }, []);

  return (
    <Box textAlign="center" p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Ethereum Price
      </Text>
      {loading ? (
        <Spinner size="lg" />
      ) : price !== null ? (
        <Text fontSize="4xl" color="green.400">
          ${price.toFixed(2)}
        </Text>
      ) : (
        <Text color="red.500">Failed to load price.</Text>
      )}
    </Box>
  );
};

export default CryptoPrice;
