import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import { Accordion } from "react-bootstrap-accordion";

const FAQ = () => {
  const [data] = useState([
    { key: "0", show: "show", title: "WHEN IS THE DROP?", text: "05/20/2022" },
    {
      key: "1",
      title: "WHAT IS A WAIFU NFT?",
      text: "A waifu is the love of your life in anime format. Waifus are rare 1 of 1 NFTs that grants special access to the Waifustation community. Each waifu NFT acts as a lottery ticket for the Prize Lottery. Waifus are also used for community voting after Mission Roadmap completion. Waifustation will be governed by the community via a DAO (Decentralized Autonomous Organization) where members will determine the future roadmap through the process of voting with their NFTs. Each NFT represents 1 vote regardless of rarity.",
    },
    {
      key: "2",
      title: "HOW MUCH IS THE COST AND HOW TO BUY?",
      text: "The mint price is 0.05 ETH for Community Mint, 0.06 for Partner Mint, and 0.07 for Public Sale. After initial mint, waifus will be available on secondary NFT markets such as Opensea, where prices will vary depending on the seller. You will need to have Ethereum (ETH) in a Metamask crypto wallet in order to purchase a waifu. Learn about Metamask at https://metamask.io/ Also please be aware there are gas fees for sending transactions on the Ethereum network. These fees are variable and will fluctuate based on the traffic of the network. Please use https://ethgasstation.info/  to see the live cost of gas at any given moment. On drop day, you can get a waifu on the Waifustation homepage. If you missed the drop, you can also get one on secondary NFT markets such as Opensea and Rarible.",
    },
    {
      key: "3",
      title: "HOW MANY WAIFUS WILL THERE BE?",
      text: " Only a total of 8,888 waifus will ever be minted into existence. We will reserve 100 waifus for giveaways, lotteries, marketing, and team.",
    },
    {
      key: "4",
      title: "WHO'S ON THE TEAM?",
      text: "We are a team of artists, developers, and marketers that have been in the crypto space since early 2017. Most importantly, we are all lovers of anime waifus and NFTs. Our team is very honored to watch the crypto space grow and be able to bring together a community of like-minded people to do some good for the world.",
    },
    {
        key: "5",
        title: "HOW ARE YOU SUPPORTING ARTISTS?",
        text: "To support artists and creators of Japanese animation, our team has pledged to donate 10 ETH to Kyoto Animation when the launch is complete. Our team will be in Japan to make the donation in person to commemorate the 36 artists and creators who have passed away during the July 18 2019 tragedy. The entire process will be recorded for our community to watch."
    }
  ]);
  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">FAQ</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section wrap-accordion">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                Frequently Asked Questions
              </h2>
              <h5 className="sub-title help-center mg-bt-32 ">
                Join our support channel on {" "} <a href="http://discord.gg/BQacmjg8kg" target="__blank" className="faq-discord">
            Discord
          </a>{" "}
          if you have more questions!
              </h5>
            </div>
            <div className="col-md-12">
              <div className="flat-accordion2">
                {data.map((item, index) => (
                  <Accordion key={index} title={item.title}>
                    <p>{item.text}</p>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
