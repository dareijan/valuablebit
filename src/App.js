import "./styles.css";
import { styled, useTheme } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from '@mui/material/Typography';

const colorMapping = {
  1: "blue",  
  2: "blue",  
  5: "red",  
  10: "red",
  20: "red",
  30: "orange",  
  40: "orange",
  50: "orange",
  60: "orange",    
  70: "green",
  80: "darkgreen",
  90: "darkgreen",    
};

const BorderLinearProgress = styled(LinearProgress)(({ theme, ...props }) => ({
  margin: 10,
  height: 15,
  backgroundColor: "#ddd",

  ["& .MuiLinearProgress-bar"]: {
    backgroundColor: colorMapping[props.value],
    borderRight: "3px solid  #fff",
  },
}));

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
        <div>○ Amiga (It Came From The Desert)</div>
        <BorderLinearProgress variant="determinate" value={10} />     
      </Container>
      <Container>
        <div>Amiga (Spherical)</div>
        <BorderLinearProgress variant="determinate" value={10} />     
      </Container>
      <Container>
        <div>Amiga (Lemmings)</div>
        <BorderLinearProgress variant="determinate" value={5} />     
      </Container>                
      <Container>
        <div>PC (Bud Redhead)</div>
        <BorderLinearProgress variant="determinate" value={50} />     
      </Container>
      <Container>
        <div>PC (Indiana Jones and the fate of Atlantis)</div>
        <BorderLinearProgress variant="determinate" value={2} />     
      </Container>      
      <Container>
        <div>PC (lasten opetuspelit)</div>
        <BorderLinearProgress variant="determinate" value={20} />     
      </Container>     
      <Container>
        <div>○ Peli (Plague Tale Innocence)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>                      
      <Container>
        <div>○ Peli (AC Rogue)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>  
      <Container>
        <div>Peli (AC Origins)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>    
      <Container>
        <div>Peli (D rally)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>  
      <Container>
        <div>Peli(360) (AC II)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>    
      <Container>
        <div>Peli 360 (Witcher II)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>
      <Container>
        <div>Peli (Hectic)</div>        
        <BorderLinearProgress variant="determinate" value={5} />
      </Container>   
      <Container>
        <div>Peli (LS Before The Storm)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container> 
      <Container>
        <div>Peli (LS 2)</div>        
        <BorderLinearProgress variant="determinate" value={2} />
      </Container> 
      <Container>
        <div>Peli (SW Jedi Order)</div>        
        <BorderLinearProgress variant="determinate" value={5} />
      </Container>      
      <Container>
        <div>○ Peli (Plague Tale Innocance)</div>        
        <BorderLinearProgress variant="determinate" value={40} />
      </Container>      
      <Container>
        <div>Peli (Tomb Raider)</div>        
        <BorderLinearProgress variant="determinate" value={40} />
      </Container>                                         
      <Container>
        <div>○ Peli (Twitch)</div>        
        <BorderLinearProgress variant="determinate" value={70} />
      </Container>
      <Container>
        <div>Peli (JD 2017)</div>        
        <BorderLinearProgress variant="determinate" value={20} />
      </Container>     
      <Container>
        <div>Peli (JD 2020)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>        
      <Container>
        <div>Peli (JD 2021)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>          
      <Container>
        <div>Peli (Alan Wake)</div>        
        <BorderLinearProgress variant="determinate" value={1} />
      </Container>
      <Container>
        <div>Amiga (I)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container> 
      <Container>
        <div>Amiga (II)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga (III)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga (IV)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga (V)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga (VI)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>            
      <Container>
        <div>Amiga (VII)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container> 
      <Container>
        <div>Peli (I)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container> 
      <Container>
        <div>Peli (II)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (III)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (IV)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (I)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container> 
      <Container>
        <div>Peli (II)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (III)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Peli (IV)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>      
    </div>
  );
}
