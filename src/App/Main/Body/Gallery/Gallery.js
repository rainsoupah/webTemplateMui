import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import ActionIcon from './ActionIcon';
import FlatButton from 'material-ui/FlatButton';
import './gallery.css';
// import Carousel from 'nuka-carousel';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    // height: 600,
    overflowY: 'hidden',
  },
  imageTitle: {
    fontFamily: 'Overlock',
  },
  imageHolder: {
    cursor: 'pointer',
  },
  tile: {
    padding: '0%',
    // float: 'left',
    display: 'inline-block'
  },
  modal_img: {

  },
  modal: {
    // width: "100%",
    paddingTop: "0px",
  },
  modal_body: {
    // width: '100%',
    padding: 0,
    fontSize: '14px',
    overflowX: 'visible',
  },
  caption_title: {
    fontSize: '15px',
    textAlign: 'center',
    marginTop: '-7%',
    color: 'antiquewhite',
  },
  caption_subtitle: {
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '-5%',
    color: 'white',
  },
  modal_action: {
    // width: '100%',
    fontSize: '16px',
  },
  modal_content_landscape: {
    maxWidth: '500px',
    fontSize: '17px',
    transform: 'inherit',
  },
  modal_content_portrait: {
    maxWidth: '200px',
    transform: 'inherit',
  }
};

