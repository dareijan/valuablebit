import "./styles.css";
import { styled, useTheme } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

import Typography from '@mui/material/Typography';

const colorMapping = {
  1: "grey",  
  2: "grey",  
  5: "grey",  
  10: "grey",
  20: "grey",
  30: "orange",  
  40: "orange",
  50: "green",
  60: "green",    
  70: "green",
  80: "darkgreen",
  90: "darkgreen",    
};


const Container = styled("div")(({ theme }) => ({
  boxShadow: theme.shadows[2],
  padding: "10px",
}));

export default function App() {
  const theme = useTheme();

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Container>
        <div>Jousi</div>
        <LinearProgress variant="determinate" value={5} />     
      </Container>            
      <Container>
        <div>Amiga (It Came From The Desert)</div>
        <LinearProgress variant="buffer" value={10} valueBuffer={50} />
      </Container>
      <Container>
        <div>Amiga (Spherical)</div>
        <LinearProgress variant="buffer" value={10} valueBuffer={50} />
      </Container>
      <Container>
        <div>Amiga (Lemmings)</div>
        <LinearProgress variant="determinate" value={5} />     
      </Container>                
      <Container>
        <div>PC (Bud Redhead)</div>
        <LinearProgress variant="determinate" value={50} />     
      </Container>
      <Container>
        <div>PC (Indiana Jones and the fate of Atlantis)</div>
        <LinearProgress variant="determinate" value={2} />     
      </Container>      
      <Container>
        <div>PC (lasten opetuspelit)</div>
        <LinearProgress variant="determinate" value={20} />     
      </Container>                       
      <Container>
        <div>Peli (AC Rogue)</div>        
        <LinearProgress variant="determinate" value={10} />
      </Container>  
      <Container>
        <div>Peli (AC Origins)</div>        
        <LinearProgress variant="determinate" value={10} />
      </Container>    
      <Container>
        <div>Peli (D rally)</div>        
        <LinearProgress variant="determinate" value={10} />
      </Container>  
      <Container>
        <div>Peli360 (AC II)</div>        
        <LinearProgress variant="determinate" value={10} />
      </Container>    
      <Container>
        <div>Peli 360 (Witcher II)</div>        
        <LinearProgress variant="determinate" value={10} />
      </Container>
      <Container>
        <div>Peli (Hectic)</div>        
        <LinearProgress variant="determinate" value={5} />
      </Container>   
      <Container>
        <div>Peli (Life Is Strange Before The Storm)</div>        
        <LinearProgress variant="determinate" variant="buffer" value={10} valueBuffer={40} />
      </Container> 
      <Container>
        <div>Peli (Life Is Strange 2)</div>        
        <LinearProgress variant="determinate" value={2} />
      </Container> 
      <Container>
        <div>Peli (Star Wars Jedi Order)</div>        
        <LinearProgress variant="determinate" value={5} />
      </Container>      
      <Container>
        <div>Peli (Plague Tale Innocance)</div>        
        <LinearProgress variant="buffer" value={40} valueBuffer={60} />
      </Container>      
      <Container>
        <div>Peli (Tomb Raider)</div>        
        <LinearProgress variant="determinate" value={40} />
      </Container>                                         
      <Container>
        <div>Peli (Just Dance 2017)</div>        
        <LinearProgress variant="determinate" variant="buffer" value={20} valueBuffer={60} />
      </Container>     
      <Container>
        <div>Peli (Just Dance 2020)</div>        
        <LinearProgress variant="determinate" variant="buffer" value={10} valueBuffer={60} />
      </Container>        
      <Container>
        <div>Peli (Just Dance 2021)</div>        
        <LinearProgress variant="determinate" value={10} />
      </Container>          
      <Container>
        <div>Peli (Alan Wake)</div>        
        <LinearProgress variant="determinate" value={5} />
      </Container>
      <Container>
        <div>GB (DuckTales II)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container> 
      <Container>
        <div>GB (Donkey Kong)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>GB (Kirby)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>GB (I)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>GB (II)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>GB (III)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>GB (IV)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>      
      <Container>
        <div>GB (VI)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>   
      <Container>
        <div>GB (VII)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>   

      <Container>
        <div>Amiga (I)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container> 
      <Container>
        <div>Amiga (II)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga (III)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga (IV)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga (V)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga (VI)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>            
      <Container>
        <div>Amiga (VII)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container> 
      <Container>
        <div>Peli (I)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container> 
      <Container>
        <div>Peli (II)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (III)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (IV)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (I)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container> 
      <Container>
        <div>Peli (II)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (III)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (IV)</div>
        <LinearProgress variant="determinate" value={0} />     
      </Container>      
    </div>
  );
}
