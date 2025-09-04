import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Tag,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import type { Resource, DocumentType } from "@/types/types";

interface CardProps {
  resource: Resource;
}

const getDocumentIconPath = (docType: DocumentType): string => {
  const iconMap: Record<string, string> = {
    Link: "/assets/images/link.svg",
    PDF: "/assets/images/pdf.svg",
    Video: "/assets/images/video.svg",
    DOC: "/assets/images/pdf.svg",
  };
  return iconMap[docType] || iconMap.PDF;
};

interface BackgroundStyle {
  src: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  width: string;
  height: string;
  opacity: number;
}

interface ResponsiveBackgroundStyle {
  desktop: BackgroundStyle;
  mobile: BackgroundStyle;
}

const getResponsiveBackgroundStyle = (
  color?: string
): ResponsiveBackgroundStyle => {
  const styleMap: Record<string, ResponsiveBackgroundStyle> = {
    red: {
      desktop: {
        src: "/assets/images/red.svg",
        position: { top: "-85px", right: "-20px" },
        width: "226.26px",
        height: "257.12px",
        opacity: 1,
      },
      mobile: {
        src: "/assets/images/red.svg",
        position: { top: "-85px", right: "-20px" },
        width: "226.26px",
        height: "257.12px",
        opacity: 1,
      },
    },
    blue: {
      desktop: {
        src: "/assets/images/blue.svg",
        position: { top: "-60px", right: "-30px" },
        width: "247.72px",
        height: "258.12px",
        opacity: 1,
      },
      mobile: {
        src: "/assets/images/blue.svg",
        position: { top: "-180px", right: "-30px" },
        width: "351.87px",
        height: "366.65px",
        opacity: 1,
      },
    },
    green: {
      desktop: {
        src: "/assets/images/green.svg",
        position: { top: "-25px", left: "0px" },
        width: "285px",
        height: "150px",
        opacity: 1,
      },
      mobile: {
        src: "/assets/images/green.svg",
        position: { top: "-80px", left: "0px" },
        width: "404.83px",
        height: "213.07px",
        opacity: 1,
      },
    },
    yellow: {
      desktop: {
        src: "/assets/images/yellow.svg",
        position: { top: "-90px", left: "0px" },
        width: "226.26px",
        height: "257.12px",
        opacity: 1,
      },
      mobile: {
        src: "/assets/images/yellow.svg",
        position: { top: "-140px", left: "0px" },
        width: "321.4px",
        height: "365.23px",
        opacity: 1,
      },
    },
    orange: {
      desktop: {
        src: "/assets/images/orange.svg",
        position: { top: "-25px", left: "0px" },
        width: "285px",
        height: "150px",
        opacity: 1,
      },
      mobile: {
        src: "/assets/images/orange.svg",
        position: { top: "-80px", left: "0px" },
        width: "404.83px",
        height: "213.07px",
        opacity: 1,
      },
    },
  };

  return color && styleMap[color] ? styleMap[color] : styleMap.blue;
};

const Card: React.FC<CardProps> = ({ resource }) => {
  const documentIconPath = getDocumentIconPath(resource.documentType);
  const responsiveBgStyle = getResponsiveBackgroundStyle(resource.color);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgStyle = isMobile
    ? responsiveBgStyle.mobile
    : responsiveBgStyle.desktop;

  return (
    <Box
      borderRadius="xl"
      p={6}
      position="relative"
      overflow="hidden"
      cursor="pointer"
      transition="all 0.3s ease"
      boxShadow={"0 4px 10px rgba(0, 0, 0, 0.05)"}
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      }}
      h="240px"
      maxWidth={"400px"}
      display="flex"
      flexDirection="column"
      justifyContent={"flex-end"}
      border={"1px solid #F2F2F2"}
    >
      <Image
        src={bgStyle.src}
        alt=""
        position="absolute"
        top={bgStyle.position.top}
        right={bgStyle.position.right}
        bottom={bgStyle.position.bottom}
        left={bgStyle.position.left}
        width={bgStyle.width}
        height={bgStyle.height}
        objectFit="contain"
        zIndex={0}
        opacity={bgStyle.opacity}
      />

      <Flex justifyContent="flex-start" mb={50} position="relative" zIndex={2}>
        <Box position="relative">
          <Image
            src={documentIconPath}
            alt={`${resource.documentType} icon`}
            width="27px"
            height="23px"
          />
        </Box>
      </Flex>

      <VStack
        align="stretch"
        spacing={4}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Heading
          size="md"
          color={"#2C3237"}
          fontWeight="bold"
          fontSize={"1.8rem"}
          lineHeight="1.3"
          noOfLines={3}
          fontFamily={"Poppins"}
          position={"relative"}
          zIndex={2}
        >
          {resource.title}
        </Heading>

        <Text
          fontSize="1.4rem"
          color={"#828282"}
          fontWeight="medium"
          opacity={0.9}
        >
          {resource.topic}
        </Text>

        <Flex wrap="wrap" gap={2}>
          {resource.categories.map((category, index) => (
            <Tag
              key={`${index + 1}`}
              size="sm"
              color={"#2C3237"}
              fontSize={"1.2rem"}
              fontWeight="medium"
              backdropFilter="blur(10px)"
              borderRadius="10px"
              padding={"4px 8px"}
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
            >
              {category}
            </Tag>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Card;