const tilesData = [
  {
    img: 'https://lh3.googleusercontent.com/Ht11dZWR1R4Pb3AMEkNDmE8_WtPgN4NW1qbtxgtHHMtcS7NXnCEufQgpqBEywapcldjMU5RBnj1azFmXMNcQgw-DIWwx7YHLhMt9N062L-m1T9FPG0EPr0JvNLisQVGcQIpKDqSA2bROQU25UhuBXtltMjVlECTHMhYmo_s9Nb1PE0efwbcum4kYp4Nj3OBSt4enGXSTFAJMbq2dt2-m3SzQj7cPLNBYdxkWprzhLw1lxM4ueN-3RHOtx3OPct8pXrYIW1DT-FKWF1MHPHCGmEfKixrl_tUKJ1TB0b2y0gsayroVYBnm5slarcOi19rgK0xD3FEAPOb95dSysVYE_I2ei0pVsE1g4_KshnJ7MEDDAHGddmz89Yjj0ksUrpxSEubePfieOw8sXk2QnHetPPFGl8mjgKdA1FaXTZXuJWdyJ-EN7oQE3JH6S3viVmeNkk7te9EgRyEiO2xMm-5mZEyV5ui76grVQPwo2kEX_7ZubxcLrl1GHI-SbQukVFE_8--T8dpPcPok0xNXwA-NAMegzT8gN_gkgvJDlhMKi6f6QF6dTXpGW15GWQ8Q8-O_5QynmkUE6mI5GJBWg8WwmTmDYNYPCB3ngRMz7W6W5nhGnnXvGiOlXGMupwW5sMCqITXHh_aomj3KPiNFm2DaHyK-4LLTzKZIzmk9ZAFXHg=w1330-h799-no',
    title: 'Lake Ontario',
    location: 'Spencer Smith Park, Burlington',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/9B00phLtmuy3kFwmguwJhPV4Rw_z7yKZuwRREbzUphVkdptYnFl43ltVmYOAFka4-5pPeUM2paKpGCyVJQmQeuGMUIgu7Vo59_QHcbOo0mPzEUF0GeKtk_rTRdUQj-2Qwa8X9zhXNBkKZicBAdM4bIoV_S05jc_0s9DyB6bcprVDZLWzdEUJCWKlZR1AahKCfAZ1QBggQGFItOOtsdCBDFrn4tJvNMtS8MJuvVYUc8FhPJ42sV7Yag-fOlvkDwJiCSWNl2r_hUv_mu-Y-GE3Hz7LY-McNcyyMXbs9M_caqIHeTnGFbaTDLPi9OGfEnHgPh3GcO_dVk6v6dcJVQy7BtiX85T5PFXi4f1CzJzOOWcFSeYlzvpATl7fVnjZNb5_gIaDUAiZCST52nw16LEDGMyeOIpYXaHXEuMA4Omm73bAppfxE-Mp5ufAefnTPw653icFM3dQ9SHODa4F8EDn1NH3oHKsk_dQVnZsFU1JIqEGCFmIrMkDlAPnbvJ6OBDlsPcAFCoMmtJgXIF7gulLg0AeQRI5TMxXndT9y7Ds73YmkMvzxRxXlBphLGSrEvBRPieMzcVaeUW1vb3tgNnLCdT4sB1ikH4jXew0V8w6BbeIyDWssfZCezmngFoO_Yhn_ADCDHrhLzGs5Z8XKamVAjdvkNRfwrtEWJiaSEpvLg=w1418-h799-no',
    title: 'Centro Garden',
    location: 'Brant Street, Burlington',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/w_EqKaDmCMjvrQb_BTBM8fH4lAUazq40gVDW-4vU0InkII2wOCVNtcZN944nbtzikS_uBDlrDaeAi-nFtp9I0IPoW-eUPf68_ghzxDZ7dXIRxHoOGepD6Gonk3lXxioGGJ0pEL1y43mcmRBCih7ihoFPHZDTwi3EQAjN60vZvRHec0wr5LtUfkWSewhDzoJSTBuUeuswkpQsm-xEAJu30x_bpqN_tRZT7TOoNOy7AB5Nuoq16pRu0rnZx1jKghoABz_DgZu2nYssT0lOAk4AehOjocHsaj2E2PHmTDAOldv_wLnUbyKemToa4kP1y7LIyJqPdHTaQhTatJETQeyyaVxBXO0FIv0PomFpqrAd8O-6KRiwlxzzKdWXN0fcvBxxQg4oSYuRWJf5a6JkNhJwEGzsb8u1ZpwqaQ-JT9UsJkQk88559Xwf4D9W8jF6tqYLt2Kl_MIolE-FIG8RM5tKdcs5_B6Bv4GBIm8ft605SJxzXnfLWlVQepUVv8dydX_CcGfvnBGJKJn8II6OQVynkc5p71HGeZ0jIvrpg8SKD-eTVAeyAi2QmP6p7bQGMCy-vrf7asgiMVGmwWRgugn9MGH1xSsNiH9n9x-VHhTLhjuqnpSUnjvMUqsbMGQmkppbVwtnTMIqIiz-xtEdoGhn3i-S1Q_-jksU-Nsr9bEytg=w600-h799-no',
    title: 'Shade',
    location: 'RBG, Burlington',
    landscape: false,
  },
  {
    img: 'https://lh3.googleusercontent.com/JG4y3bwO1usaeaxWODwfevq9oslvc-RE94IVdat-D0HUqxo6NfLoykwM79wHZoL4r27sJDW4f8l5M6Zwl0iaEDWKuoF7h3DD76muf0FZOnFuUH_RFvp6ZIZFvPBwj-VebC4L2XVKJuWyDnF5daJAUUY2YeBHPFtBH0LeHX7gRTMYz4b0OLbGPWfvqltRsK0dPgbe9VgABeR54pzvIkqsijZeznGm4iNTS1-88ZwMwC42j3XDUBpgxhrBSd_QHIb44O1QbxBeyMa2zkzUrq5YilxCC83GI1Li22TSIq7tGuVTvqYBOJOFiioKGa0E-BfawpSpisxCY14TPpbYaTT1oo0Fr4__297AAjr-VEZiAXD8mvz2LYju6Ik9XT42QGjqDTj2han2Pyizec-O5xBCtjoD5Qltnpox2VKYhXRqA2WNzIJ0FA1Nkp-MPwuGV9rlPe10nmtPgu_pXShBhcUWwDhcphIOUfEvRIOMknvptWq-dxyc9TV6CjMiv8iGGVXBsa2yGdHsk8yRaVPiD6fv5XhTZ5pXlKCgdebegt1rA1Uwccr5P-kRQi3dX9UFunzgER1N_j8w-FmN0Hjsd18Bs0mRSDURwNHWrU6aSFGm2d86BseZOfQpCFhMVKsBqyoTsf_n0Ey8Hm8QjSvKZcsjYfTIvnP89NBkDQux_THn5Q=w1269-h799-no',
    title: 'Tweeting',
    location: 'Somewhere on Lake Ontario',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/NbQ-cVS-4_Ciq9K5U_KkDIlasQnaz6yTxaKfsiJplBia9enoFbKsZJn0ZQRqIXy-KCJkDNMa0voISEAOYx6rM4umBD8s7GWAJlo1Weg5ncMMPB_9e7vpszZ3rQfsiEo7m7I4Sdt_yGqV-1TXWCNy-8UBwrAh0YxcJI2Ldbg8vp65rS9BiwkAU8ebOiLlPIwEvPEupmvU_ghHjefvKFQQwHhD2aiWozN3CNbRK8Ru8hncysCvA86SXxkKIq4EhPB-KU_51X1e1N2NVFCZR3pfuJAvxh1ol2K_jO-pQGhA7-s4hLgkA7itWyMZTHChqOcFnX9ZE3rI41XP6Wv_qWnia1rlG8b6N8awxOByaQMdf9CHfYsFi7flrk2GJQyOgd_RSDi71RAG5_jYFmVqcDPzovHuMlctqOZSzMsk7s91SvRWWo4_4wl_D9cz87v1lqQ1puQPEqtn1e7vu3r-icdMVX95N7_GuPLgIdybyKUd44ANWHp77GxAyzLqHPdQES_9Jn3FwzEUJYNSWt9sf6WKssnVtrX2SKX2AgM5jjqKOpfd807Pl7lmoO3hgIBcs3tU4m5FvEQKp859-DfsdmCDNrAt96F_BBp_a1hsZdqjufNsAjKHMrBkT3lrphtNAamCRxAUNonitrJKwi2_E48mtrUWqoPUduFf1Ka-Gc-bKA=w1066-h799-no',
    title: 'Blurry',
    location: 'Doon South, Kitchener',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/3B1qfjart1kpj5CB8I1LcS5w3lSUd-2iOnBcstsw2WxNXzdZT6FaxGB3orOmLQloGFihfJjyxeGs8Tj2PExsjz5gmuQIFjElMvnidinHk38uPKluk0M3TSFqxsPmIS8DSCwDv8gJoejHjDsuXM5de0-lKH6EtSQlIRum1txOFONbnCV-gP-3rMkGao2QrpVwFmp8ONiUAXpOq1gZX5uLuGHjPjw5uhnmgdn-izFdYguDhwyZHZhAeyVf-pR4UkjoM4UdXBS1Vqj43uEWg7g81gvWsvsnggmSEwGHfknnPmWD4-254bgXNrUsAUiIfqIO_Ld28CYbfa2bRwGiq9SeCndMxcy07EhPYqLgjChAmaMOUx0hr7GZHPQG_t3t4uMcMhJz4RUnKCI2xAyao2QCF7OrnLH4daiOOTqusPYzQbn2NWSmFCgMrSmVb6ghPiBuy0g3OiabsCsey1UaZNeN6B1I0qGMYeHQg3thaF_rsVNVL5jxa7GVkUzJBWiVKYeJb6ZrBlf56naMGCORPVgTxtEAy0H4RNZpN-UuOv_k4r8pOO3HY7kSA2M48CCYnVnhGEDDKxXISMh9bu7SuyM2-ebO5nAWA7nZec_S7etuVpb_leJ5mL5L_rLelbONUn9ZqdIJj-Q62ytsjsASWyN5nON4aIkluYhr5cjITqQw5g=w600-h799-no',
    title: 'Blooming',
    location: 'Grand River, Kitchener',
    landscape: false,
  },
  {
    img: 'https://lh3.googleusercontent.com/hLoz5evSE_AccZqfEiOvn_nqT0uuziJFE84qPkPFo3BJ3F1GWzSb6D5qDk7B1_wNha4qs5LaehsvIx81PHjPqpIK5ISeB7ntO_gSazpRpjC0MPr5q-QqhgTQ-YxldNp7UmA3YfbmH2TOqDcyqPmhpshjrRJO6SrGZCNnk0iYmBb5LyApb3rIwz5uBOSsUrEqBDQGOT58gCLHMF_3KRr8_Ciak8JXBiq8kD5PlhE_6ZymDoCb7fspxsaMe2l4s9Xwyma3r-m0Ns6wurGX_Dh9fNvG7aaElZQNlFF91aHjsmIqtAF07IRAgc5vl6LwhIYGLSle5yQrgeW4vqPa-ee7wfX3xCneuiQZFWuq--lUMCMlGHP7ZJMbNaNRJhsIQBJK8cZHZwZS3kkDqYvT4hGyjWyBy5qPwuIODy1-yD-0eUtzK6iYlFxhReTEs9NKDOXLUd88sjBTPiAqYOqpJkM_jgIkzsCxvfh1aEllWctt0slkDVbxql4i2NvK8AWYMrCqOKAT8UVuqBxVuR-hjlX6AGZZvyQzggxRH2R7DGrAmuV_McBZNPvzz1AVYOVpD1JTvKlMp2WxkEqlH3cfHpX-N8UsIBJrj0fS3BhpPBDB7KmUvwTt5UUnIuva7mLvDn0Q64_uA2E2AlxVRt-RgKzPd9WJBr5Q9mCTd6C_3xM2xg=w600-h799-no',
    title: 'Branching',
    location: 'Victoria Park, Kitchener',
    landscape: false,
  },
  {
    img: 'https://lh3.googleusercontent.com/YUPz42Jfu4J9lRzZPU9R4orzlNVai3izK4-Pp-CIy0QYY2gGVz1Amsc9yE9JTMysQKxesGUQ6CFluNG5S4wzBpzDhJ9pFbMdfh9jW3WHaYtEXEI6zpG3b4Tj-SGAola_ea1_1ycJsbU5Bsaeoj49OM29lOuU9VTkuUJ3Qt0GGpdX6TODVKwB33X4is5KGyXKfoSNq-HcpUtRVopP8cKr_w6R3Ev2G5bhC3_jcU7DQcwk5QWeGe8pT5tdifzmg8RgNXKbvHOK3UuyST6FynVaTN1fqvhhT5dAhalRvtgqO0F3a7ILmnHvuEq5pFDnMgvq-9GlRZbWNXCVZGnImZaL_5OSr-4QI0uP5NxlsMGPxFotukihbeqxgY2TDqEzNHtq5sEWke58K6SR-hDeFymJGdKprGA925gFUaBgq2CgLIpjNvPC2xm3jQPMSH_0RaAMUT99DPcHqRQOaIaERJ-CuInHVfTlgvryyCXmc-UsBZwbyITvYNT5MM8hfcMkEuAYRCW092f5quM9JiMnD94NWwAldpeymhV_5j_MVC7MHbzv6Wsrkx5uhJlXFhZn65uwOWXIIJ31YMQwlgBbEDHwZK-roKsMk0H-STUS3XL4HKyI4vNfRZjGJ_v4bvwsvw3DSkKc6MpDUvt_8ZNO5OxRrvpd6Bh5K-2QW6tRvFKekw=w1066-h799-no',
    title: 'Growing',
    location: 'Doon South, Kitchener',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/v0Q_F96JfEoohyymzh1nJjhe70ktW62hxy0LN8EZbTw1a2jzz04V1F654Xru5XhHOYLVPwJruBQJBbj9rxKzqtSh3-30MfHhuJjayVGObq8UPPXXFnatXbqeyACKm3S3tIrv9AgnIPPbqf9aFc5lKtYH7nLUv6T4-ruu8J9LOETcry3VwEGYvF6p73wtHbGAI5c1a37gHZvejyEXXFyEmgObzwlDulvYU557u65nRJ08O9MCizCzQwH7xkM4d-iLAo7Iw4hTpftjcojsAtA6q5AZjICYdijySg8Xrd5YpQz2jjQ3M84Z5ZLx3VMNfUyBy3ex6Mba8RqVcc7RjhXkbrwmvnxNVYjXj5u4Co5WnhQuGJsvs_vPRyencbHN22sNbkvPevIViLMFIl2UqQde0ikG23yOdEfDSZ70nzRNqIJk-57WHPQfgpcW92a0-AMNYvoKeUS7-XFcnzIkgbeKVuEYQwG3BLVrW0cB3Jx8ya2D8p5VZA5ROWOYfz5cvzZBWuHfwbveKMqdzZ_oIdzNZMJhRkbz9_Ih_badgITj4AOESENRoluokBihFAQ7lnt_r-Eym1H9_Xvk3aDU0xinLJOBXY9EWQjy7R9xOExA8omt86r321h3FixRFNPuyIic_vUrKlR5WVESqOttIPsNeltemqg9x2PGNJZgHcXH2Q=w1066-h799-no',
    title: 'The Last',
    location: 'PAC, Waterloo',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/sgUK2RyyaKbZe0JEEsCfWbOYxct4DiOy8MF-Rs_5acjzy5yIXIj212qAU5XEq0Q8h7BltY1pB9aSAUdxjl_vgo-6qF8DPnboZPJsAh7XVb9juoIRAi_Fpl4gBFTQIMIduSt9Cgmo8TWDm252BE2LtONc3Hql9EODvuRPyvtXNqcvLCxsVLCZDRLHEVmhMxrs5Ax4_EWt1wC1UvVbSYyyCJRpyZOi0yA620kSLD8hIJlI_udpHZBwm4NynT7_KyjqlSn_f0kR2AUo4W-ZAgeKs-xTx1VSQ6uhAGoDebGqpUREOFEGFBnYYwH0pDOFozMgRqagfZHxZ3d2Mq01G-YH-Mu3hnSuslzWxwVeNSydpNPP5iILmQ8R-YwjUgZlNSXsZCJ_Dyj5MnkXJlZJ4ZVjTrx0DYnAwZ5IEo5VDYWCjS3wVf_1-iMvJmj55DGwfUm2_6L3G-HvpbckBNFLnocSe6eH_6I66w6xrcPtP6qb2rEojAeRx2Ii32tc3LwuMJsgr8ljXCWcshlV3bfNih49zSOBmUQ5HRP4KfgiDl3ZR9GNYpL9P_r-fhIfhu8JqL31btgw5xb33bYM_ecb4z11quAARQ2KZ-bCRbWxNCzEd5-6oZWMpWwEmkBfEb8vKUBIRhI1MTPBqJmeXpndiCli8zOHRqKlBo6ft5j570PZmg=w1066-h799-no',
    title: 'The Path',
    location: 'Waterloo Park, Waterloo',
    landscape: true,
  },
];

