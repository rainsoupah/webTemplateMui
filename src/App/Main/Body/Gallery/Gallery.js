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
    img: 'https://lh3.googleusercontent.com/-GsCtpc72KE3aQvSj9Rgs434ETvllEClHThDfKqfvdKw522eMcCl5tqnawFyuUri_BTaPsXQeN7K_ArC6GZXlQRDkyfTiDd50VWhfEp4loZE7zTHW7WjZUpqyAhp-vQNUmryJHO1sQ7sPIVSVVg11aT2uvp6BAcrmiK1bsFfQ0Bm6qHJVVObTqzDY0exhKO5njE5aD3qcO5jiOXRzdoUYXrDAg_86L3URGhEtmgqjd1HoAF2GlYvilJrj-sBRP5ruaamvNfiaRqRuCUzkmXPHA15rYplnL6JBS8uAylIFLGAsI3rXZmB5LdPpbfcfVwqKaVEaeXPXk2yBkwY_lkKby3VS6e0LB8oeCGHKMorDuwocNglA96-uysf1YTJBzmC1qKhgZUqx69WGMbaTPY19jUFQRHqQXhUc2WSePcv3mRYoQtn8o_HzMTiyCY_JSDcM8NTcyU-RZ6lANhUnOfw3Tm41Qh_p6sUOdCZg3w3vsqWnHRfksG_b4OdlCtFlGKG0qFNAIl_aESg3AWULMXwzHZ7-jlXKytvGqxl8X-lr1ZDthYodpsRn0QsmPqwjkKvHtzOuAjzZrt8FlmT1xcv-5uWV1nne1x0PMkVwFYwOHy7nalXpHceq7dKBvAnsqYOVbKnMDb2kNbLULCtKomfmts9hjhACPsHPyBmTxAoSA=w1235-h799-no',
    title: 'Youth',
    location: 'Sea World, Orlando',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/8N5ouLYrqzo9lqN3aNLl66_hs889al8H9vk5BmRulcT6fmr90G1I9x4U2llkXze-F222pGHrqx7eA-l7HUnwScIG3sQkzBsQQNSj1wE4RpeB1NQk9ykcAFPozxosg6sQch_k4zBW8eiBoRKLegu5vxBevGZItUyTJK6mY7SuBGfLPhc-a8CJvHBtxhin7_PNjS9vd1da_veh1Tx3yj0BTp0ZNwV4exoOEhWyy4JPYjKT7TraE2_mAxVSyUF0JZIMzQD1AhrNZVVyZWiiLz5sV2tdmxI1JiU5PfZXixccdkuYkdSaD0byUTzlKS44P_-bIpbW6ylvcZ0xZZhfZhARqm3fjub5b6D-AX5-KB9iujXMC3n1kAGGRyJvXLjSy35NHqDeS7tvS_ifLXWjhUxrxc2TJCmMErh9RkUVmN5dxRrKxIAVIiNvEOFp760RMu9p6Fqvn8rMwAdqRkkkF8hW_9cWoAcyzCuUkNUAbwkW4cQzI9JLFpXgYRHUsLssT0bkiaA91_uuqTrueU8J9TndJnmgnn33fqMp1c9faIKArhrdCi5PRJ_RiQ_CHvPiD7vwFtfdYHv2YVB9R6OXHQhSJGBcw2IawdJKSUPnnkL_Nmra9AH6cIy8GaOhNapTlPFCMV3dUk_zZ0mFetM2ffqVkan3Z4n5Mgq4dKxTkRtOXg=w1066-h799-no',
    title: 'Ocean',
    location: 'Half Moon Bay',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/fLhlrvHEIcnWVupz38qTRmpIhhTE041saG1v2Xg1XN1BwhVJDw_l-W3eUONHfZ1_04pviLqzdb4cc-Hr6xoxjURUemuJFCWiCEgY30ngwZp0p-vK82wHbULqW3DtIoZZix35T0ZZuINDYFTHzSUT6PImP_XghV7HbXUbR8xYRFo2C2CaDsBEZuoN8gfh5oAdAhgCoTI6q1cHxOi8VmcZR2uFTkZWEKY6u4kOLDPnaskb14X6ccZibDvDWQVs4AQtM1Wx6y-EJOlpHNXSu32WRYHzfdUAV9q00V0qcwkKGe5RopFqrwnSqX7arU4w7PJPkWgCTcUUGAYMTsTvvon_HqhFbpSXmgUOecZb45rbWXjEDi0LVZoZJP97KUblFqFSO8xRjrRIQZdiqKTMIwa8xHH198FYXxMgESftPigeLoV_rcd-xf7b0FCVcW-Dyq77IhgVqP6hohlN1DDzLJFoRyKQI0CDRTNVfbi0nop-6BHdHz4skK4IIl59xhZvKLdIlM1D4F-kearhuARkF9lLMvo4TFtBDHFsfT4v9Wa-2kwFrZ5K2HVJF4apKX-I6nNUTCl9d2rwM5pcc-O1cf5fjH3Ukpu7hHWmrxS1meZnY9apidqWw2fFuNn7RsrXl2NXoxbzx_3JceL3ulfVY8y08ZDG4ExV9SN8QiZoGMvn1Q=w1066-h799-no',
    title: 'Dusk',
    location: 'Big Sur',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/ATXVC2uXrUxGIcC7GnMdn8cLYAZ1hmqxD7h8l7nesARk9PHnU2nJ0_B-2Z8VxtLi4V67pclkR9yCbMK-gSvDJNjd_DVAHLU8EVn84lUMJzfy3u-WS3fQWlzYRBJfLT53ydlv93xpuFHpt9rBSbW1xG8qzCBTMSFAW_yhqldaCN8yFifrWRRAMjvtxu9V8jQInzW7s6swoAVVG7zNz5Zeec6sXgQEImqr9gXVwCNaOQCOPzBmcMKw1YrzgURyCpQGyOAjHtMqbrfsfCairbz2hLhOcux0jAf3wkZ6gHQJbRsLlIk02IzJQihuY01c9NM7u7kBpxZ2rpcAK6HYutzoAfsPweW1lI47pqbkxW87SSvgE7dOEBwGQW38tHt6yTV2NYSmq5hid_-e5M1uom5LdtyNqgIKNmkurcTJerkD0nVQHL_IOej37xuaRzoIKnToxLyIgtFRQ-C3cUpTGkyliuEGBu6KqP5-wTYyNPxIB205qOXGSk3Vxm-Q020C-Yor4RmDz5Iz0mgl9SZ2YiB1NzNZxaDjVBzArqKomB5Xz5T_iRsoV2VnerAf6WC4-9cghsy363Xmyl1lHlkNZiCsL2T7hLPV2yA3Ul6lSC5rBJERcLk8sHl86yN23a9vMZNOXq5tU82hpEvDSQPmQe2eGrehtDE30cvT6bjYIA4JJw=w1066-h799-no',
    title: 'Microscopic',
    location: 'Monterey Aquarium',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/UZYbzL-0fKin1-8ZcyYImKfNMDHM8XiMDtgSQwvhYYKJi3SKsjxt_fvHwr74RwVrtWtLdtWb7Z7K6pMsn6tUWnoB6cAGeyXRBAUZT4NUx-Ix3lph1wjs5KTpJhNx3jkOgrbZ0KcyHFbMvDyuaH8LM-9TNb1J2EFkRi7AQ__4N0Tua5z4cphUcL2fBxX1wyzR6_YFEIL2LZ4vabq-RstisBsLFNREY5lWJfCkxFBMCY8NbV_lXyqt_b8KhGqpfckfdMfoxSTJF33Z_5M3frJ-4Ooyve7KA21FZoWGlMvA4umEirqBpXQ9JMzG_P6WeKZ2JuInDaJk0VlUUWK8puxHzuq_lEDeSL0EntcXUyXNvkr8oNmu0RS-AMLlyqgSoc9aTBTXIiIhGwYlY_DchWVuSXRuCsGwnLcxa3OCfE22uI2s7ChOQr6tF_ltB2Uuwqb72ilCSCSdmi2AvWjQyI4t3Y1HGCDebgpvlz25jI0GbRXQrwZdYZqNEB_P6Cge0vl2cvpqwgxD-WWpOhFuUsI_IROd8idJ9RmhQ34aFTXnMbCUTKWznAm02Ec9HCfkCOSSBLaUZ1d76__G5Z_2hZ5FdrapBfWcu1ezArjZPQRLigeQt-aqhwmHdhe9K0DuBvP3TV80ptiHMRL6Phagl2jFIZZkYJdNdyKrtUx7t2Jaag=w599-h799-no',
    title: 'Fantasy',
    location: 'Niagara On the Lake',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/t8ahu34sJ1_nMagQdCh8qKGRW_YvzEF3YosszdJtAASRH-vuL11AQFdOJdf3HSp6eexycN5BzwfPGV-fk5RCGB9_1Tz1AwM8006NfafybfB-mxLf2RyDTgR2f1RACzAMyo4TmH_7uJaeL7YjjykHreiemI-d8c55jm_8GVQppvJnOPAMXyMOQZJ4d2oOlzdC1m9TXSWkkLl86SVqB-o0zv79rJ3UDguGhXl6Nf6kJ6HBNCvvogIBLIIA23cdmXK3wyyu0ChlfknaUXkkhZHlb2Lckk9-nd7sdcRY0cQ2gXromTy3ADMPfmj6O4iMk6GXWRs53cZr3Y66LxO9XfEyuxI15FMVGDibuAHDx-EEn_imRN1XfksnRXwUQgnv1thFMkvzGcMDgRFt0xTLx7NzeSoeLkiVgK_ll-qEy5DxEkdkw7hIJTfU0EUeimKQ1sHOH1fdJgEujw8En8Wyk_rtm5OYl5wHbH-YypWTrYGhNox3wTRP2QQU98ixxb3pUwzbb5iR__7inrhj-rQUydM9u9NGMyC1kwYgLa_slQaruvM55qBBtP3lUwRIqyEnTUzPwWVuexT1mv07L4Fo2FVODr9t4W9yzO8EAe22Vxw2rZk7iUUb49xyV6_ZpFY4T4BGF3Zs__zslZqMXkw8hiVbUGPgErRmMwEsOq7-DIdR6A=w1066-h799-no',
    title: 'School',
    location: 'Stanford University',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/XvlIRJ3bAc2_rzFxskjr36jt5NCXRAy54x9tzmpbwz3-LzDAFYScfwKWA7VSDcV56voOSuj-_T2ewzjv0BvVEAGPutzBASEGtokRzbjAyliY0QbzeJAr6LIVCnG34lCBMpCJWOqdNXwf2tSQhNonSf4PJGey6Mvm5Vgh6Ju--7x186NQ9Xw8ICTOAkzEJbDq6Y3Y4c-a4vKapU5DyzWPOZCwOpYZ6eL1escxabbHK0HJXzW2pPorFQ74EbxdPxcgoUE__TX_9HqrHY08Z92S8urtlcHsdCPWiL_-SO-SEK0uJnYGyum1FjjU7hkdo7IZKWpt3rTyU0uHwXHtlCvQo2SuYDBIjsdYKjgZ3EbZtVsFNp3Z5GVw8WK5LyJyxCtIigmdtfQur_49LR0Tp7mTo45bjpTyzzDg-aQ8DmJ3-cxu5Gs97K7Sdj5o8jekLvoI7Il4N_MzscMDUgPOHVEIaiQbBWE65TpR-6CyDdhmqxqCqnO6Cx5DxtL0XT6t1f3elRqK5HNqJRj5hkRPhvyK_bZU0VxTVgVUYyL5HLYdKxPW62_gkR1iYUOBVkqf6RjVzAD5GIy4KEgfquUjyKrP9jytgdEylcclU6TJGJKs89CGyjrIVi1qkY13urZ5NiQ4TZF-hi_f-1edi58abZivAxFzEqU20tMQ-rTWgivs4Q=w1428-h799-no',
    title: 'Waiting',
    location: 'Monte Carlo Casino, Las Vegas',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/uP4TpY7JupZcFQd8-fjLtSWpW_U3QIHFo80j5d9y4u36g4AgIyLM17T2Y2Np2T-JfWBfz2YVCs542HyP4By0rbJr_6VRYpivNL561dzIdm9wWZ7583JTmBiUzoAvzE58im4sYic2yf1Oliu5b5XJyf4T2FUBdQx0kYQsWZcN7lV46Db8mOaMOAf6i-40_hpzLb3Z5l7QR05pORcUjdJZCU6J9_GTZd-P3DQW-sQGoe0HiIFSlG6xBc_QSNHy-hRmj8nu7BE3OPQvgwB-nGqRESHsyYeeXUBFocp_z29toAFe0zj-tvHmt-Z49VfQpbBzbCCZHnqsFoScyrrxj8fk9gARyU0KKsY6jSgm4K-grimLJ-dbqj-9NuEl6B7pV4mGVYLbAfDxcZoc-844M1MHoVXdF_uq5BRk2dBwyGDfeV-ItppDgtOQB-5ShUh3fBnfYrmvmSqaE0HR-9jzRy8fUYACAqiifiPcC8FEd6rQeEJYZ-JQs8Z-iDmup9eU7I8wr6ubWZtvm1C41ncttoQ-THNw1EwF0AOiPGLQmH3tC8OuT2y4_hW_Pwq2VemHacpPVk8me-guY3iK7UXd-ZWLnou1vZAehbZLC3PqwCla8Z3TnBlcY0FIWQJmHd3iku3Ov1XB1kVXR2-PjrLB5I0sgzo8rQSrkVkTDnRGPSjjEQ=w1066-h800-no',
    title: 'Nocturne',
    location: 'LINQ High Roller, Las Vegas',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/7pO4b-jx_7yeVNRShVTwY6nMBBoKSv529w0Vx5MayV9Rb2C0P1iOKQ0mPk6DO4WY8RitEKwO3Cq2vxkfb9v0RipdEogaIRVYG5m7ltN_o6jiix4jfDTwsW643HfaZGJ6WYbHwZrZEfd5qGbAgXpjIbspmdQE5U3qemJqe_I5Tl5DgmPHOuYSgCiVmqnAOupEtluqknPAVuJAfpol1qt5icpHEyHrcJGeaP0ryj6xi-Y7_sIuJn7VZ1E-BE2j13QBpYwrVmsdvA3yFOVB8nH2H0PAJjc12W42tUCABmm-OnVBjEyIa-iG5g5thgRUw93PfbmK9rZKV4ceL7iKyJ4s2EjOIiA5lgnDaj4nyDYwxQ2-BhSDyjuvvRznRk6H0pUJgqVezgqXbP39inIvXUq3BYTchjAyqQ9_6mxA6-Ij_GW1XSCpn5-UYg5oz-UzvMbV4XGdDhQ1j7aHkpma3hMxv0QI0YJa5Hlb3BLaITN-f1s4kOSYQSNNIpQGwEzXTlgICrtaXFaZbhRlxLss1cFlv4yJ66McV9vMeZtH4-BeVoxfPE2oO1vTa9ovMymDqW7deWhepdr7-7YIYJm9IBItXt6HgGLVyREhH0H1oq35i3owfSVWzDKmeQANXWtgkqnZaFn3XjWnoR2OIsrphmSn6sCpK54Df6U9A3w7FYp6JA=w640-h799-no',
    title: 'Diamond',
    location: 'Chapel of the Flowers',
    landscape: false,
  },
  {
    img: 'https://lh3.googleusercontent.com/jq8fU3Xv7gkPU8-prK9a_J0QKX7lZQr0CXFmUbWbjBZLP96B5HukmwgX-I90nb7V1mKkSn-QQ8v0dlFtqVmBpyHbIeIouyC9TrRZmD9QRnw04pSDcVNLnag5nGfnU1_h9r2TpSCHWmb6Sad2KPobSzSPSLJND0LTXR64HICjtUugdGbuz8bPaXG5BmeiI_wBykGqpFobfcYPz4Bhq6peNUD9eT9x0sjZ5kkOic9Fl-9SAwowlhQt7d9j1YEgP3_1_AmRDBgotUOOjgSkB3i7U-OtY3kFd8KOi8n6zat8SWD8cj2dOicLbXLnDLB5lsxrFR5Qf6ryKUPgkTiEBKOIM-Akbu15G85psxLV1b8spfKSWy7PtqtVkij8p6AoI6pgmTBmS2tyu9vPzZtpVdgYTgdbOYSEqLBskq8WTX56aNk-_5Ne3mvYMOqP-ekZlowYSHq0ScSiaYYVqW6IPITXdtUR6qInMBXdeRT58OQuAMrBRDbApb_m_-fJUpjtFvrx_vrwGdKkvQxO6G7I31ykvOQc3sXOB8AzHa5ytWkVs2x3l_tRCpm8VcvujQYCl0ZeScQbLxXvKwGZ0a2RCnabZ5iW_QgybMRzJ1fM2LaMENG4aXWpkjzKXWE9AbUtjcToMS2WZOErf48Yhi-AY1Ye-nuyROfxtu0Zvp1QsI3hBQ=w555-h799-no',
    title: 'Sailing',
    location: 'AT&T Park, SF',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/AlUoqOUmrZ8dyUtCQB2jbA7dLRF1rqmMZNyOlm_FBj33lbWx02MQuzmCp4usFb7Ixe6xOFNaPzmRFata8qF98q0GqHAms6W3YQp6so5bcYCYEoJ_kqGmArWZZVYFGrMKl0wtPDsXwOR_9D4YHBImFept-_6TgVvd86vgHZtPU4V3FljgelYsR2kLE4K0FJ-Qr0VRIe1oW5j30pUD6UrWHh8J1Dql5564z482tvQzk_y3BUDmKlaXIjQ7Tv4Y2acXuAwhe1rrUyvW73RRKOtr44rMYz6NAG8g8Bdwd_N2hBOzOD3dUv_k7AlpMZoR3K7lptfXgJxdKXn7UM9CclRIWt8Bt9Aym5Zf2_J7tE00g7KN1DfGqoWEkNWPYlmEZBydMr1udplgi7CLJ-QskllMS9oKCvms2vC6cJ5G2NMkBBZPOkC7W_boHbRcDo6h1Je_YCMwA8mKSXcQwvL9Yp39Qn6Klbr0iL-LrjxcZcDiVMzO595kpm5FCG62_4wB2-TavW7ArklBhKVODHDXULsXa0_kh66l4QKvSQckjYOyC_mq6TJQ_3xgCehCEKqABZcfvagdAs4qh48dZkxA5RWgXADK8EqwSctz1z2jtIYg5A2PpCEbJaUqGCc93GECu8uPeJb90yl_rQjGiKHmgB0r5CSHC32AFeTq6Q9QTPGqhA=w600-h799-no',
    title: 'Hotel California',
    location: 'California Avenue, Palo Alto',
    landscape: false,
  },
  {
    img: 'https://lh3.googleusercontent.com/xjkDGLw-SHq2SGOyNB1_q28ZYwPoLtOqES64P3GANSSOfts94MHnRtU96NGKOlb2kXvOvd_deOKnpa2wYAD3ifcINCzjpNRDy6t4MDmkEJywniQk8TFGx8PseNk0g5X3MCJ98JnLQhgiUfREWLnWOoJtoL2mKNI_1WFUoKzQwJCWtmAbbJMpliShlOCljD1veXc8TzTyRUG-z3CyzKv5akVc66nDRISGUqIJwicDagdeyoOByBe6XALoFOP3tT8HTlCwnE96kdRUTaBXHbg7iulkyNEnZ14H50NpBzxK4aM3eNwMShySnyk9Q5nXNq4OrgarOwbkB4O4tDe-mHCMrSqe9LdeQdzlyan-WnLai3LSLKnAgqlsugg6XQPn4FM1FvebyaF3GmY3w4aeRmf0JsggIoIyWt8r2OAwcY6qO-txVTm_J-SDYzzQPnHEmM6isOe176MWBEiieTsgq-arqZKLKK68zcJ3YuGNbheJPXjWt-FGqH6uFh6MvJ-5Zxm90DzQo5Y1efAKg3FId-SKUDYRagAVP4R5_8pADeUnjFnZ6zazCWT5TljT3kCdzmcubQwFFwhJyfW1x0sVcj7zAzHtjXBQD_wqki4Pknb3QZWQfs9dAnOnEgXaXF7XaOhaw-zDD657ko1vjarNC8tC6q1WxWe3FlJlck_75H6y6A=w1172-h742-no',
    title: 'Swarm',
    location: 'Monterey Aquarium',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/StBTHX6Her_OV7_-RcVSQNduOUbdIgK6GYSv1EKh8pt316ZCOFQOA5Ty6EJbgZub3cNDWigk-ZUWhy1HrkxGGHI3uTtrWrpfNGyjz-ZcYk6PyQCKGwTSo3zetl50QYqlPSuUjZI9xbCpaqj3_lzh37OqBWya7kehDGKf1Tns0kyAED6SFkHMNIxsmHU1ZYwHK5o87-IOVY5vQ42qZxmZcuqg2CtnD48lvUUrvWOY1kMgW5rw-4eUyN5-pVA4-JJ6ZDNMK78DallGzqXF5E-UC9_TKqUZfhCfVK3LnUh-djW9YqHUaqfUfS7ndat26TZXdKuKe9rNKTDULEh3_mm8zfewL_iQGtcdXkSRpiZaJqn21Hp55SjRn6BSVeczWQ4Hff-46WiZRdlMQIWl7jxigOlj1L3BQxHOAzqDZ7v54DSibdOFbRYC_Voqo7nJFdOpcJHqgmHxZzJSQil2lXsGBqhpEP4b9CDI-Hsm5hqzkzyLgZWdeS_a0B_NM_yoGbMwlJ_DzyvjDwq8F4HpdmEIZEf2f3bNCYZQf1iEaz8NSmeB98mEt16GOwJr76lTplG7DiIUh714OepDBe212b3jLvUQeYFu_loF3dY_bglYKcCn6nVGqT7B8GW2VpWzOXjBEqYH8HSSNMSUuzvEzgEtIpWfTDPlIB6J51n5iYt74A=w1280-h774-no',
    title: 'Evening',
    location: 'Mountainview',
    landscape: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/jg4iWEgr6_igW974d7ZWHfUE40wIC4y4tl0-cAZmp8uD4-nwiFwPArfJqZfy_NBeLfcuuJ4sB1l38wsnsHjd1TyEv5CC_epa4UJua6CqelMAyeUZ3kWDBrxflmI077GvZ6g4dGsqrSvyQ0rjhgiMF37H-sJkKVIkJeTTL0BUlWgGDzDfVdlBC-zibpZ5mEwVv76sshPR1tXzOMjThmHXNU6PAnWZ2fdis3fj1hD8RwnsrYb8OLs3mH-somOZ3o9T_MDyr1uzFozniCzFNRjW1hKTu-kSM4el-odmzzoQiyFliDb-PxsyaFiWHrPxTVHzx0U0e-5ECmowVBVQjg_ZzrDiC62F5XpAa_llb_OVDMiGC8Hqx_PoUrGKsHeybjoRNuMN1_0xi3agpZWMfRbzXLFB61yVdG5KzPnxShWFIVEJeB7tCfUBnGU5Zee1JEa2uRlt8Xc4HxWVRcFZQMnT_ZEodGdDHeID6OkuLfS8RgTAyOcSCN0019lT5W56lT87W3txfJEkIor4eoxHxNdO0hifwonM3qp3YW6gbTB2BR2_ZdhHw7n2tIXqGtftbdNybXjPSFnIzY10t2IT4OOCjYdsAV73JIwGNQSgIGL_SCpNO4NGatA1uO-cZ5Dhr0-V2SF5K2y71s7KP2Y7t1amG4UVyWITHvlPl882ulwQcQ=w938-h521-no',
    title: 'Clear',
    location: 'MOMA, SF',
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
