import Link from "next/link";
import FooterLink from "./FooterLink";
import { links1, links2, links3 } from "@/utils/LinksToFooter";
import { ButtonSocialMedia } from "./ButtonSocialMedia";
import { Facebook } from "@/svgs/facebook";
import { Instagram } from "@/svgs/instagram";
import { Twitter } from "@/svgs/twitter";
import { Linkedin } from "@/svgs/linkedin";
import Image from "next/image";
import ButtonAppShopping from "./ButtonAppShopping";

export function Footer() {
  return (
    <footer className="bg-gray-text-menu w-full flex flex-col justify-center items-center py-[59px] px-[10px] lg:px-[150px]">
      <section className="flex flex-wrap">
        <div className="flex flex-wrap gap-20 text-white">
          <FooterLink title="Need Help" links={links1} />
          <FooterLink title="Company" links={links2} />
          <FooterLink title="More Info" links={links3} />
          <FooterLink title="Location">
            <Link href="mailto:support@euphoria.in">support@euphoria.in</Link>
            <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
            <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
          </FooterLink>
        </div>
      </section>
      <section className="flex flex-wrap items-center justify-between w-full px-12 mb-[42px] mt-8 md:mt-0">
        <div className="flex gap-[10px]">
          <ButtonSocialMedia>
            <Facebook />
          </ButtonSocialMedia>
          <ButtonSocialMedia>
            <Instagram />
          </ButtonSocialMedia>
          <ButtonSocialMedia>
            <Twitter />
          </ButtonSocialMedia>
          <ButtonSocialMedia>
            <Linkedin />
          </ButtonSocialMedia>
        </div>
        <div className="flex flex-col mt-[50px]">
          <h3 className="text-white font-bold text-[28px]">
            Download The App
          </h3>
          <div className="flex gap-[22px] mt-5">
            <ButtonAppShopping
              link="/"
              srcImage="/google-play.svg"
              altImage="Google Play icon"
              title="android app on"
              subtitle="Google Play"
            />
            <ButtonAppShopping
              link="/"
              srcImage="/apple-store.svg"
              altImage="Apple Store icon"
              title="Available on the"
              subtitle="App Store"
            />
          </div>
        </div>
      </section>
      <details
        className="relative text-white w-full px-12 text-left cursor-pointer  border-opacity-40 border-t-gray-border  border-b-gray-border  border-t-[1px] border-b-[1px] pt-[29px] pb-[34px]"
        id="project-details"
      >
        <summary className="list-none text-white-light  text-[28px] font-bold">
          Popular Categories
        </summary>
          <li>T-Shirt</li>
          <li>Jacket</li>
          <li>Raven hoodie</li>
          <li>Crop Top</li>
      </details>
      <p className="font-bold text-white mt-9">
        Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
    </footer>
  );
}
