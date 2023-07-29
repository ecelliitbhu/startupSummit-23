import type {NextPage} from "next"
import { Card,Text,Row,Col,Button } from "@nextui-org/react"
import {motion,AnimatePresence} from "framer-motion"

interface Props{
  name:string,
  description:string,
  imageURL:string
  company:string
}

const images={
  hidden:{
    opacity:0,
    y:30
  },
  show:{
    opacity:1,
    y:0,
    transition:{
      duration:1
    }
  }
}
const Trailblazzers:NextPage<Props>=(props)=>{
  const {name,description,imageURL,company}=props

  return(
    
    <AnimatePresence>
      <motion.div
      variants={images}
      initial="hidden"
      animate="show"
      >
       
      <Card>
        <Card.Header css={{position:"absolute",top:5}}>
          <Col>
            <Text size={15} weight="bold" tranform="uppercase" color="#babbe6">
              {description}
            </Text>
            <Text h4 color='white'>
              {company}
            </Text>
            
          </Col>
        </Card.Header>
        <Card.Image src={imageURL}></Card.Image>
        <Card.Footer css={{position:"absolute",bottom:0}} >
          <Row>
            <Col>
              <Text color="white" size={20}>
                {name}
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button shadow flat auto rounded color="primary">
                  <Text css={{color:"inherit"}} size={12} weight="bold" transform="uppercase">
                    See other companies
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      </motion.div>
      </AnimatePresence>
    
    
  )
}
export default Trailblazzers