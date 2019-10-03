import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import GermanyImage from './images/bg_6.jpg';
import BelgiumImage from './images/bg_3.jpg';
import FlandersImage from './images/bg_4.jpg';
import londonImage from './images/bg_5.jpg';
import "./App.css";

// Styles For Grid Sections Background Images  
const styles = {
  germanyImage:{
    backgroundImage: `url(${GermanyImage})`,
   
  },
  belgiumImage:{
    backgroundImage: `url(${BelgiumImage})`,  
  },
  flandersImage:{
    backgroundImage: `url(${FlandersImage})`, 
  },
  londonImage:{
    backgroundImage: `url(${londonImage})`,
  }
 
};

// Style For Main Root Element
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
 
  
}));


export default function App() {
  const classes = useStyles();
  
  return (
   
    <div className={classes.root}>
      {/* Logo Section  Starts Heres*/}
      <div className="logo"> 
          LOGO HERE
      </div>
      {/* Logo Section  Ends Heres*/}

      {/* Main Grid Container  Starts Here*/}
      <Grid container>

        {/* Section 1 Starts Here */}
        <Grid item  xs={12} className="topSectionContainer bgImage" >
           
              <h1 className="title" >Buy this data</h1>
                <p className="content">  You can buy data products already provided by the data provider ,
                      or request data provider to prepare spectific dat set you need.
                      You can buy data products already provided by the data provider ,
                      or request data provider to prepare spectific dat set you need</p>
                <p className="title" >You can choose to buy in euros or DTX's</p>
                
                <Fab className="topSectionBtn"  size="medium" variant="extended" aria-label="add" >
                      More About DTX!
                    </Fab>
         
         
        </Grid>
        {/* Section 1 Ends Here */}

         {/* Section 2 Starts Here */}
         <Grid item xs={12} sm={6} className="contentDet minGridHeight">
                <h2 className="contentHead" >BELGIUM</h2>
                <p className='contentSubTitle'> <b>Satellite imagery of buildings and roads Belgium</b></p>
                <p> Price: 500/DTx xxx</p>
              <p> Access to this data : 1 day</p>
              <br></br>
              <p >More Info</p>
                
                <Fab className="subSectionBtn" size="medium" variant="extended" color="primary" aria-label="add" >
                BUY NOW
                      </Fab>
            </Grid>
            <Grid item xs={12} sm={6} className="minGridHeight bgImage" style={styles.belgiumImage}>
             
             
            </Grid>
       
         {/* Section 2 Ends Here */}
        

         {/* Section 3 Starts Here */}
          <Grid item xs={12} sm={6} className="minGridHeight bgImage" style={styles.flandersImage}>
              
          </Grid>
          <Grid item xs={12} sm={6} className="contentDet minGridHeight">
              <h2 className="contentHead" >FLANDERS</h2>
              <p className='contentSubTitle'> Satellite imagery of buildings and roads Flanders</p>
              <p> Price :500/DTx xxx</p>
              <p> Access to this data : 1 day</p>
             
              <Fab className='subSectionBtn'   size='medium' variant="extended" color="primary" aria-label="add" >
               BUY NOW
              </Fab>
              <p> Format: Stream</p>
              <p> Or make a Bid</p>
              <Fab className="subSectionBtn" size="medium" variant="extended"  size='medium' color="primary" aria-label="add" >
                     SEND A BID TO THE SELLER
                    </Fab>
            </Grid>
      
         {/* Section 3 Ends Here */}

          {/* Section 4 Starts Here */}
            <Grid item xs={12} sm={6} className="contentDet minGridHeight">
                <h2 className="contentHead" >GERMANY</h2>
                <p className="contentSubTitle"> Satellite imagery of buildings and roads Germany</p>
                <p> Make your best bid</p>
                <p> Access to this data : 1 day</p>
                <br></br>
                <p>More Info</p>
                <p> Format: Stream</p>
                <Fab className="subSectionBtn" size="medium" variant="extended" color="primary" aria-label="add" >
                      SEND A BID TO THE SELLER
                      </Fab>
            </Grid>
            <Grid item xs={12} sm={6} className="minGridHeight bgImage" style={styles.germanyImage}>
             
             
            </Grid>
        
           {/* Section 4 Ends Here */}
        

           {/* Section 5 Starts Here */}

            <Grid item xs={12} sm={6}  className="minGridHeight bgImage" style={styles.londonImage}>
             
            </Grid>
            <Grid item xs={12} sm={6}className="contentDet minGridHeight">
              <h2 className="contentHead" >UK-LONDON</h2>
              <p className='contentSubTitle'> Satellite imagery of buildings and roads UK-London</p>
              <p>Soon available form buying</p>
              <p> Access to this data : 1 day</p>
              <br></br>
              <p>More Info </p>
              <p> Format: Stream</p>
              <Fab className="subSectionBtn" size="medium" variant="extended" color="primary" aria-label="add" >
                     CONTACT SELLER
              </Fab>
            </Grid>
       
           {/* Section 5 Ends Here */}

            {/* Footer Section Starts Here */}
              <Grid item xs={12}  className="footerContainer">
              
                  <div className="fullwidthContent">  Do you need a specific dataset ? send a direct message to data provider and they will prepare it for you.</div>
                   
                  <Fab className="subSectionBtn alignCenter"  size="medium" variant="extended" color="primary" aria-label="add" >
                        SEND MESSAGE
                      </Fab>
              </Grid>
            {/* Footer Section Ends Here */}
      </Grid>
      {/* Main Grid Container  Ends Heres*/}
    </div>
    
  );
} 
