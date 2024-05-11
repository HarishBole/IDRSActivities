import './exploreall.css'
import { IoPeople } from "react-icons/io5"
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineTour } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import img from '../../assets/images/gooleicon.jpg'

export function ExploreAll() {  
    return (
    <div>
         <div className="image-container">
                <img className="activityimg1" src="https://www.explore.com/img/gallery/heres-why-a-hot-air-balloon-ride-in-cappadocia-should-be-on-your-bucket-list/l-intro-1673969469.jpg"></img>

                <div className="divwaitingtext1">
                    <h1>Make Your Travel</h1>
                    <h1>Wiselist, we'll do the rest</h1>
                    <h5 className="wi">Special offers suite for your plan</h5>

                  
                </div>
              

                <div className="exploredata">
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                    <div style={{display:"flex", flexDirection:"row"}} >
                        <div className='srearchpillpax1'>
                        <FaGlobeAmericas className="pilliconflex"/>&nbsp;&nbsp;
                            <label><h1><strong >Publick</strong></h1></label></div>
                            
                       
                        
                    </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                    
                    <div className='srearchpillpax srearchpillpaxborder' >
                        <div style={{display:'flex',flexDirection:"row"}}><IoPeople style={{ fill:"black",fontSize:"45px", marginRight:"10px"}} />
                        <h1>Number of people</h1></div>
                    
                        <div>
                            <select>
                                <option>choose number</option>
                            </select>
                        </div>
                    </div>

                <div className='srearchpillpax srearchpillpaxborder'>
                    <div style={{display:'flex',flexDirection:"row"}}><FaRegCalendarAlt style={{ fill:"black",fontSize:"45px", marginRight:"10px"}} />
                        <h1>Date</h1></div>
                        <div>
                           <input type="date" value='Chose Date'></input>
                        </div>
                    </div>
                    <div className='srearchpillpax srearchpillpaxborder' >
                        <div style={{display:'flex',flexDirection:"row"}}><IoTimeOutline style={{ fill:"black",fontSize:"45px", marginRight:"10px"}}/>
                        <h1>Time</h1></div>
                    
                        <div>
                        
                            <input type="time" value='Chose Date'></input>
                        </div>
                    </div>
                    <div className='srearchpillpax srearchpillpaxborder' >
                        <div style={{display:'flex',flexDirection:"row"}}><MdOutlineTour style={{ fill:"black",fontSize:"45px", marginRight:"10px"}}/>

                        <h1>Tour</h1></div>
                    
                        <div>
                        
                        <select>
                                <option>choose place</option>
                            </select>
                        </div>
                    </div>

                    <div className='srearchpillpax srearchpillpaxborder' >
                        <div style={{display:'flex',flexDirection:"row"}}><FaCarRear style={{ fill:"black",fontSize:"45px", marginRight:"10px"}}/>

                        <h1>Transportation</h1></div>
                    
                        <div>
                        
                        <select>
                                <option>select Transaction</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <div className='srearchpillpax srearchpillpaxborder'>
                    <button className="searchbut"><IoIosSearch style={{ fontSize:"60px", marginRight:"10px"}}/></button></div>
                    </div>

                    </div>
                    

                    </div>











        
            
            </div>
        </div>  

            <div className="exploreheadertext">
                <h1>Explore All The Things To Do In IDRIS</h1></div>
            <div style={{ display: "flex" }} className="image-container plasescontainer">
                <div className=" explorecityimgflex">



                    <div> <img className="exploreplasesimg" src="https://www.shutterstock.com/image-photo/luxury-cruise-ship-sailing-port-600nw-678153238.jpg"></img>
                        <div className="exploreplasesimgtext1 exploreimgtextleft1"><h1 style={{ textAlign: "center" }}><strong>Cruises</strong></h1>
                            
                        </div>
                    </div>

                    <div> <img className="exploreplasesimg" src="https://blog.trainman.in/static/blog/images/museum-tour-header.jpg"></img>
                        <div className="exploreplasesimgtext1 exploreimgtextleft1"><h1 style={{ textAlign: "center" }}><strong>Museum Tour</strong></h1>
                    
                        </div>
                    </div>
                 </div>
                 <div> <img className="exploreplasesimg" style={{height:"63%"}} src="https://i0.wp.com/maldivestourism.in/wp-content/uploads/how-to-reach-maldives-from-goa-flights-cruise-visa.jpg?fit=1568%2C1045&ssl=1"></img>
                    <div className="exploreplasesimgtext1 exploreimgtextleft1"><h1 style={{ textAlign: "center" }}><strong>Beach Tours</strong></h1>
                        
                    </div>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"row"}}>


                    <div> <img className="exploreplasesimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-Ym9avb-mzsPbcutdmCSKNZ4lWIcRHzRv_4u_-1gkw&s"></img>
                        <div className="exploreplasesimgtext1 exploreimgtextleft1"><h1 style={{ textAlign: "center" }}><strong>Cityy Tours</strong></h1>
                        
                        </div>
                    </div>
                    <div> <img className="exploreplasesimg" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"></img>
                        <div className="exploreplasesimgtext1 exploreimgtextleft1"><h1 style={{ textAlign: "center" }}><strong>Food</strong></h1>
                        
                        </div>
                    </div>
                </div>
                <div style={{flexDirection:"column"}}> <img className="exploreplasesimg" style={{width:"95%",height:"43%"}} src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/15/09/istock-483629308.jpg"></img>
                    <div className="exploreplasesimgtext1 exploreimgtextleft1"><h1 style={{ textAlign: "center" }}><strong>Hiking</strong></h1>
                        
                    </div>
                </div>
                </div>



            </div>

        <div>
            <div className="exploreheadertext plasescontainer" style={{marginTop:"0px"}}>
                <h1>Plane Your Perfect Trip</h1>
                <h2 className="mt-2">Search Flights & Plases Hire to our most popular plases </h2>
                </div>

                <div className="explore-card-left explore-card-flex">


                    <div style={{ display: "flex", flexDirection: "row" }} className="explore-card"> <img className="tripimg" src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"></img>
                        <div className="tripenametext"><h1>Parice, Froce</h1>
                            <h2>
                                <ul><li>Flights</li>
                                    <li>Hotels</li>
                                    <li>Resorts</li></ul>
                            </h2></div>

                    </div>


                    <div style={{ display: "flex", flexDirection: "row" }} className="explore-card"> <img className="tripimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aPJikAgarSmCGTCrDv4pYwur1IOLZFQxkPFY-daHwA&s"></img>
                        <div className="tripenametext"><h1>Tokyo,Japan</h1>
                            <h2>
                                <ul><li>Flights</li>
                                    <li>Hotels</li>
                                    <li>Resorts</li></ul>
                            </h2></div>

                    </div>



                    <div style={{ display: "flex", flexDirection: "row" }} className="explore-card"> <img className="tripimg" src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/09/full/1704779827-6295.jpg"></img>
                        <div className="tripenametext"><h1>Male, Maldives</h1>
                            <h2>
                                <ul><li>Flights</li>
                                    <li>Hotels</li>
                                    <li>Resorts</li></ul>
                            </h2></div>

                    </div>
                </div>

                
                <div className="explore-card-left explore-card-flex">


                    <div style={{ display: "flex", flexDirection: "row" }} className="explore-card"> <img className="tripimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYMwVPcDz3C2LsJNCeb8tW5Doji96yRB2Om7pVc76pA&s"></img>
                        <div className="tripenametext"><h1>New Yark, Us</h1>
                            <h2>
                                <ul><li>Flights</li>
                                    <li>Hotels</li>
                                    <li>Resorts</li></ul>
                            </h2></div>

                    </div>


                    <div style={{ display: "flex", flexDirection: "row" }} className="explore-card"> <img className="tripimg" src="https://cdn.britannica.com/82/167882-050-8F4AC206/Blue-Mosque-Istanbul.jpg"></img>
                        <div className="tripenametext"><h1>Istanbul, Turkey</h1>
                            <h2>
                                <ul><li>Flights</li>
                                    <li>Hotels</li>
                                    <li>Resorts</li></ul>
                            </h2></div>

                    </div>



                    <div style={{ display: "flex", flexDirection: "row" }} className="explore-card"> <img className="tripimg" src="https://deih43ym53wif.cloudfront.net/dubai-palm-jumeirah-island-shutterstock_1291548640.jpg_3ab124c2b9.jpg"></img>
                        <div className="tripenametext"><h1>Dubai, UAE</h1>
                            <h2>
                                <ul><li>Flights</li>
                                    <li>Hotels</li>
                                    <li>Resorts</li></ul>
                            </h2></div>

                    </div>
                </div>

            </div>

                 
            <div style={{  marginTop:"100px"}} className="image-container  row">

            <div  className="col-6"> 
            <img className="exploreplasesimg iconmrleft" style={{height:"90%"}} src={img}></img>
                    <div className="exploreplasesimgtext1 exploreimgtextleft"><h1 style={{ textAlign: "center" }}><strong>GOA</strong></h1>
                        
                    </div>
                </div>
                <div className=" explorecityimgflex col-6">



                    <div> <img className="exploreplasesimg "  style={{width:"70vh"}}src="https://static.toiimg.com/photo/54559212.cms"></img>
                        <div className="exploreplasesimgtext2 exploreimgtextleft"><h1 style={{ textAlign: "center" }}><strong>All Activities in Dubai</strong></h1>
                        <button className="seeallbut" style={{background:"white",color:"black"}}><strong>See All</strong></button>
                        </div>
                    </div>

                    <div> <img className="exploreplasesimg" style={{width:"70vh"}} src="https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg"></img>
                        <div className="exploreplasesimgtext2 exploreimgtextleft"><h1 style={{ textAlign: "center" }}><strong>Best Action Deals</strong></h1>
                            {/* <h3 style={{ textAlign: "center" }}><strong>700+ Activities</strong></h3> */}
                            <button className="seeallbut" style={{background:"white",color:"black"}}><strong>See All</strong></button>
                        </div>
                    </div>
                </div>
               
                 </div> 

            <div className="image-container " style={{marginTop:"150px"}}>
                
                <img className="activityimg1" src="https://i0.wp.com/pediaa.com/wp-content/uploads/2018/08/Difference-Between-Hill-and-Mountain_Figure-2.jpg?fit=800%2C435&ssl=1"></img>
                <div className="divwaitingtext1">
                <h1>Keep Things Flexible</h1></div>
            </div>
           
           
            <div className="exploreheadertext exploreimgtextleft" style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex"}}><h1>Special Offers</h1></div>
                <div style={{display:"flex"}}> <button className="seeallbut"><strong>See all</strong></button></div>
                
               
                </div>

            <div>

        
                <div className="plasescontainer1  explore-card-flex  mt-5 row" style={{width:"95%"}}>
                    <div className="col-2" style={{ display: "flex", flexDirection: "row" }}>
                        <div> <img className="imgbor-50" src="https://www.india-briefing.com/news/wp-content/uploads/2013/11/Kolkata-City-Profile.jpg"></img>
                        </div>
                        <div className="tripenametext"><h1><strong style={{ color: "orange" }}>Last Day Is may14</strong></h1>
                            <h1><strong>Up to 50% is Disscount on  </strong></h1>
                            <h1><strong> Early Booking</strong></h1>
                        </div>
                    </div>

                    <div className="col-2"  style={{ display: "flex", flexDirection: "row" }}>
                        <div> <img className="imgbor-50" src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="></img>
                        </div>
                        <div className="tripenametext"><h1><strong style={{ color: "orange" }}>Last Day Is may25</strong></h1>
                            <h1><strong>In Hotels Near Cities A</strong></h1>
                            <h1><strong>Short Break</strong></h1>
                        </div>
                    </div>
                    <div className="col-2"  style={{ display: "flex", flexDirection: "row" }}>
                        <div> <img className="imgbor-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVXpaicCt4out1fDypSOwjIVj72GuL5UWTwG04SU2lQ&s"></img>
                        </div>
                        <div className="tripenametext"><h1><strong style={{ color: "orange" }}>Last Day Is may24</strong></h1>
                            <h1><strong>Descover Iceland kayaking </strong></h1>
                            <h1><strong>Toures</strong></h1>
                        </div>
                    </div>
                    <div className="col-2"  style={{ display: "flex", flexDirection: "row" }}>
                        <div> <img className="imgbor-50" style={{float:'right'}} src="https://www.thoughtco.com/thmb/oE-wRfhScZ6xZau3HyQYsPTpJ8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Christ_the_Redeemer-140514153-56a02f845f9b58eba4af490a.jpg"></img>
                        </div>
                        <div className="tripenametext"><h1><strong style={{ color: "orange" }}>Last Day Is may17</strong></h1>
                            <h1><strong>Up to 50% is Disscount on </strong></h1>
                            <h1><strong>Early Booking</strong></h1>
                        </div>
                    </div>

                </div>
                
            </div>

            <div className="exploreheadertext plasescontainer">
                <h1>Travel Articles</h1>
                
                </div>

                <div>
                <div className=" explore-card-left explore-card-flex  row">
                <div style={{ display: "flex", flexDirection:"column" }} className='col-3'>
                        <div > <img  className="imgbor tripimg1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPt8cfFZo2gqMnCThWt2a8FpyzXH6gb_wEefcu5U-iPQ&s"></img>
                        </div>
                        <div className="tripenametext">
                            <label>Aprial 06 2024</label>&nbsp;&nbsp;<label>By all Thufan</label>
                            <h1><strong>Kenya vs Tanzonia Safaria:The Better Afriacn</strong></h1>
                            
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection:"column"}} className='col-3'>
                        <div> <img className="imgbor tripimg1"  src="https://i.pinimg.com/originals/dc/3c/a7/dc3ca7a7aa88abef0cd527998201b820.jpg"></img>
                        </div>
                        <div className="tripenametext">
                            <label>Aprial 24 2024</label>&nbsp;&nbsp;<label>By Email Johson</label>
                            <h1><strong>Explore the Serengeti :A Wild life adventure</strong></h1>
                            
                        </div>
                    </div>
                    
                    <div style={{ display: "flex", flexDirection:"column" }} className='col-3'>
                        <div> <img  className="imgbor tripimg1" src="https://media.istockphoto.com/id/1188258871/photo/a-smiling-woman-rides-a-camel-at-sunset-in-a-desert-outside-of-marrakech-morocco.jpg?s=612x612&w=0&k=20&c=Vr0RRyUU4Vs0YuZhIs-3vtKBpYOPSnEHWGTL0kHiHQU="></img>
                        </div>
                        <div className="tripenametext">
                            <label>Aprial 26 2024</label>&nbsp;&nbsp;<label>By maxwell</label>
                            <h1><strong>Into to the Wild :An Unforgettable safari Journey</strong></h1>
                            
                        </div>
                    </div>

                    </div>
                </div>

                <div className="">
                <div style={{float:"right",marginBottom:"100px"}}> <button className="seeallbut"><strong>See all</strong></button></div>

                </div>
            
        </div>
    )
}