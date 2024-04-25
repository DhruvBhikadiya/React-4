import Card from "./Card";

var Home = () => {
    const mobiles = [
        {img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTruij8XGMpJY9K0hrn3fC_HlRyfwDixxA5V8wCzYTbPTc4UP_uixwOvtQcJOh1yZl7YI3HXuKwGUSfG9_M8pTzeg4zg5aSuSbMCaIzfqptMRBXLY2xNXHITw&usqp=CAE",name:"Samsung galaxy S24 ultra",price:"₹1,39,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQquNpr2idMaaPEX4Ui0J6fkQ5zOz1tfilma7nS1kj4vn0sTU56tWwlYywEXyVjmt6JvB19fAXfbXF8XT6PElbZ9u2t9fWy54OofJ4VMJkUA6vN2a4rrctcig&usqp=CAE",name:"Nothing Phone (1)",price:"₹30,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQF5si5C4JPn0bNQrs1n4_oC5J96WZaq4g598aseGNKa97KENDyE1NGgq530YbhcdY0j3_KjBat8-AJ1ymwD4rvmY_WzDsC&usqp=CAE",name:"Samsung Galaxy Z Flip 3 5G",price:"₹27,999.00",description:"Best phone comes with best features",rating:"4"},
        {img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIhevGbOxPtJmpjV08_dRumI-tiaQbQIP1k0wxj8ZtHFOBD4ePqc_4WylCs19GCxvrgeXFZnKwW0gdD7Zmyrus8CGw9Jc7-O7LxSqf57Uv&usqp=CAE",name:"Nothing Phone (2)",price:"₹31,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8IjsOyPLENAbEz0PRdLWyJ-LjNuShCer39GHJbxIRGPsjxhju5c5kJrMeB1AgC6BvqgWC4lgN6T0UWx38N10dauKH57Cdd5gmFplUdUjmi1XVJbTOe7AA0Wk&usqp=CAE",name:"Samsung Galaxy A14 5G ",price:"₹13,499.00",description:"Best phone comes with best features",rating:"4"},
        {img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6M-kGKvdIAi1pnRWamU83QzAp4OpfFrkQr90PgmW29eDfvpTtZMaiA9n8UMWf6V0M17RAR5XiJN2W1QSF9a6mbwlioYipVQ_OF20ntn67NQ1PtzY0DoAd&usqp=CAE",name:"Nothing Phone (2a)",price:"₹20,999.00",description:"Best phone comes with best features",rating:"4"},
        {img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSP-w0PDEoKX7b5B2WrXLROTo4qfDcf7z-yryj6z-50s68YxiMH9pkDCntP2tfShBY2IQUxdGC2BgNIqcPHR9ETasMHSogCg9rEr8uYlDZJ&usqp=CAE",name:"Samsung Galaxy S21 Ultra",price:"₹34,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVqwnfx65i3nEP5E2nVo92glBuSGE-EM-_eK85OsylNlNMqeuSuATM_uLCgDeAgKOCmj7F3Eq4JI9iaxh_KqNPfxHWQFtCl8xkePIpITrAVA5D7mMAHwbXF7w&usqp=CAE",name:"Iphone 15",price:"₹79,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRWYwVhUj9qkmnINCTcddH_PBm-N6T4tjxO34tQwtc_8FGQnv5W5vB2MD46xw5xRCmHY0DR64TzYtYASGz3s_L73O25E0UHJAFXkfT5y8Vs7xWqj8ZeEv4lkg&usqp=CAE",name:"Iphone 15 pro max",price:"₹1,59,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXcamQAvsdf-EwjUoDYrXmDbaDIa0fap-DqJgRVveVAtGyhkHQ0eotOmVBcayjwPWMFAoydx_SBncBwC3xKhbE3ky9oLxiNVfgIm1SrnbhQezTQp8lYZtx0g&usqp=CAE",name:"Iphone 15 pro",price:"₹1,34,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvLCitWjDEIKsmKaBzW2mi_BraovkGTcsRKSCCZTlGeMayRCEb9a18H4KFhRZ7FdjLYizrDYM9_e19FdZI176-fM2iFA6noGPDz-fdoL-IvRfn1xnN-x-npg&usqp=CAE",name:"Iphone 14 pro",price:"₹1,29,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBsG0N60PSnvrSDoOfiiDcm_0AqChA-p0uCN6onb_7bVUzp3DKRfqDNsTLIRw7TczN_vLT57_zte3HlO1jAfWzVF2_BwXDtS5LBH_lK0shorltR4cy3RoZ8w&usqp=CAE",name:"Realme 12x 5g",price:"₹13,999.00",description:"Best phone comes with best features",rating:"4"},
        {img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0mP_xuaZTxmZ6Df58TvajcYZD5StsbI5ChyhlBJNv0oV-eFykHWAg6aEqUOh5aikNLzWgBPhsp96PIsAt27cAo20cZ2ZdbrIR2UD5cuLm&usqp=CAE",name:"Xiaomi 13 Ultra Limited Color Edition 5G ",price:"₹1,42,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSqKpNsecE4e_nz-8PTtU5VS95RFzWZaM9_MkZkuqBFM02Cn4xNLy1Ayr6dBtIeE2knC-MX6cW9aSnE-BqwuMpO0jcfbOgKootvVRTD0BKIne-uMIRY-kr&usqp=CAE",name:"realme 12 Pro+ 5G",price:"₹33,999.00",description:"Best phone comes with best features",rating:"5"}, 
        {img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRoUTNJ1PRJWS_FiSw0sQqrOwU5m4yIh6ZDgW8jCxIX9pO2NdfuD5B4L-D8zdAPz_t3UY6Fqi9exMfm4zB9OuvteBd0uPHRp-r8wQ83Xjh9jwFeXouD8KX7&usqp=CAE",name:"OnePlus 10 Pro 5G",price:"₹66,999.00",description:"Best phone comes with best features",rating:"5"}, 
        {img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0OzxJeoaJtf5R5xfZaFFGLCDnuc8iCT3HHroS15TXgEPJrf3d8X_D6KQPqucpc-L-XmUfYq9s2K68-nnpMW5F1zxpXaM4_DsR4kRitedJZ8lgTbkkbg0N1A&usqp=CAE",name:"iQOO 12 5G",price:"₹53,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSf-dcCEg97IVRi093UG_a3lexhEQsBzTLyUyhpzb1j78iPaZJQ5aYvEJhPt653ey4kZyQPsNgzyaJZVAxuHrQGiLObXnZOUC5zYtgSb6fvX22X6XyZ7y_Q&usqp=CAE",name:"ROG PHONE 6 Black",price:"₹47,999.00",description:"Best phone comes with best features",rating:"5"},
        {img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQE5YdNF9cbOCcv3Mz30OmChu1VhLftWNqzzNYmikecbV1R40rokOn5_ZkU9MnlJB0EXEDSbnOObELZOfMOAFTaNFjCAZmZN6miSRI-LTA6ahg_1ZL-QiS6&usqp=CAE",name:"Asus ROG Phone 8 Pro Edition",price:"₹1,25,999.00",description:"Best phone comes with best features",rating:"5"}, 
        {img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSxJZKdHYIP21YimZIJnZjp40a8xyEGcc213hiqWkgx_S1XyxFDe8LN1kruxw7APdTMzrME7BAazOTFja_g-qnkv2IO88JW8aIdcDsdLsw&usqp=CAE",name:"Google - Pixel 7 Pro ",price:"₹39,999.00",description:"Best phone comes with best features",rating:"5"}, 
        {img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCtm9RO7crAb1dYlpXXHrJcnIZ0Zb7s5DTx02pMzIXMnfiItjnkCdWfejZYSdiObkOVD_AeBrmFSac4re-ntY36sFSzRG3W9H82vTA-V6yDje0reIBaknA&usqp=CAE",name:"Lava Blaze 2 5G",price:"₹11,200.00",description:"Best phone comes with best features",rating:"5"}, 
    ]

    return (
        <div className="container">
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {mobiles.map((v,i) => <Card  {...v}/>)}
            </div>
        </div>
    )
}

export default Home;