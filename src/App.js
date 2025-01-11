import "./styles.css";
import { styled, useTheme } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from '@mui/material/Typography';

const colorMapping = {
  20: "red",
  40: "orange",
  60: "yellow",
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
        <div>Amiga Pelinro Oma</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga Pelinro II Gotek</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>Amiga Pelinro III Gotel</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>     
      <Container>
        <div>SNES</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>      
      <Container>
        <div>PC (Bud Redhead)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>
      <Container>
        <div>PC (lasten)</div>
        <BorderLinearProgress variant="determinate" value={0} />     
      </Container>                   
      <Container>
        <div>Peli (AC R)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>  
      <Container>
        <div>Peli (AC O)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>    
      <Container>
        <div>Peli (D rally)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>  
      <Container>
        <div>Peli (AC R)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>    
      <Container>
        <div>Peli (Kinetic SR)</div>        
        <BorderLinearProgress variant="determinate" value={0} />
      </Container>   
      <Container>
        <div>Peli (LS BTS)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container> 
      <Container>
        <div>Peli (LS 2)</div>        
        <BorderLinearProgress variant="determinate" value={0} />
      </Container> 
      <Container>
        <div>Peli (SW J O)</div>        
        <BorderLinearProgress variant="determinate" value={0} />
      </Container>      
      <Container>
        <div>Peli (TR)</div>        
        <BorderLinearProgress variant="determinate" value={0} />
      </Container>                                        
      <Container>
        <div>Peli (Twitch)</div>        
        <BorderLinearProgress variant="determinate" value={40} />
      </Container>
      <Container>
        <div>Peli (JD 2017)</div>        
        <BorderLinearProgress variant="determinate" value={40} />
      </Container>     
      <Container>
        <div>Peli (JD 2020)</div>        
        <BorderLinearProgress variant="determinate" value={40} />
      </Container>        
      <Container>
        <div>Peli (JD 2021)</div>        
        <BorderLinearProgress variant="determinate" value={40} />
      </Container>          
      <Container>
        <div>Peli (PT Innocence )</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>        
      <Container>
        <div>Peli (PTI)</div>        
        <BorderLinearProgress variant="determinate" value={10} />
      </Container>                   
      <Container>
        <BorderLinearProgress variant="determinate" value={0} />
      </Container>      
      <Container>
        <BorderLinearProgress variant="determinate" value={60} />
      </Container>
    </div>
  );
}
