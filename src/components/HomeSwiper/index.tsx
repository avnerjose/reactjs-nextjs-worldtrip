import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeSwiperSlide } from "./HomeSwiperSlide";
import { Navigation, Pagination } from "swiper";

interface Continent {
  id: number;
  uuid: string;
  name: string;
  description: string;
  images: {
    slider: string;
  };
}

interface HomeSwiperProps {
  data: Continent[];
}

export function HomeSwiper({ data }: HomeSwiperProps) {
  return (
    <Flex w="100%" maxW={1240} mx="auto" h={["250px", "450px"]}>
      <Swiper
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation
        slidesPerView={1}
        style={{
          width: "100%",
          flex: "1",
        }}
      >
        {data?.map(({ uuid, name, description, images: { slider } }) => (
          <SwiperSlide key={uuid}>
            <HomeSwiperSlide
              image={slider}
              title={name}
              subtitle={description}
              slug={uuid}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
