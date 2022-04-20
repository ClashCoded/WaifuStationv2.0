import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import "react-tabs/style/react-tabs.css";
import CardModal from "../CardModal";
import img1 from "../../../assets/images/box-item/card-item-3.jpg";
import img2 from "../../../assets/images/box-item/card-item-4.jpg";
import headerbgimg from "../../../assets/images/item-background/bg-authors.jpg"
import footerbgimg from "../../../assets/images/item-background/bg-authors2.jpg"

const MintingInformationContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const MintingImgTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7rem 0;
  gap: 6rem;
`

const StyledTabList = styled(TabList)`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 5rem;
`

const MintingHeaderImg = styled.img`
  border-radius: 25px;
`


const MintingInformation = () => {
  const [dataTab] = useState([
    {
      id: 1,
      title: "Round 1",
    },
    {
      id: 2,
      title: "Round 2",
    },
    {
      id: 3,
      title: "Round 3",
    },
    {
      id: 4,
      title: "Round 4",
    },
  ]);
  const [dataPanel] = useState([
    {
      id: 1,
      dataContent: [
        {
          id: 1,
          img: headerbgimg,
          title: "Playable A P2E NFT Fantasy Sports Platform",
          content:
            " al;skdfjl;kasjdf;laksdfjl;a jasdfljalksdfjl;askdfjalk sdfjkasdhfklasdjfkla jsdflkajsdflaksjhdf ahsdf ksadhgklhdfksdhgkjahdgfklahf alksdhf klashdgjkahsdgklahsdglka hsdgkljhaskdljghlaksdhflkjfhkslahfklasjd hfklasdhflkjashdfkjl asglaskg hlkasjhglkjasdh flkashdflkahsfjkl",
          leftsideimg: img2,
          bottomsideimg: footerbgimg,
        },
      ],
    },
    {
      id: 2,
      dataContent: [
        {
          id: 2,
          img: footerbgimg,
          title: "Playable A P2E NFT Fantasy Sports Platform",
          content:
            " al;skdfjl;kasjdf;laksdfjl;a jasdfljalksdfjl;askdfjalk sdfjkasdhfklasdjfkla jsdflkajsdflaksjhdf ahsdf ksadhgklhdfksdhgkjahdgfklahf alksdhf klashdgjkahsdgklahsdglka hsdgkljhaskdljghlaksdhflkjfhkslahfklasjd hfklasdhflkjashdfkjl asglaskg hlkasjhglkjasdh flkashdflkahsfjkl",
          leftsideimg: img1,
          bottomsideimg: headerbgimg,
        },
      ],
    },
    {
      id: 3,
      dataContent: [
        {
          id: 3,
          img: headerbgimg,
          title: "Playable A P2E NFT Fantasy Sports Platform",
          content:
            " al;skdfjl;kasjdf;laksdfjl;a jasdfljalksdfjl;askdfjalk sdfjkasdhfklasdjfkla jsdflkajsdflaksjhdf ahsdf ksadhgklhdfksdhgkjahdgfklahf alksdhf klashdgjkahsdgklahsdglka hsdgkljhaskdljghlaksdhflkjfhkslahfklasjd hfklasdhflkjashdfkjl asglaskg hlkasjhglkjasdh flkashdflkahsfjkl",
          leftsideimg: img2,
          bottomsideimg: footerbgimg,
        },
      ],
    },
    {
      id: 4,
      dataContent: [
        {
          id: 4,
          img: footerbgimg,
          title: "Playable A P2E NFT Fantasy Sports Platform",
          content:
            " al;skdfjl;kasjdf;laksdfjl;a jasdfljalksdfjl;askdfjalk sdfjkasdhfklasdjfkla jsdflkajsdflaksjhdf ahsdf ksadhgklhdfksdhgkjahdgfklahf alksdhf klashdgjkahsdgklahsdglka hsdgkljhaskdljghlaksdhflkjfhkslahfklasjd hfklasdhflkjashdfkjl asglaskg hlkasjhglkjasdh flkashdflkahsfjkl",
          leftsideimg: img1,
          bottomsideimg: headerbgimg,
        },
      ],
    },
  ]);

  const [visible, setVisible] = useState(4);

  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <div className="tf-section sc-explore-2">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-tabs explore-tab">
                <Tabs>
                  <StyledTabList>
                    {dataTab.map((data) => (
                      <Tab key={data.id}>{data.title}</Tab>
                    ))}
                  </StyledTabList>
                  {dataPanel.map((data) => (
                    <TabPanel key={data.id}  style={{marginLeft: "0"}}>
                      {data.dataContent.slice(0, visible).map((item) => (
                        <MintingInformationContainer key={data.id}>
                          <MintingHeaderImg src={item.img} alt="HeadlineImg" />
                          <MintingImgTextContainer>
                          <img src={item.leftsideimg} alt="LeftsideImg" />
                          <div>
                          <h2>{item.title}</h2>
                          <p>{item.content}</p>
                          </div>
                          </MintingImgTextContainer>
                          <MintingHeaderImg src={item.bottomsideimg} alt="BottomImg" />
                        </MintingInformationContainer>
                      ))}
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default MintingInformation;