import Button from "@/@shared/ui-components/Button";
import Container from "@/@shared/ui-components/Container";
import ArrowRight from "@/icons/ArrowRight";
import React, { FC } from "react";
import styles from "./styles.module.css";
import PattronImage from "../PattronImage";
import FrannemsImage from "../FrannemsImage";
import Link from "next/link";
import { NavLinks } from "@/@shared/constants";

const Banner: FC = () => {
  return (
    <section className={styles.banner}>
      <Container className="relative">
        <div className="flex flex-col justify-center w-full max-w-[800px] py-20 !pt-0 max-md:-mt-10">
          <h1 className="text-5xl max-md:text-3xl leading-snug font-bold">
            We help elevate your brand with{" "}
            <span className="text-[#2C00B9]">strategic digital solutions</span>
          </h1>

          <p className="pt-6 pb-20 w-full max-w-[500px]">
            From groundbreaking business ideas to unique creative projects, we
            specialize in crafting bespoke digital marketing strategies that
            make your goals a reality.
          </p>

          <Link href={NavLinks.salesDiscoveryCall.link}>
            <Button
              title="Get in touch"
              size="large"
              className="w-full max-sm:max-w-[unset] sm:max-w-[350px] max-sm:w-full !text-base !justify-between"
              endicon={<ArrowRight />}
            />
          </Link>
        </div>
        {/* <PattronImage />
        <FrannemsImage /> */}
      </Container>
    </section>
  );
};

export default Banner;