// <GridTile key={tile.img} title={tile.title} titleStyle={{fontSize: '12px'}}
//         actionIcon={<ActionIcon imageSrc={tile.img}/>}
//         actionPosition="right" titlePosition="bottom"
//         titleBackground={backgroundColor} cols={1} rows={1}>
// </GridTile>
// <GridList cols={3} cellHeight={200} padding={0} style={styles.gridList}></GridList>

// class MyCarousel extends Component {
//   mixins: [Carousel.ControllerMixin];
//   render() {
//     return (
//       <Carousel slidesToShow={1}>
//           {
//             tilesData.map((tile, i) => (
//               <img key={i} src={tile.img} style={styles.carousel_image}/>
//             ))
//           }
//       </Carousel>
//     )
//   }
// }

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      current: 0
    }; //for modal

  }

  handleOpen = (tile_index) => {
    this.setState({
      open: true,
      current: tile_index
    });
    // console.log(this.props.location.pathname);
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const backgroundColor="linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 70%,rgba(0,0,0,0) 100%)";
    const ATile=tilesData.map((tile, tile_index) => (
      <div style={styles.imageHolder} onClick={this.handleOpen.bind(this,tile_index)}>
        <img src={tile.img} className="img-responsive"/>
      </div>
    ));

    return (
      <div id="container">
        <div id="myContent">
            {ATile}
              <Dialog
                 open={this.state.open}
                 overlayStyle={{backgroundColor: '#2a303a', opacity: 0.8}}
                 onRequestClose={this.handleClose}
                 contentStyle = {tilesData[this.state.current].landscape ? styles.modal_content_landscape : styles.modal_content_portrait}
                 bodyStyle={styles.modal_body}
                >
                <div className="row">
                  <img src={tilesData[this.state.current].img} className="img-responsive"/>
                  <p style={styles.caption_title}> {tilesData[this.state.current].title}</p>
                  <p style={styles.caption_subtitle}> {tilesData[this.state.current].location}</p>
                </div>
              </Dialog>
        </div>
      </div>

    );
  }
}

export default Gallery;
