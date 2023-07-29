"use client"
import Trailblazzers from "@/components/Trailblazzers"
import { Container ,Grid,Button,Row} from "@nextui-org/react"
import { useState } from "react"
import {motion,AnimatePresence} from "framer-motion"

const variants={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.5
    }
  }
}

const details=[
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } , {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Agarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
  {
    name:"Bhavish Aggarwal",
    description:"Co-Founder & CEO",
    imageURL:"https://littlevisuals.co/images/moss.jpg",
    company:"OLA"
  } ,
]
// const entry= {
//   name:"Bhavish Aggarwal",
//   description:"Co-Founder & CEO",
//   imageURL:"https://littlevisuals.co/images/moss.jpg",
//   company:"OLA"
// } 
const itemsPerPage=5;

export default function Home() {
  const [page,setPage]=useState(1);
  const handleChange=(newpage:React.ChangeEvent<HTMLButtonElement>)=>{
    setPage(parseInt(newpage.target.value,10))
  }
  const startIndex=(page-1)*itemsPerPage
  const endIndex=startIndex+itemsPerPage
  const itemsToShow = details.slice(startIndex, endIndex);
  const totalPages = Math.ceil(details.length / itemsPerPage);

  return (
    
      <Container fluid css={{height:"100vh"}}>
    
    <AnimatePresence>
      <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      >

            <Grid.Container gap={2}>
        
        {
         itemsToShow.map((entry)=>(
           <>
           <AnimatePresence>
            

           <Grid xs={12} md={4}>
            
             <Trailblazzers key={entry.name} name={entry.name} description={entry.description} imageURL={entry.imageURL} company={entry.company}/>
           </Grid>
           </AnimatePresence>
           </>))
       }
       
   </Grid.Container>
      </motion.div>
    </AnimatePresence>
   
      <Grid.Container gap={1} justify="center">
          {Array.from({length:totalPages},(_,index)=>(
            <Grid key={index} xs={3} >
              <Row justify="center">
                
              <Button value={index+1} onClick={handleChange}
              color={page===index+1?"secondary":"primary"}
              ghost={page===index+1}>
                {index+1}
              </Button>
              </Row>
            </Grid>
          ))}
          {/* <Button color="primary" value={1}>1</Button> */}
      </Grid.Container>
    </Container>
 
  )
}
